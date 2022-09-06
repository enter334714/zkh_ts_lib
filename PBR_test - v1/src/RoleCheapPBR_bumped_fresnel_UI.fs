#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif
//precision highp sampler2D;
//precision highp int;

uniform sampler2D u_MainTex;
uniform sampler2D u_NormalMap;
uniform sampler2D u_HLTex;
uniform sampler2D u_EnvTex;
uniform vec3 u_CameraPos;
uniform float u_MyTime;
uniform vec3 u_LightColor;
uniform vec3 u_LightDir;
uniform float u_LightIntensity;
uniform vec3 u_AmbientColorSky;
uniform vec3 u_AmbientColorGround;
uniform float u_AmbientColorIntensity;
uniform vec3 u_BackLightColor;
uniform float u_BackLightIntensity;
uniform vec3 u_SkinScatteringColor;
uniform vec3 u_HairScatteringColor;
uniform vec3 u_JadeScatteringColor;
uniform vec3 u_SilkStockingsColor;
uniform float u_SilkStockThickness;
uniform vec3 u_BreathingLightColor;
uniform float u_BreathingLightIntensity;
uniform float u_BreathingLightFrequency;
uniform float u_BreathingLightInterruption;
uniform float u_Ordinary1Anisotropy;
uniform float u_Ordinary2Anisotropy;
uniform float u_SkinAnisotropy;
uniform float u_HairAnisotropy;
uniform float u_JadeAnisotropy;
uniform float u_SilkStockingAnisotropy;
uniform float u_BreathingLightAnisotropy;

varying vec2 v_Texcoord;
varying vec4 v_TtoW0;
varying vec4 v_TtoW1;
varying vec4 v_TtoW2;

void main()
{
	vec4 albedo = texture2D(u_MainTex,v_Texcoord);  //op: 134+20 = 154
	vec3 tangentNorm = 2.0*texture2D(u_NormalMap,v_Texcoord).rgb - 1.0; //UnpackNormal   op:9+20+1 = 30
	vec4 hlTex = texture2D(u_HLTex,v_Texcoord);  //op:154+20=174
	
	//材质分区
	float highLightR = hlTex.r*8.5; //乘以8.5的目的是让红色通道值为180时就达到6，这样可以将红色通道分成7段，1~6段每段30，第7段75，方便相关人员记忆不同材质分区范围
	float stepTop = 0.0;
	float breathingLightStep = step(7.0,highLightR) - stepTop;
	stepTop += breathingLightStep;
	float transparentStep = step(6.0,highLightR) - stepTop;
	stepTop += transparentStep;
	float silkStockingStep = step(5.0,highLightR) - stepTop;
	stepTop += silkStockingStep;
	float jadeStep = step(4.0,highLightR) - stepTop;
	stepTop += jadeStep;
	float hairStep = step(3.0,highLightR) - stepTop;
	stepTop += hairStep;
	float skinStep = step(2.0,highLightR) - stepTop;
	stepTop += skinStep;
	float ordinary2Step = step(1.0,highLightR) - stepTop;
	stepTop += ordinary2Step;
	float ordinary1Step = 1.0  - stepTop;
	
	//不同材质区域的散射强度  备忘：可优化为一次点乘
	float scatteringMask = (highLightR - 5.0)*silkStockingStep + (highLightR - 4.0)*jadeStep + (highLightR - 3.0)*hairStep + (highLightR - 2.0)*skinStep;
	
	//普通区域1/2中，highLightR用来调整各向异性拉丝方向
	float brushDirReviser = dot(vec2(highLightR - 1.0,highLightR),vec2(ordinary2Step,ordinary1Step));//(highLightR - 1.0)*ordinary2Step + highLightR*ordinary1Step;
	
	//不同材质分区的各向异性强度  备忘：可优化为一次点乘
	float anisotropy = u_Ordinary1Anisotropy*ordinary1Step + u_Ordinary2Anisotropy*ordinary2Step + u_SkinAnisotropy*skinStep + u_HairAnisotropy*hairStep + u_JadeAnisotropy*jadeStep + u_SilkStockingAnisotropy*silkStockingStep + u_BreathingLightAnisotropy*breathingLightStep;
	
	//呼吸光发光强度
	float breathingLightPhase = (highLightR - 6.0)*0.8*3.14159265358979323846;
	vec3 breathingLight = u_BreathingLightColor*u_BreathingLightIntensity*max(sin(u_MyTime*u_BreathingLightFrequency  + breathingLightPhase) - u_BreathingLightInterruption,0.0)*breathingLightStep*step(6.16666666667,highLightR);//*max(sin(_Time.z*5*u_BreathingLightFrequency + breathingLightPhase) - u_BreathingLightInterruption,0)
	
	//光照效果常用参数计算
	vec3 worldPos = vec3(v_TtoW0.w,v_TtoW1.w,v_TtoW2.w);
	vec3 viewDir = normalize(u_CameraPos - worldPos);  //op:30 + 3 + 1 = 34
	vec3 halfDir = normalize(viewDir + u_LightDir);      //OP:34+3+1 = 38
	
	vec3 worldNorm = normalize(vec3(dot(v_TtoW0.xyz, tangentNorm),dot(v_TtoW1.xyz, tangentNorm),dot(v_TtoW2.xyz, tangentNorm)));  //op:38+3+1+1+1 = 44
	//float worldNormx = v_TtoW0.x*tangentNorm.x+v_TtoW0.y*tangentNorm.y+v_TtoW0.z*tangentNorm.z;
	//float worldNormy = v_TtoW1.x*tangentNorm.x+v_TtoW1.y*tangentNorm.y+v_TtoW1.z*tangentNorm.z;
	//float worldNormz = v_TtoW2.x*tangentNorm.x+v_TtoW2.y*tangentNorm.y+v_TtoW2.z*tangentNorm.z;
	////各向异性法线计算(各向异性区域的法线为bentNormal，以halfDir在拉丝方向垂直面上的投影为近似)
	vec3 vertNorm = normalize(vec3(v_TtoW0.z,v_TtoW1.z,v_TtoW2.z));
	vec3 vertTangent = normalize(vec3(v_TtoW0.x,v_TtoW1.x,v_TtoW2.x));
	vec3 vertBinNorm = normalize(vec3(v_TtoW0.y,v_TtoW1.y,v_TtoW2.y));
	float ordinaryStep = max(ordinary1Step,ordinary2Step);
	float ordinaryBrushDirHalfStep = step(0.5,brushDirReviser);
	float doubleBrushDirReviser = brushDirReviser*2.0;
	vec3 ordinaryBrushDir = mix(mix(vertTangent,vertBinNorm,doubleBrushDirReviser),mix(vertBinNorm,-vertTangent,doubleBrushDirReviser - 1.0),ordinaryBrushDirHalfStep); //(lerp(vertTangent,vertBinNorm,doubleBrushDirReviser)*(1.0 - ordinaryBrushDirHalfStep) + lerp(vertBinNorm,-vertTangent,doubleBrushDirReviser - 1.0)*ordinaryBrushDirHalfStep)
	vec3 vertBrushDir = mix(vertBinNorm,ordinaryBrushDir,ordinaryStep);//ordinaryBrushDir*ordinaryStep + vertBinNorm*(1.0 - ordinaryStep);
	vec3 brushDir = normalize(dot(worldNorm,vertBrushDir)/dot(worldNorm,vertNorm)*vertNorm + vertBrushDir);
	vec3 bentNorm = normalize(halfDir - dot(halfDir,brushDir)*brushDir);
	vec3 bentNormV = normalize(viewDir - dot(viewDir,brushDir)*brushDir);
	//vec3 bentLight = normalize(lightDir - dot(lightDir,brushDir)*brushDir);  //光照在拉丝法平面上的投影,用于计算发丝反射光的能量守恒
	//vec3 bentView = normalize(viewDir - dot(viewDir,brushDir)*brushDir);
	float anisorSpecReduction = mix(1.0,dot(bentNorm,u_LightDir)*0.5,anisotropy);//直接使用lightDir与bentLight的差别极小//*0.5是因为拉丝法平面上半圆周上辐照积分为2
	float anisorMcSpecReduction = mix(1.0,dot(bentNormV,viewDir)*0.5,anisotropy);
	
	float nl = max(0.0,dot(worldNorm,u_LightDir));  // op:44+1+1 = 46
	float nh = max(0.0,dot(normalize(mix(worldNorm,bentNorm,anisotropy)), halfDir));  // op:46+1+1 = 48
	vec3 anisoViewNormal = normalize(mix(worldNorm,bentNormV,anisotropy));
	float nv = max(0.0,dot(anisoViewNormal,viewDir));
	
	//GGX粗糙度计算
	float preGrossy = hlTex.b;
	float roughness = 1.0 - preGrossy;  //op:49
	roughness *= roughness;  //op:50
	roughness *= roughness;  //op:51
	
	//线性近似的几何遮蔽项（仅考虑粗糙度对镜面反射遮蔽的影响）
	//float g = -0.68169*roughness + 1.0;			//1-1/pi=0.681690113816
	//UE4 GGX smith
	float a = 0.5 + (1.0 - preGrossy)*0.5;
	a = a*a*0.5;
	float gv = nv/(nv*(1.0 - a) + a);
	float gl = nl/(nl*(1.0 - a) + a);
	float g = gv*gl;
	
	//GGX微表面分布（镜面光）
	float D = nh*nh*(roughness - 1.0)+1.0;  //op:51+1+1=53
	float spec = roughness*0.25/(D*D*max(0.00390625,nv));    //op:53+1+1+1+1=57   其中在较早期的显卡上除法相当于4~8条指令
	
	//金属度计算及区分金属和非金属
	float metallicity = hlTex.g;
	float metallicityStep = step(0.5,metallicity);   //op:57+2 = 59
	
	//菲涅尔镜面反射率随光滑度降低衰减
	float k = preGrossy*0.65 + 0.35;  //preGrossy（非常光滑），F90应当趋近于1；当preGloss为0时（绝对粗糙，个方向的微平面均匀分布），F0 + (1 - F0)/pi < F90 < 1
	
	//shlick菲涅尔近似
	vec3 nonmetalF0 = vec3(metallicity,metallicity,metallicity);
	//金属的F0即材质颜色   乘以0.4的目的是——当材质为非金属时，反射率最大值（127）被限制在0.2以内（钻石的反射率）
	//以免金属和非金属区域相互接触的分界线由于采样颜色插值（金属度从大于等于128过渡到小于127）产生过于强烈的镜面反射“亮线”
	vec3 F0 = nonmetalF0*0.4*(1.0 - metallicityStep) + nonmetalF0*albedo.rgb*metallicityStep;
	float shlickPownl = pow(1.0 - nl,5.0)*k;
	vec3 specProportionDiff = F0 + (1.0 - F0)*shlickPownl; //菲涅尔镜面反射效果随光滑度降低衰减,当粗糙度较低时菲涅尔效果明显，但此时大部分微表面的法线集中于宏表面法线附近，故使用nl计算菲涅尔反射率作为近似,用以计算漫反射
	vec3 nonmetalSpecProportion = nonmetalF0 + (1.0 - nonmetalF0)*shlickPownl;
	float shlickPownv = pow(1.0 - nv,5.0)*k;
	vec3 mcSpecProportion = F0 + (1.0 - F0)*shlickPownv;
	vec3 mcNonmetalSpecProportion = nonmetalF0 + (1.0 - nonmetalF0)*shlickPownv;
	
	//环境光向量
	vec3 viewReflectDir = 2.0*nv*anisoViewNormal - viewDir;//op:59+1+1+1 = 62
	//由于matcap方向向量恒定为(0,0,1)，故可进行简化的归一化运算
	float matcapY = ((viewReflectDir + vec3(0.0,0.0,1.0))/(2.0*viewReflectDir.z + 2.05)).y;//worldNorm.y;   // op:62+3+1=66
	
	//环境光漫反射项
	vec3 mcDiffColor = mix(u_AmbientColorGround,u_AmbientColorSky,matcapY*0.5+0.5)*u_AmbientColorIntensity;   //op:66+2+1+1 = 70
	vec3 mcDiff = mcDiffColor*albedo.rgb*mix(1.0 - mcSpecProportion*g,1.0 - mcNonmetalSpecProportion,metallicityStep);   //op:
	
	//环境光镜面反射项计算
	/*float mcLerpController = preGrossy;
	vec3 mcSpec = mix(u_AmbientColorGround,u_AmbientColorSky,smoothstep(preGrossy - 1.01,1.0 - preGrossy,matcapY))*u_AmbientColorIntensity*mcSpecProportion*g*anisorMcSpecReduction;*/
	//op:	
	
	//环境光反射（伪圆柱贴图）
	/*fixed3 viewReflectDir = 2*nv*anisoViewNormal - viewDir;
	fixed3 viewReflectProjectVertical = dot(viewReflectDir,fixed3(0.0,1.0,0.0));
	fixed3 viewReflectProjectHorizontal = normalize(viewReflectDir - viewReflectProjectVertical*fixed3(0.0,1.0,0.0));
	fixed isFront = step(0,viewReflectDir.z);
	fixed2 envMapUV = float2(0.0,0.0);
	half projectX2Longitude = acos(viewReflectProjectHorizontal.x)/UNITY_PI;
	envMapUV.x = projectX2Longitude*(isFront - 0.5) - isFront + 1;
	envMapUV.y = viewReflectProjectVertical*0.495 + 0.5;*/
				
	//伪圆柱环境反射测试
	//viewReflectDir = 2.0*nv*anisoViewNormal - viewDir;
	#ifdef WEBGL2
	float viewReflectProjectVertical = dot(viewReflectDir,vec3(0.0,1.0,0.0));
	vec3 viewReflectProjectHorizontal = normalize(viewReflectDir - viewReflectProjectVertical*vec3(0.0,1.0,0.0));
	float isFront = step(0.0,-viewReflectDir.z);
	vec2 envMapUV = vec2(0.0,0.0);
	float projectX2Longitude = acos(viewReflectProjectHorizontal.x)/3.1415926;
	envMapUV.x = projectX2Longitude*(isFront - 0.5) - isFront + 1.0;
	envMapUV.y = -viewReflectProjectVertical*0.495 + 0.5;
	
	float mipmapLevel = pow(1.0 - preGrossy,0.8)*7.0;
	vec3 mcSpec = texture2DLodEXT(u_EnvTex,envMapUV,mipmapLevel).rgb*u_AmbientColorIntensity*mcSpecProportion*anisorMcSpecReduction;
	#else
	vec3 mcSpec = mix(u_AmbientColorGround,u_AmbientColorSky,smoothstep(preGrossy - 1.0,1.0 - preGrossy,matcapY))*u_AmbientColorIntensity*mcSpecProportion*anisorMcSpecReduction;
	#endif
	
	//通常认为金属没有漫反射，但这里影响不明显，而且为了便于表现介于金属和非金属之间的材质，故允许金属度大于127时的材质表面在遵从能量守恒原则的前提下有漫反射
	vec3 diffuse = albedo.rgb *u_LightColor.rgb * nl*mix(1.0 - specProportionDiff*g,1.0 - nonmetalSpecProportion,metallicityStep);  //op:
	
	//镜面反射项
	vec3 specular = clamp(u_LightColor.rgb*specProportionDiff*g*spec*nl*nh*anisorSpecReduction,0.0,1.0);//op:
	
	vec3 finalColor = mcDiff + mcSpec + diffuse + specular;
	
	//gl_FragColor = vec4(pow(mcDiffColor.r,0.45),pow(mcDiffColor.g,0.45),pow(mcDiffColor.b,0.45),1.0);
	
	//特殊材质散射相关
	vec3 incidentLight = u_LightColor + mcDiffColor; //用入射光（直射+间接照射）全局影响皮肤/头发/玉石散射光的强度及颜色
	
	//fake skin  皮肤散射模拟
	vec3 sc = mix(u_SkinScatteringColor,finalColor,nl);
	
	//玉石散射模拟
	vec3 jc = mix(u_JadeScatteringColor,finalColor,nl);
	
	//头发散射模拟
	vec3 hc = mix(u_HairScatteringColor,finalColor,nl);
	
	//无光照材质
	float unliteStep = 1.0 - step(0.0039216,metallicity);
	
	//逆光
	vec3 backLightDir = vec3(-u_LightDir.x,u_LightDir.y,-u_LightDir.z);
	float NdotBackLight = max(dot(worldNorm,backLightDir),0.0);
	vec4 backLightColor = vec4(u_BackLightColor,1.0);
	vec4 backLightDiffuse = min(backLightColor*NdotBackLight*u_BackLightIntensity*(albedo+0.25),1.0 - transparentStep);
	
	vec4 ffColor = vec4(finalColor*(1.0 - scatteringMask) + (sc*skinStep + jc*jadeStep + hc*hairStep + sc*silkStockingStep)*incidentLight*scatteringMask + breathingLight,1.0 - transparentStep);
	
	//丝袜纤维遮蔽模拟
	ffColor = mix(vec4(u_SilkStockingsColor,1.0),ffColor,clamp(dot(worldNorm,viewDir) - u_SilkStockThickness,0.0,1.0))*silkStockingStep + ffColor*(1.0 - silkStockingStep);
	
	vec4 fffColor = (ffColor + backLightDiffuse)*(1.0 - unliteStep) + albedo*unliteStep;
	
	gl_FragColor = vec4(pow(fffColor.r,0.45),pow(fffColor.g,0.45),pow(fffColor.b,0.45),pow(fffColor.a,0.45));//pow((ffColor + backLightDiffuse)*(1.0 - unliteStep) + albedo*unliteStep,0.45);  //op:
	//return pow((ffColor + backLightDiffuse)*(1 - unliteStep) + albedo*unliteStep,0.45);  //gamma space
}