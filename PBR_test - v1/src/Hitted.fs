#ifdef FSHIGHPRECISION
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D u_MainTex;
// uniform sampler2D u_HLTex;
// uniform float u_time;

uniform vec3 u_CameraPos;
// uniform float u_MyTime;

varying vec2 v_Texcoord;
varying vec4 worldPos;
varying vec3 worldNormal;

uniform vec3 _hittedCoverColor;
uniform vec3 _hittedMulColor;
uniform float _hittedCoverOrMul;//0:cover 1:mul

uniform float _hittedCoverTime;
uniform float _hittedMulTime;
uniform float _hittedZ;
uniform float _hittedZ_k;
uniform float _hittedUseNormal;
uniform float _hittedRim_k;
uniform float _hittedRim_pow;
uniform float _hittedRim_add;

uniform float _hittedIsColor1Grad;
uniform float _hittedIsColor2Grad;

uniform float _hittedDeltaTime;

void main()
{
	vec4 albedo = texture2D(u_MainTex,v_Texcoord); 
	vec3 view = u_CameraPos - worldPos.xyz;
	float depth = sqrt(dot(view,view));
	view = normalize(view);
	float NdotV = clamp(dot(normalize(worldNormal),view),0.0,1.0);
	float deltaTime = _hittedDeltaTime;
    float totalTime = _hittedCoverTime+_hittedMulTime;
	depth = clamp((depth + _hittedZ)*_hittedZ_k,0.0,1.0);
	float lightType = (_hittedRim_k*pow((1.0-NdotV),_hittedRim_pow)+_hittedRim_add)*_hittedUseNormal + (_hittedRim_k*pow(depth,_hittedRim_pow)+_hittedRim_add)*(1.0-_hittedUseNormal);
	float param2 = _hittedCoverOrMul*lightType;
    vec3 toColor = mix(albedo.rgb,_hittedMulColor,param2);
    float time1 = clamp(deltaTime*_hittedIsColor1Grad/_hittedCoverTime,0.0,1.0);
    time1*=time1; 

	float time2 = clamp((_hittedMulTime-(deltaTime-_hittedCoverTime)*_hittedIsColor2Grad)/_hittedMulTime,0.0,1.0);
    time2*=time2; 

	vec3 col = mix(_hittedCoverColor*lightType,toColor,time1)*step(deltaTime,_hittedCoverTime)*step(0.0,deltaTime) + mix(albedo.rgb,_hittedMulColor,step(deltaTime,totalTime)*param2*time2)*step(_hittedCoverTime,deltaTime);//_hittedCoverColor*step(_hittedCoverOrMul,0.01) + mix(albedo.rgb,_hittedMulColor,clamp(_hittedCoverOrMul,0.0,1.0))*step(0.01,_hittedCoverOrMul);
	
	gl_FragColor = vec4(col,1);
}