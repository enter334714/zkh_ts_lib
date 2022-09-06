import GameConfig from "./GameConfig";
//import PBRShaderVs from "./RoleCheapPBR_bumped_fresnel_UI.vs";
//import PBRShaderFs from "./RoleCheapPBR_bumped_fresnel_UI.fs";

class IndiceData {

	a: number = 0;
	b: number = 0;
	c: number = 0;
	score: number = 0;
}
export class CustomMaterial extends Laya.Material {
	public static MAINTEX = Laya.Shader3D.propertyNameToID("u_MainTex");  //主纹理-逐材质(texture2D)
	public static NORMTEX = Laya.Shader3D.propertyNameToID("u_NormalMap"); //法线贴图-逐材质(texture2D)
	public static SCATTERINGMASK = Laya.Shader3D.propertyNameToID("u_ScatteringMask"); //特殊材质遮罩(r)
	public static HILIGHTTEX = Laya.Shader3D.propertyNameToID("u_HLTex");  //高光贴图-逐材质(texture2D)
	public static ENVTEX = Laya.Shader3D.propertyNameToID("u_EnvTex");  //环境反射贴图-按场景配置设置(texture2D)
	public static SKINSCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_SkinScatteringColor");  //皮肤散射颜色-逐材质(vec3 取2.2次方再乘以4)
	public static HAIRSCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_HairScatteringColor");  //头发散射颜色-逐材质(vec3 取2.2次方再乘以4)
	public static JADESCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_JadeScatteringColor");  //玉石散射颜色-逐材质(vec3 取2.2次方再乘以4)
	public static SILKSTOCKINGSCOLOR = Laya.Shader3D.propertyNameToID("u_SilkStockingsColor");  //丝袜颜色-逐材质(vec3 取2.2次方再乘以4)
	public static SILKSTOCKTHICKNESS = Laya.Shader3D.propertyNameToID("u_SilkStockThickness");  //丝袜厚度-逐材质(float)
	public static BREATHINGLIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_BreathingLightColor");  //呼吸光颜色-逐材质(vec3)
	public static BREATHINGLIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_BreathingLightIntensity");  //呼吸光强度-逐材质(float)
	public static BREATHINGLIGHTFREQUENCY = Laya.Shader3D.propertyNameToID("u_BreathingLightFrequency");  //呼吸光频率-逐材质(float 乘以10)
	public static BREATHINGLIGHTINTERRUPTION = Laya.Shader3D.propertyNameToID("u_BreathingLightInterruption");  //呼吸光中断-逐材质(float)
	public static ORDINARY1ANISOTROPY = Laya.Shader3D.propertyNameToID("u_Ordinary1Anisotropy");  //普通材质1各向异性-逐材质(float)
	public static ORDINARY2ANISOTROPY = Laya.Shader3D.propertyNameToID("u_Ordinary2Anisotropy");  //普通材质2各向异性-逐材质(float)
	public static SKINANISOTROPY = Laya.Shader3D.propertyNameToID("u_SkinAnisotropy");  //皮肤材质各向异性-逐材质(float)
	public static HAIRANISOTROPY = Laya.Shader3D.propertyNameToID("u_HairAnisotropy");  //头发材质各向异性-逐材质(float)
	public static JADEANISOTROPY = Laya.Shader3D.propertyNameToID("u_JadeAnisotropy");  //玉石材质各向异性-逐材质(float)
	public static SILKSTOCKINGANISOTROPY = Laya.Shader3D.propertyNameToID("u_SilkStockingAnisotropy");  //丝袜材质各向异性-逐材质(float)
	public static TRANSPARENTANISOTROPY = Laya.Shader3D.propertyNameToID("u_TransparentAnisotropy");  //半透区域各向异性-逐材质(float)
	public static BREATHINGLIGHTANISOTROPY = Laya.Shader3D.propertyNameToID("u_BreathingLightAnisotropy");  //呼吸光材质各向异性-逐材质(float)
	public static TRANSPARENTTHICKNESS = Laya.Shader3D.propertyNameToID("u_TransparentThickness");  //半透厚度-逐材质(float)
	public static BACKLIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_BackLightColor");   //逆光颜色-按场景配置设置(vec3)
	public static BACKLIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_BackLightIntensity");  //逆光强度-按场景配置设置(float)
	public static AMBIENTCOLORSKY = Laya.Shader3D.propertyNameToID("u_AmbientColorSky");  //环境天光颜色-按场景配置设置(vec3 取2.2次方)
	public static AMBIENTCOLORGROUND = Laya.Shader3D.propertyNameToID("u_AmbientColorGround");  //环境地光颜色-按场景配置设置(vec3 取2.2次方)
	public static AMBIENTCOLORINTENSITY = Laya.Shader3D.propertyNameToID("u_AmbientColorIntensity");  //环境光强度-按场景配置设置(float)
	public static LIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_LightColor");   //主光源颜色-按场景配置设置(vec3 取2.2次方)
	public static LIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_LightIntensity");  //主光强度-按场景配置设置(float)
	public static LIGHTDIR = Laya.Shader3D.propertyNameToID("u_LightDir");  //主光方向-按场景配置设置(vec3)
	public static TIME = Laya.Shader3D.propertyNameToID("u_MyTime");  //时间(float 取实例被加载后的累计毫秒数*0.001,当其值大于62.832时归零重新开始累计，每帧更新)
	public static WEBGL2 = Laya.Shader3D.getDefineByName("WEBGL2");
	public static GROUNDBASEHEIGHT = Laya.Shader3D.propertyNameToID("u_GroundBaseHeight"); //阴影投射面的高度-按场景配置设置（float 默认：0.0）
	public static SHADOWCHANGECOEFFICIENT = Laya.Shader3D.propertyNameToID("u_ShadowChangeCoefficienct");//阴影渐变系数（float 默认：0.0）
	public static SHADOWCOLOR = Laya.Shader3D.propertyNameToID("u_ShadowColor");//阴影颜色-按场景配置设置（vec3 默认：(0.36862745098,0.4,0.560784313725))
	public static SHADOWSTRENGTH1 = Laya.Shader3D.propertyNameToID("u_ShadowStrength1");//阴影强度1-按场景配置设置（float 默认：0.5)
	public static SHADOWSTRENGTH2 = Laya.Shader3D.propertyNameToID("u_ShadowStrength2");//阴影强度2-按场景配置设置（float 默认：0.25）
	public static SHADOWSTRENGTH3 = Laya.Shader3D.propertyNameToID("u_ShadowStrength3");//阴影强度3-按场景配置设置（float 默认：0.125）
	public static SHADOWSCALE1 = Laya.Shader3D.propertyNameToID("u_ShadowScale1");//阴影缩放1-按场景配置设置（float 默认：0.005）
	public static SHADOWSCALE2 = Laya.Shader3D.propertyNameToID("u_ShadowScale2");//阴影缩放2-按场景配置设置（float 默认：0.0）
	public static SHADOWSCALE3 = Laya.Shader3D.propertyNameToID("u_ShadowScale3");//阴影缩放3-按场景配置设置（float 默认： -0.005）
	public static HITTEDCOVERCOLOR = Laya.Shader3D.propertyNameToID("_hittedCoverColor");//受击：覆盖颜色
	public static HITTEDMULCOLOR = Laya.Shader3D.propertyNameToID("_hittedMulColor");//受击：覆盖颜色
	public static HITTEDCOVERORMUL = Laya.Shader3D.propertyNameToID("_hittedCoverOrMul");//受击：覆盖颜色
	public static HITTEDCOVERTIME = Laya.Shader3D.propertyNameToID("_hittedCoverTime");//全覆盖色持续时间
	public static HITTEDMULTIME = Laya.Shader3D.propertyNameToID("_hittedMulTime");//叠加色持续时间
	public static HITTED_Z = Laya.Shader3D.propertyNameToID("_hittedZ");//发光相机深度阈值
	public static HITTED_Z_K = Laya.Shader3D.propertyNameToID("_hittedZ_k");//深度光乘系数k
	public static HITTED_USENORMAL = Laya.Shader3D.propertyNameToID("_hittedUseNormal");//不勾选:使用深度光 勾选:使用法线边缘光
	public static HITTED_RIM_K = Laya.Shader3D.propertyNameToID("_hittedRim_k");//边缘光乘系数k
	public static HITTED_RIM_POW = Laya.Shader3D.propertyNameToID("_hittedRim_pow");//边缘光系数pow
	public static HITTED_RIM_ADD = Laya.Shader3D.propertyNameToID("_hittedRim_add");//边缘光加减系数add
	public static HITTED_ISCOLOR1GRAD = Laya.Shader3D.propertyNameToID("_hittedIsColor1Grad");//第一段颜色是否使用渐变
	public static HITTED_ISCOLOR2GRAD = Laya.Shader3D.propertyNameToID("_hittedIsColor2Grad");//第二段颜色是否使用渐变
	public static HITTEDDELTATIME = Laya.Shader3D.propertyNameToID("_hittedDeltaTime");

	constructor() {
		super();
		//设置本材质使用的shader名字
		this.setShaderName("CustomShader");
	}

	get hittedDeltaTime() {
		return this._shaderValues.getNumber(CustomMaterial.HITTEDDELTATIME);
	}
	set hittedDeltaTime(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTEDDELTATIME, value);
	}

	get hittedCoverColor() {
		return this._shaderValues.getVector(CustomMaterial.HITTEDCOVERCOLOR);
	}
	set hittedCoverColor(value) {
		this._shaderValues.setVector(CustomMaterial.HITTEDCOVERCOLOR, value);
	}

	get hittedMulColor() {
		return this._shaderValues.getVector(CustomMaterial.HITTEDMULCOLOR);
	}
	set hittedMulColor(value) {
		this._shaderValues.setVector(CustomMaterial.HITTEDMULCOLOR, value);
	}

	get hittedCoverOrMul() {
		return this._shaderValues.getNumber(CustomMaterial.HITTEDCOVERORMUL);
	}
	set hittedCoverOrMul(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTEDCOVERORMUL, value);
	}

	get hittedCoverTime() {
		return this._shaderValues.getNumber(CustomMaterial.HITTEDCOVERTIME);
	}
	set hittedCoverTime(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTEDCOVERTIME, value);
	}

	get hittedMulTime() {
		return this._shaderValues.getNumber(CustomMaterial.HITTEDMULTIME);
	}
	set hittedMulTime(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTEDMULTIME, value);
	}

	get hittedZ() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_Z);
	}
	set hittedZ(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_Z, value);
	}

	get hittedZ_k() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_Z_K);
	}
	set hittedZ_k(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_Z_K, value);
	}

	get hittedUseNormal() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_USENORMAL);
	}
	set hittedUseNormal(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_USENORMAL, value);
	}

	get hittedRim_k() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_RIM_K);
	}
	set hittedRim_k(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_RIM_K, value);
	}

	get hittedRim_pow() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_RIM_POW);
	}
	set hittedRim_pow(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_RIM_POW, value);
	}

	get hittedRim_add() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_RIM_ADD);
	}
	set hittedRim_add(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_RIM_ADD, value);
	}

	get hittedIsColor1Grad() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_ISCOLOR1GRAD);
	}
	set hittedIsColor1Grad(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_ISCOLOR1GRAD, value);
	}

	get hittedIsColor2Grad() {
		return this._shaderValues.getNumber(CustomMaterial.HITTED_ISCOLOR2GRAD);
	}
	set hittedIsColor2Grad(value) {
		this._shaderValues.setNumber(CustomMaterial.HITTED_ISCOLOR2GRAD, value);
	}

	get mainTex() {
		return this._shaderValues.getTexture(CustomMaterial.MAINTEX);
	}
	set mainTex(value) {
		this._shaderValues.setTexture(CustomMaterial.MAINTEX, value);
	}

	get normTex() {
		return this._shaderValues.getTexture(CustomMaterial.NORMTEX);
	}
	set normTex(value) {
		this._shaderValues.setTexture(CustomMaterial.NORMTEX, value);
	}

	get scatteringMask() {
		return this._shaderValues.getNumber(CustomMaterial.SCATTERINGMASK);
	}
	set scatteringMask(value) {
		this._shaderValues.setNumber(CustomMaterial.SCATTERINGMASK, value);
	}

	get hiLightTex() {
		return this._shaderValues.getTexture(CustomMaterial.HILIGHTTEX);
	}
	set hiLightTex(value) {
		this._shaderValues.setTexture(CustomMaterial.HILIGHTTEX, value);
	}

	get envTex() {
		return this._shaderValues.getTexture(CustomMaterial.ENVTEX);
	}
	set envTex(value) {
		this._shaderValues.setTexture(CustomMaterial.ENVTEX, value);
	}

	get skinScatteringColor() {
		return this._shaderValues.getVector(CustomMaterial.SKINSCATTERINGCOLOR);
	}
	set skinScatteringColor(value) {
		this._shaderValues.setVector(CustomMaterial.SKINSCATTERINGCOLOR, value);
	}

	get hairScatteringColor() {
		return this._shaderValues.getVector(CustomMaterial.HAIRSCATTERINGCOLOR);
	}
	set hairScatteringColor(value) {
		this._shaderValues.setVector(CustomMaterial.HAIRSCATTERINGCOLOR, value);
	}

	get jadeScatteringColor() {
		return this._shaderValues.getVector(CustomMaterial.JADESCATTERINGCOLOR);
	}
	set jadeScatteringColor(value) {
		this._shaderValues.setVector(CustomMaterial.JADESCATTERINGCOLOR, value);
	}

	get silkStockingsColor() {
		return this._shaderValues.getVector(CustomMaterial.SILKSTOCKINGSCOLOR);
	}
	set silkStockingsColor(value) {
		this._shaderValues.setVector(CustomMaterial.SILKSTOCKINGSCOLOR, value);
	}

	get silkStockThickness() {
		return this._shaderValues.getNumber(CustomMaterial.SILKSTOCKTHICKNESS);
	}
	set silkStockThickness(value) {
		this._shaderValues.setNumber(CustomMaterial.SILKSTOCKTHICKNESS, value);
	}

	get backLightColor() {
		return this._shaderValues.getVector(CustomMaterial.BACKLIGHTCOLOR);
	}
	set backLightColor(value) {
		this._shaderValues.setVector(CustomMaterial.BACKLIGHTCOLOR, value);
	}

	get backLightIntensity() {
		return this._shaderValues.getNumber(CustomMaterial.BACKLIGHTINTENSITY);
	}
	set backLightIntensity(value) {
		this._shaderValues.setNumber(CustomMaterial.BACKLIGHTINTENSITY, value);
	}

	get ambientColorSky() {
		return this._shaderValues.getVector(CustomMaterial.AMBIENTCOLORSKY);
	}
	set ambientColorSky(value) {
		this._shaderValues.setVector(CustomMaterial.AMBIENTCOLORSKY, value);
	}

	get ambientColorGround() {
		return this._shaderValues.getVector(CustomMaterial.AMBIENTCOLORGROUND);
	}
	set ambientColorGround(value) {
		this._shaderValues.setVector(CustomMaterial.AMBIENTCOLORGROUND, value);
	}

	get ambientColorIntensity() {
		return this._shaderValues.getNumber(CustomMaterial.AMBIENTCOLORINTENSITY);
	}
	set ambientColorIntensity(value) {
		this._shaderValues.setNumber(CustomMaterial.AMBIENTCOLORINTENSITY, value);
	}

	get breathingLightColor() {
		return this._shaderValues.getVector(CustomMaterial.BREATHINGLIGHTCOLOR);
	}
	set breathingLightColor(value) {
		this._shaderValues.setVector(CustomMaterial.BREATHINGLIGHTCOLOR, value);
	}

	get breathingLightIntensity() {
		return this._shaderValues.getNumber(CustomMaterial.BREATHINGLIGHTINTENSITY);
	}
	set breathingLightIntensity(value) {
		this._shaderValues.setNumber(CustomMaterial.BREATHINGLIGHTINTENSITY, value);
	}

	get breathingLightFrequency() {
		return this._shaderValues.getNumber(CustomMaterial.BREATHINGLIGHTFREQUENCY);
	}
	set breathingLightFrequency(value) {
		this._shaderValues.setNumber(CustomMaterial.BREATHINGLIGHTFREQUENCY, value);
	}

	get breathingLightInterruption() {
		return this._shaderValues.getNumber(CustomMaterial.BREATHINGLIGHTINTERRUPTION);
	}
	set breathingLightInterruption(value) {
		this._shaderValues.setNumber(CustomMaterial.BREATHINGLIGHTINTERRUPTION, value);
	}

	get lightColor() {
		return this._shaderValues.getVector(CustomMaterial.LIGHTCOLOR);
	}
	set lightColor(value) {
		this._shaderValues.setVector(CustomMaterial.LIGHTCOLOR, value);
	}

	get lightIntensity() {
		return this._shaderValues.getNumber(CustomMaterial.LIGHTINTENSITY);
	}
	set lightIntensity(value) {
		this._shaderValues.setNumber(CustomMaterial.LIGHTINTENSITY, value);
	}

	get lightDir() {
		return this._shaderValues.getVector(CustomMaterial.LIGHTDIR);
	}
	set lightDir(value) {
		this._shaderValues.setVector(CustomMaterial.LIGHTDIR, value);
	}

	get ordinary1Anisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.ORDINARY1ANISOTROPY);
	}
	set ordinary1Anisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.ORDINARY1ANISOTROPY, value);
	}

	get ordinary2Anisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.ORDINARY2ANISOTROPY);
	}
	set ordinary2Anisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.ORDINARY2ANISOTROPY, value);
	}

	get skinAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.SKINANISOTROPY);
	}
	set skinAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.SKINANISOTROPY, value);
	}

	get hairAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.HAIRANISOTROPY);
	}
	set hairAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.HAIRANISOTROPY, value);
	}

	get jadeAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.JADEANISOTROPY);
	}
	set jadeAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.JADEANISOTROPY, value);
	}

	get silkStockingAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.SILKSTOCKINGANISOTROPY);
	}
	set silkStockingAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.SILKSTOCKINGANISOTROPY, value);
	}

	get transparentAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.TRANSPARENTANISOTROPY);
	}
	set transparentAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.TRANSPARENTANISOTROPY, value);
	}

	get transparentThickness() {
		return this._shaderValues.getNumber(CustomMaterial.TRANSPARENTTHICKNESS);
	}
	set transparentThickness(value) {
		this._shaderValues.setNumber(CustomMaterial.TRANSPARENTTHICKNESS, value);
	}

	get breathingLightAnisotropy() {
		return this._shaderValues.getNumber(CustomMaterial.BREATHINGLIGHTANISOTROPY);
	}
	set breathingLightAnisotropy(value) {
		this._shaderValues.setNumber(CustomMaterial.BREATHINGLIGHTANISOTROPY, value);
	}

	get groundBaseHeight() {
		return this._shaderValues.getNumber(CustomMaterial.GROUNDBASEHEIGHT);
	}
	set groundBaseHeight(value) {
		this._shaderValues.setNumber(CustomMaterial.GROUNDBASEHEIGHT, value);
	}

	get shadowColor() {
		return this._shaderValues.getVector(CustomMaterial.SHADOWCOLOR);
	}
	set shadowColor(value) {
		this._shaderValues.setVector(CustomMaterial.SHADOWCOLOR, value);
	}

	get shadowChangeCoefficienct() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWCHANGECOEFFICIENT);
	}
	set shadowChangeCoefficienct(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWCHANGECOEFFICIENT, value);
	}

	get shadowStrength1() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSTRENGTH1);
	}
	set shadowStrength1(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSTRENGTH1, value);
	}

	get shadowStrength2() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSTRENGTH2);
	}
	set shadowStrength2(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSTRENGTH2, value);
	}

	get shadowStrength3() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSTRENGTH3);
	}
	set shadowStrength3(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSTRENGTH3, value);
	}

	get shadowScale1() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSCALE1);
	}
	set shadowScale1(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSCALE1, value);
	}

	get shadowScale2() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSCALE2);
	}
	set shadowScale2(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSCALE2, value);
	}

	get shadowScale3() {
		return this._shaderValues.getNumber(CustomMaterial.SHADOWSCALE3);
	}
	set shadowScale3(value) {
		this._shaderValues.setNumber(CustomMaterial.SHADOWSCALE3, value);
	}

	get time() {
		return this._shaderValues.getNumber(CustomMaterial.TIME);
	}
	set time(value) {
		this._shaderValues.setNumber(CustomMaterial.TIME, value);
	}

	get isWebGL2() {
		return null;
	}
	set isWebGL2(value) {
		if (value == true) this._shaderValues.addDefine(CustomMaterial.WEBGL2);
	}
}

class Main {
	constructor() {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		Laya.stage.alignV = GameConfig.alignV;
		Laya.stage.alignH = GameConfig.alignH;
		Laya.stage.frameRate = "fast";//Laya.Stage.FRAME_SLOW;
		//Laya.stage.framRate = ;
		Laya.Stat.show(0, 0);
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError(true);

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		//Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);

		Laya.loader.load(["../src/PreZ.fs",
			"../src/PreZ.vs",
			"../src/RoleCheapPBR_bumped_fresnel_UI.fs",
			"../src/RoleCheapPBR_bumped_fresnel_UI.vs",
			"../src/CheapShadow1.fs",
			"../src/CheapShadow1.vs",
			"../src/CheapShadow2.fs",
			"../src/CheapShadow2.vs",
			"../src/CheapShadow3.fs",
			"../src/CheapShadow3.vs",
			"../src/Hitted.fs",
			"../src/Hitted.vs",
			//"../res/env1.png",
			"../res/guanyu_nv_d.png",
			"../res/guanyu_nv_h.png",
			"../res/guanyu_nv_n.png",
			"../res/bichiyouyu_nv_d.png",
			"../res/bichiyouyu_nv_h.png",
			"../res/bichiyouyu_nv_n.png",
			"../res/mojie_d.png",
			"../res/mojie_h.png",
			"../res/mojie_n.png",
			"../res/buzhihuowu_nv_d.png",
			"../res/buzhihuowu_nv_h.png",
			"../res/buzhihuowu_nv_n.png"
		], Laya.Handler.create(this, this.onResLoaded));

		//------------------------------------
		//添加3D场景
		this.scene = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;

		//添加Sprite3D
		this.sprite3D = this.scene.addChild(new Laya.Sprite3D()) as Laya.Sprite3D;

		
		//添加照相机
		// this.camera = (this.scene.addChild(new Laya.Camera(0, 0.1, 10000))) as Laya.Camera;
		// this.camera.transform.translate(new Laya.Vector3(0, 10, 12));
		// this.camera.transform.rotate(new Laya.Vector3(-12, 0, 0), true, false);

		this.camera = (this.scene.addChild(new Laya.Camera(0, 0.1, 10000))) as Laya.Camera;
		this.camera.transform.translate(new Laya.Vector3(0, 0, 0));
		this.camera.transform.rotate(new Laya.Vector3(-0, 0, 0), true, false);

		this.camera.orthographic = true;
		this.camera.clearFlag = Laya.CameraClearFlags.SolidColor;
		this.camera.clearColor = new Laya.Vector4(0.5, 0.5, 0.5, 1.0); //(0.396078431372549,	0.364705882352941,	0.568627451, 1.0);
		this.camera.orthographicVerticalSize = 4;
		//console.log("2");
		this.oldTime = Laya.timer.currTimer;
		this.hittedTime = Laya.timer.currTimer;

		//console.log("MAINTEX:"+Main.MAINTEX);
		//console.log("NORMTEX:"+Main.NORMTEX);
		//console.log("HILIGHTTEX:"+Main.HILIGHTTEX);

		Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
	}

	private onKeyUp(e: Event): void {
		switch (e["keyCode"]) {
			case Laya.Keyboard.A:
				console.log((Laya.timer.currTimer - this.oldTime) * 0.001);
				//(this.mainChar.meshRenderer.material as CustomMaterial).nowTime = Laya.timer.currTimer;
				this.hittedTime = Laya.timer.currTimer;

				break;
		}
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		//Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		//GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}

	onResLoaded(): void {
		//初始化shader
		this.initShader();

		//设置材质
		var _material_guanyu_nv = new CustomMaterial();
		_material_guanyu_nv.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
		_material_guanyu_nv.lightIntensity = 1.0;
		_material_guanyu_nv.lightDir = new Laya.Vector4(0.365998150770667, 0.5, 0.784885567, 0.0);
		_material_guanyu_nv.mainTex = Laya.loader.getRes("../res/buzhihuowu_nv_d.png");
		_material_guanyu_nv.hiLightTex = Laya.loader.getRes("../res/buzhihuowu_nv_h.png");
		_material_guanyu_nv.normTex = Laya.loader.getRes("../res/buzhihuowu_nv_n.png");
		_material_guanyu_nv.scatteringMask = 0.0;
		//_material_guanyu_nv.envTex = Laya.loader.getRes("../res/env1.png");
		_material_guanyu_nv.skinScatteringColor = new Laya.Vector4(0.908546102020596, 0.312226359832408, 0.165807566, 1.0);
		_material_guanyu_nv.hairScatteringColor = new Laya.Vector4(0.0838045276591244, 0.0334924709805943, 0.022086979, 1.0);
		_material_guanyu_nv.jadeScatteringColor = new Laya.Vector4(4.0, 0.0, 0.079671354, 1.0);
		_material_guanyu_nv.silkStockingsColor = new Laya.Vector4(0.115964746188431, 0.0475253377392547, 0.064270804, 1.0);
		_material_guanyu_nv.silkStockThickness = 0.5;
		_material_guanyu_nv.breathingLightColor = new Laya.Vector4(0.0627450980392157, 1.0, 1.0, 1.0);
		_material_guanyu_nv.breathingLightIntensity = 2.0;
		_material_guanyu_nv.breathingLightFrequency = 0.15 * 10;
		_material_guanyu_nv.breathingLightInterruption = 0.5;
		_material_guanyu_nv.ordinary1Anisotropy = 0.0;
		_material_guanyu_nv.ordinary2Anisotropy = 0.0;
		_material_guanyu_nv.skinAnisotropy = 0.0;
		_material_guanyu_nv.hairAnisotropy = 1.0;
		_material_guanyu_nv.jadeAnisotropy = 0.0;
		_material_guanyu_nv.silkStockingAnisotropy = 0.75;
		_material_guanyu_nv.transparentAnisotropy = 0.0;
		_material_guanyu_nv.breathingLightAnisotropy = 0.0;
		_material_guanyu_nv.backLightColor = new Laya.Vector4(0.513725490196078, 0.980392156862745, 1.0, 1.0);
		_material_guanyu_nv.backLightIntensity = 3.0;
		_material_guanyu_nv.ambientColorSky = new Laya.Vector4(0.219519718074868, 0.219519718074868, 0.219519718, 1.0);
		_material_guanyu_nv.ambientColorGround = new Laya.Vector4(0.315762743736397, 0.358653905926199, 0.579546612, 1.0);
		_material_guanyu_nv.ambientColorIntensity = 1.0;
		_material_guanyu_nv.time = (Laya.timer.currTimer - this.oldTime) * 0.001;
		_material_guanyu_nv.groundBaseHeight = -0.5;
		_material_guanyu_nv.shadowColor = new Laya.Vector4(0.36862745098, 0.4, 0.560784313725, 1.0);
		_material_guanyu_nv.shadowChangeCoefficienct = 0.0;
		_material_guanyu_nv.shadowStrength1 = 0.5;
		_material_guanyu_nv.shadowStrength2 = 0.25;
		_material_guanyu_nv.shadowStrength3 = 0.125;
		_material_guanyu_nv.shadowScale1 = 0.02;
		_material_guanyu_nv.shadowScale2 = 0.0;
		_material_guanyu_nv.shadowScale3 = -0.02;
		_material_guanyu_nv.transparentThickness = 0.5;
		_material_guanyu_nv.hittedCoverColor = new Laya.Vector4(1.0, 1.0, 1.0, 1.0);
		_material_guanyu_nv.hittedMulColor = new Laya.Vector4(1.0, 0.8, 0.0, 1.0);
		_material_guanyu_nv.hittedCoverOrMul = 0.8;
		_material_guanyu_nv.hittedCoverTime = 0.15;
		_material_guanyu_nv.hittedMulTime = 0.25;
		_material_guanyu_nv.hittedZ = -12.0;
		_material_guanyu_nv.hittedZ_k = 13.0;
		_material_guanyu_nv.hittedUseNormal = 0.0;
		_material_guanyu_nv.hittedRim_k = 1.0;
		_material_guanyu_nv.hittedRim_pow = 1.0;
		_material_guanyu_nv.hittedRim_add = 0.01;
		_material_guanyu_nv.hittedIsColor1Grad = 0.0;
		_material_guanyu_nv.hittedIsColor2Grad = 1.0;
		_material_guanyu_nv.hittedDeltaTime = (Laya.timer.currTimer - this.hittedTime) * 0.001;
		this.tempMaterial = _material_guanyu_nv;

		var _material_bichiyouyu_nv = new CustomMaterial();
		_material_bichiyouyu_nv.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
		_material_bichiyouyu_nv.lightIntensity = 1.0;
		_material_bichiyouyu_nv.lightDir = new Laya.Vector4(0.365998150770667, 0.5, 0.784885567, 0.0);
		_material_bichiyouyu_nv.mainTex = Laya.loader.getRes("../res/bichiyouyu_nv_d.png");
		_material_bichiyouyu_nv.hiLightTex = Laya.loader.getRes("../res/bichiyouyu_nv_h.png");
		_material_bichiyouyu_nv.normTex = Laya.loader.getRes("../res/bichiyouyu_nv_n.png");
		//_material_bichiyouyu_nv.envTex = Laya.loader.getRes("../res/env1.png");
		_material_bichiyouyu_nv.skinScatteringColor = new Laya.Vector4(0.908546102020596, 0.312226359832408, 0.165807566, 1.0);
		_material_bichiyouyu_nv.hairScatteringColor = new Laya.Vector4(0.101485107618938, 0.0286201480182921, 0.022086979, 1.0);
		_material_bichiyouyu_nv.jadeScatteringColor = new Laya.Vector4(1.41496360038652, 0.939581036863521, 0.375503466, 1.0);
		_material_bichiyouyu_nv.silkStockingsColor = new Laya.Vector4(2.21690835106434, 1.22653906481263, 0.556089815, 1.0);
		_material_bichiyouyu_nv.silkStockThickness = 0.0;
		_material_bichiyouyu_nv.breathingLightColor = new Laya.Vector4(0.0627450980392157, 1.0, 1.0, 1.0);
		_material_bichiyouyu_nv.breathingLightIntensity = 2.0;
		_material_bichiyouyu_nv.breathingLightFrequency = 0.15 * 10;
		_material_bichiyouyu_nv.breathingLightInterruption = 0.5;
		_material_bichiyouyu_nv.ordinary1Anisotropy = 0.0;
		_material_bichiyouyu_nv.ordinary2Anisotropy = 1.0;
		_material_bichiyouyu_nv.skinAnisotropy = 0.0;
		_material_bichiyouyu_nv.hairAnisotropy = 1.0;
		_material_bichiyouyu_nv.jadeAnisotropy = 0.0;
		_material_bichiyouyu_nv.silkStockingAnisotropy = 1.0;
		_material_bichiyouyu_nv.breathingLightAnisotropy = 0.0;
		_material_bichiyouyu_nv.backLightColor = new Laya.Vector4(0.513725490196078, 0.980392156862745, 1.0, 1.0);
		_material_bichiyouyu_nv.backLightIntensity = 3.0;
		_material_bichiyouyu_nv.ambientColorSky = new Laya.Vector4(0.219519718074868, 0.219519718074868, 0.219519718, 1.0);
		_material_bichiyouyu_nv.ambientColorGround = new Laya.Vector4(0.315762743736397, 0.358653905926199, 0.579546612, 1.0);
		_material_bichiyouyu_nv.ambientColorIntensity = 1.0;
		_material_bichiyouyu_nv.time = (Laya.timer.currTimer - this.oldTime) * 0.001;
		_material_bichiyouyu_nv.groundBaseHeight = -0.5;
		_material_bichiyouyu_nv.shadowColor = new Laya.Vector4(0.36862745098, 0.4, 0.560784313725, 1.0);
		_material_bichiyouyu_nv.shadowChangeCoefficienct = 0.0;
		_material_bichiyouyu_nv.shadowStrength1 = 0.5;
		_material_bichiyouyu_nv.shadowStrength2 = 0.25;
		_material_bichiyouyu_nv.shadowStrength3 = 0.125;
		_material_bichiyouyu_nv.shadowScale1 = 0.02;
		_material_bichiyouyu_nv.shadowScale2 = 0.0;
		_material_bichiyouyu_nv.shadowScale3 = -0.02;

		var _material_mojiezuo_compound = new CustomMaterial();
		_material_mojiezuo_compound.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
		_material_mojiezuo_compound.lightIntensity = 1.0;
		_material_mojiezuo_compound.lightDir = new Laya.Vector4(0.365998150770667, 0.5, 0.784885567, 0.0);
		_material_mojiezuo_compound.mainTex = Laya.loader.getRes("../res/mojie_d.png");
		_material_mojiezuo_compound.hiLightTex = Laya.loader.getRes("../res/mojie_h.png");
		_material_mojiezuo_compound.normTex = Laya.loader.getRes("../res/mojie_n.png");
		_material_mojiezuo_compound.skinScatteringColor = new Laya.Vector4(0.908546102020596, 0.312226359832408, 0.165807566, 1.0);
		_material_mojiezuo_compound.hairScatteringColor = new Laya.Vector4(0.101485107618938, 0.0286201480182921, 0.022086979, 1.0);
		_material_mojiezuo_compound.jadeScatteringColor = new Laya.Vector4(1.41496360038652, 0.939581036863521, 0.375503466, 1.0);
		_material_mojiezuo_compound.silkStockingsColor = new Laya.Vector4(2.21690835106434, 1.22653906481263, 0.556089815, 1.0);
		_material_mojiezuo_compound.silkStockThickness = 0.0;
		_material_mojiezuo_compound.breathingLightColor = new Laya.Vector4(0.0627450980392157, 1.0, 1.0, 1.0);
		_material_mojiezuo_compound.breathingLightIntensity = 2.0;
		_material_mojiezuo_compound.breathingLightFrequency = 0.15 * 10;
		_material_mojiezuo_compound.breathingLightInterruption = 0.5;
		_material_mojiezuo_compound.ordinary1Anisotropy = 0.0;
		_material_mojiezuo_compound.ordinary2Anisotropy = 1.0;
		_material_mojiezuo_compound.skinAnisotropy = 0.0;
		_material_mojiezuo_compound.hairAnisotropy = 1.0;
		_material_mojiezuo_compound.jadeAnisotropy = 0.0;
		_material_mojiezuo_compound.silkStockingAnisotropy = 1.0;
		_material_mojiezuo_compound.breathingLightAnisotropy = 0.0;
		_material_mojiezuo_compound.backLightColor = new Laya.Vector4(0.513725490196078, 0.980392156862745, 1.0, 1.0);
		_material_mojiezuo_compound.backLightIntensity = 3.0;
		_material_mojiezuo_compound.ambientColorSky = new Laya.Vector4(0.219519718074868, 0.219519718074868, 0.219519718, 1.0);
		_material_mojiezuo_compound.ambientColorGround = new Laya.Vector4(0.315762743736397, 0.358653905926199, 0.579546612, 1.0);
		_material_mojiezuo_compound.ambientColorIntensity = 1.0;
		_material_mojiezuo_compound.time = (Laya.timer.currTimer - this.oldTime) * 0.001;
		_material_mojiezuo_compound.groundBaseHeight = -0.5;
		_material_mojiezuo_compound.shadowColor = new Laya.Vector4(0.36862745098, 0.4, 0.560784313725, 1.0);
		_material_mojiezuo_compound.shadowChangeCoefficienct = 0.0;
		_material_mojiezuo_compound.shadowStrength1 = 0.5;
		_material_mojiezuo_compound.shadowStrength2 = 0.25;
		_material_mojiezuo_compound.shadowStrength3 = 0.125;
		_material_mojiezuo_compound.shadowScale1 = 0.02;
		_material_mojiezuo_compound.shadowScale2 = 0.0;
		_material_mojiezuo_compound.shadowScale3 = -0.02;

		Laya.Texture2D.load("../res/env1.png", Laya.Handler.create(this, function (tex) { _material_mojiezuo_compound.envTex = tex; _material_guanyu_nv.envTex = tex; _material_bichiyouyu_nv.envTex = tex; }));

		if (Laya.WebGL._isWebGL2) {
			_material_guanyu_nv.isWebGL2 = true;
			_material_bichiyouyu_nv.isWebGL2 = true;
			_material_mojiezuo_compound.isWebGL2 = true;
		}
		else {
			_material_guanyu_nv.isWebGL2 = false;
			_material_bichiyouyu_nv.isWebGL2 = false;
			_material_mojiezuo_compound.isWebGL2 = false;
		}

		//添加自定义模型
		//guanyu_nv
		Laya.Mesh.load("../res/buzhihuowu_nv-77.lm", Laya.Handler.create(this, function (mesh: Laya.Mesh): void {
			this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
			// this.mainChar.transform.rotate(new Laya.Vector3(-90, 0, 0), true, false);
			// this.mainChar.transform.translate(new Laya.Vector3(0, 0, -3));
			this.mainChar.transform.translate(new Laya.Vector3(0, -1, -500));
			this.mainChar.transform.rotate(new Laya.Vector3(-90, 0, 0), false, false);
			// this.mainChar.transform.setWorldLossyScale(new Laya.Vector3(2, 2, 2));
			this.mainChar.meshRenderer.material = _material_guanyu_nv;

			//console.log(this.mainChar.meshFilter.sharedMesh.vertexCount);
			this.lastIndex = -1;
		}));

		//bichiyouyu_nv
		/*Laya.Mesh.load("../res/bichiyouyu_nv-bichiyouyu_nv.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_bichiyouyu_nv;
		}));*/

		//mojiezuo_compound
		/*Laya.Mesh.load("../res/mojie_compound-mojie_hutui.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_jianjia.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_luomo.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_shoubi.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_toukui.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_wuqi.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0.84,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_xiongjia.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));
		Laya.Mesh.load("../res/mojie_compound-mojie_yaodai.lm", Laya.Handler.create(this, function(mesh:Laya.Mesh):void {
        this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh)) as Laya.MeshSprite3D;
		this.mainChar.transform.rotate(new Laya.Vector3(-90,180,0),true,false);
		this.mainChar.transform.translate(new Laya.Vector3(0,0,0));
		this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
		}));*/



		this.sprite3D.transform.translate(new Laya.Vector3(0, 6.5, 0));



		Laya.timer.loop(33, this, function () {

			if (this.mainChar) {
				this.mainChar.transform.rotate(new Laya.Vector3(0, -0.9, 0), false, false);

				var time = (Laya.timer.currTimer - this.oldTime) * 0.001;
				_material_guanyu_nv.time = time;
				this.tempMaterial.hittedDeltaTime = (Laya.timer.currTimer - this.hittedTime) * 0.001;
				if (time > 62.832) {
					this.oldTime = Laya.timer.currTimer;
				}


			}
		});
	}


	private initShader() {
		var HittedFs: string = Laya.loader.getRes("../src/Hitted.fs") as string;
		var HittedVs: string = Laya.loader.getRes("../src/Hitted.vs") as string;
		var PreZFs: string = Laya.loader.getRes("../src/PreZ.fs") as string;
		var PreZVs: string = Laya.loader.getRes("../src/PreZ.vs") as string;
		var PBRShaderFs: string = Laya.loader.getRes("../src/RoleCheapPBR_bumped_fresnel_UI.fs") as string;
		var PBRShaderVs: string = Laya.loader.getRes("../src/RoleCheapPBR_bumped_fresnel_UI.vs") as string;
		var ShadowShader1Fs: string = Laya.loader.getRes("../src/CheapShadow1.fs") as string;
		var ShadowShader1Vs: string = Laya.loader.getRes("../src/CheapShadow1.vs") as string;
		var ShadowShader2Fs: string = Laya.loader.getRes("../src/CheapShadow2.fs") as string;
		var ShadowShader2Vs: string = Laya.loader.getRes("../src/CheapShadow2.vs") as string;
		var ShadowShader3Fs: string = Laya.loader.getRes("../src/CheapShadow3.fs") as string;
		var ShadowShader3Vs: string = Laya.loader.getRes("../src/CheapShadow3.vs") as string;
		//console.log("hahahah");
		//console.log(PBRShaderVs);
		//所有的attributeMap属性
		var attributeMap = {
			'a_Position': Laya.VertexMesh.MESH_POSITION0,
			'a_Texcoord': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
			'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
			'a_Tangent': Laya.VertexMesh.MESH_TANGENT0
		};
		//所有的uniform属性
		var uniformMap = {
			'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,
			'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE,
			'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,
			'u_MainTex': Laya.Shader3D.PERIOD_MATERIAL,
			'u_NormalMap': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ScatteringMask': Laya.Shader3D.PERIOD_MATERIAL,
			'u_HLTex': Laya.Shader3D.PERIOD_MATERIAL,
			'u_EnvTex': Laya.Shader3D.PERIOD_MATERIAL,
			'u_SkinScatteringColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_HairScatteringColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_JadeScatteringColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_SilkStockingsColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_SilkStockThickness': Laya.Shader3D.PERIOD_MATERIAL,
			'u_LightColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_LightDir': Laya.Shader3D.PERIOD_MATERIAL,
			'u_LightIntensity': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BackLightColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BackLightIntensity': Laya.Shader3D.PERIOD_MATERIAL,
			'u_AmbientColorSky': Laya.Shader3D.PERIOD_MATERIAL,
			'u_AmbientColorGround': Laya.Shader3D.PERIOD_MATERIAL,
			'u_AmbientColorIntensity': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BreathingLightColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BreathingLightIntensity': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BreathingLightFrequency': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BreathingLightInterruption': Laya.Shader3D.PERIOD_MATERIAL,
			'u_Ordinary1Anisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_Ordinary2Anisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_SkinAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_HairAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_JadeAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_SilkStockingAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_TransparentAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_BreathingLightAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
			'u_TransparentThickness': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowColor': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowScale1': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowScale2': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowScale3': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowStrength1': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowStrength2': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowStrength3': Laya.Shader3D.PERIOD_MATERIAL,
			'u_GroundBaseHeight': Laya.Shader3D.PERIOD_MATERIAL,
			'u_ShadowChangeCoefficienct': Laya.Shader3D.PERIOD_MATERIAL,
			'u_CameraPos': Laya.Shader3D.PERIOD_CAMERA,
			'u_MyTime': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedCoverColor': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedMulColor': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedCoverOrMul': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedCoverTime': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedMulTime': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedZ': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedZ_k': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedUseNormal': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedRim_k': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedRim_pow': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedRim_add': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedIsColor1Grad': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedIsColor2Grad': Laya.Shader3D.PERIOD_MATERIAL,
			'_hittedDeltaTime': Laya.Shader3D.PERIOD_MATERIAL


		};
		//注册CustomShader 
		var customShader = Laya.Shader3D.add("CustomShader");
		console.log("shader registed");
		//创建一个SubShader
		var subShader = new Laya.SubShader(attributeMap, uniformMap);
		//我们的自定义shader customShader中添加我们新创建的subShader
		customShader.addSubShader(subShader);

		var HittedPass = subShader.addShaderPass(HittedVs, HittedFs);
		//往新创建的subShader中添加shaderPass
		//var PreZPass = subShader.addShaderPass(PreZVs, PreZFs);
		//PreZPass.renderState.depthTest = Laya.RenderState.DEPTHTEST_LEQUAL;
		//PreZPass.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
		//PreZPass.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
		//PreZPass.renderState.srcBlend = Laya.RenderState.BLENDPARAM_ZERO;
		//PreZPass.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE;
		//PreZPass.renderState.stencilFunc = Laya.RenderState.STENCIL_ALWAYS;
		//PreZPass.renderState.stencilMask = 7;
		//PreZPass.renderState.stencilRef = 2;
		//PreZPass.renderState.stencilOpPass = Laya.RenderState.STENCIL_REPLACE;
		//PreZPass.renderState.depthWrite = true;

		//var PBRPass = subShader.addShaderPass(PBRShaderVs, PBRShaderFs);
		//PBRPass.renderState.cull = Laya.RenderState.CULL_BACK;
		//PBRPass.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
		//PBRPass.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
		//PBRPass.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
		//PBRPass.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
		//PBRPass.renderState.depthWrite = false;

		//var shadowPass1 = subShader.addShaderPass(ShadowShader1Vs, ShadowShader1Fs);
		//shadowPass1.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
		//shadowPass1.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
		//shadowPass1.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
		//shadowPass1.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
		//shadowPass1.renderState.stencilFunc = Laya.RenderState.STENCIL_GREATER;
		//shadowPass1.renderState.stencilMask = 224;
		//shadowPass1.renderState.stencilRef = 192;
		//shadowPass1.renderState.stencilOpPass = Laya.RenderState.STENCIL_REPLACE;

		//var shadowPass2 = subShader.addShaderPass(ShadowShader2Vs, ShadowShader2Fs);
		//shadowPass2.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
		//shadowPass2.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
		//shadowPass2.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
		//shadowPass2.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
		//shadowPass2.renderState.stencilFunc = Laya.RenderState.STENCIL_GREATER;
		//shadowPass2.renderState.stencilMask = 224;
		//shadowPass2.renderState.stencilRef = 160;
		//shadowPass2.renderState.stencilOpPass = Laya.RenderState.STENCIL_REPLACE;

		//var shadowPass3 = subShader.addShaderPass(ShadowShader3Vs, ShadowShader3Fs);
		//shadowPass3.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
		//shadowPass3.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
		//shadowPass3.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
		//shadowPass3.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
		//shadowPass3.renderState.stencilFunc = Laya.RenderState.STENCIL_GREATER;
		//shadowPass3.renderState.stencilMask = 224;
		//shadowPass3.renderState.stencilRef = 128;
		//shadowPass3.renderState.stencilOpPass = Laya.RenderState.STENCIL_REPLACE;
	}

	private scene: Laya.Scene3D;
	private sprite3D: Laya.Sprite3D;
	private mainChar: Laya.MeshSprite3D;
	private mainCharParts: Laya.MeshSprite3D[];
	private oldTime: number;
	private v: Array<Array<number>>;
	private camera: Laya.Camera;
	private lastIndex: number;
	private indices: Uint16Array;
	private tempMaterial: CustomMaterial;
	private hittedTime: number;
}
//激活启动类
new Main();
