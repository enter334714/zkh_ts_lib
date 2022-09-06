var laya = (function (exports) {
    'use strict';

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class TestSceneUI extends Scene {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("test/TestScene");
                }
            }
            test.TestSceneUI = TestSceneUI;
            REG("ui.test.TestSceneUI", TestSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class CustomMaterial extends Laya.Material {
        constructor() {
            super();
            this.setShaderName("CustomShader");
        }
    }
    class GameUI extends ui.test.TestSceneUI {
        constructor() {
            super();
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.transform.rotate(new Laya.Vector3(-30, 0, 0), true, false);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            directionLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));
            var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            var _material = new CustomMaterial();
            box.meshRenderer.material = _material;
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("script/GameUI.ts", GameUI);
        }
    }
    GameConfig.width = 1920;
    GameConfig.height = 1280;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/TestScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class CustomMaterial$1 extends Laya.Material {
        constructor() {
            super();
            this.setShaderName("CustomShader");
        }
        get mainTex() {
            return this._shaderValues.getTexture(CustomMaterial$1.MAINTEX);
        }
        set mainTex(value) {
            this._shaderValues.setTexture(CustomMaterial$1.MAINTEX, value);
        }
        get normTex() {
            return this._shaderValues.getTexture(CustomMaterial$1.NORMTEX);
        }
        set normTex(value) {
            this._shaderValues.setTexture(CustomMaterial$1.NORMTEX, value);
        }
        get hiLightTex() {
            return this._shaderValues.getTexture(CustomMaterial$1.HILIGHTTEX);
        }
        set hiLightTex(value) {
            this._shaderValues.setTexture(CustomMaterial$1.HILIGHTTEX, value);
        }
        get envTex() {
            return this._shaderValues.getTexture(CustomMaterial$1.ENVTEX);
        }
        set envTex(value) {
            this._shaderValues.setTexture(CustomMaterial$1.ENVTEX, value);
        }
        get skinScatteringColor() {
            return this._shaderValues.getVector(CustomMaterial$1.SKINSCATTERINGCOLOR);
        }
        set skinScatteringColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.SKINSCATTERINGCOLOR, value);
        }
        get hairScatteringColor() {
            return this._shaderValues.getVector(CustomMaterial$1.HAIRSCATTERINGCOLOR);
        }
        set hairScatteringColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.HAIRSCATTERINGCOLOR, value);
        }
        get jadeScatteringColor() {
            return this._shaderValues.getVector(CustomMaterial$1.JADESCATTERINGCOLOR);
        }
        set jadeScatteringColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.JADESCATTERINGCOLOR, value);
        }
        get silkStockingsColor() {
            return this._shaderValues.getVector(CustomMaterial$1.SILKSTOCKINGSCOLOR);
        }
        set silkStockingsColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.SILKSTOCKINGSCOLOR, value);
        }
        get silkStockThickness() {
            return this._shaderValues.getNumber(CustomMaterial$1.SILKSTOCKTHICKNESS);
        }
        set silkStockThickness(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SILKSTOCKTHICKNESS, value);
        }
        get backLightColor() {
            return this._shaderValues.getVector(CustomMaterial$1.BACKLIGHTCOLOR);
        }
        set backLightColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.BACKLIGHTCOLOR, value);
        }
        get backLightIntensity() {
            return this._shaderValues.getNumber(CustomMaterial$1.BACKLIGHTINTENSITY);
        }
        set backLightIntensity(value) {
            this._shaderValues.setNumber(CustomMaterial$1.BACKLIGHTINTENSITY, value);
        }
        get ambientColorSky() {
            return this._shaderValues.getVector(CustomMaterial$1.AMBIENTCOLORSKY);
        }
        set ambientColorSky(value) {
            this._shaderValues.setVector(CustomMaterial$1.AMBIENTCOLORSKY, value);
        }
        get ambientColorGround() {
            return this._shaderValues.getVector(CustomMaterial$1.AMBIENTCOLORGROUND);
        }
        set ambientColorGround(value) {
            this._shaderValues.setVector(CustomMaterial$1.AMBIENTCOLORGROUND, value);
        }
        get ambientColorIntensity() {
            return this._shaderValues.getNumber(CustomMaterial$1.AMBIENTCOLORINTENSITY);
        }
        set ambientColorIntensity(value) {
            this._shaderValues.setNumber(CustomMaterial$1.AMBIENTCOLORINTENSITY, value);
        }
        get breathingLightColor() {
            return this._shaderValues.getVector(CustomMaterial$1.BREATHINGLIGHTCOLOR);
        }
        set breathingLightColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.BREATHINGLIGHTCOLOR, value);
        }
        get breathingLightIntensity() {
            return this._shaderValues.getNumber(CustomMaterial$1.BREATHINGLIGHTINTENSITY);
        }
        set breathingLightIntensity(value) {
            this._shaderValues.setNumber(CustomMaterial$1.BREATHINGLIGHTINTENSITY, value);
        }
        get breathingLightFrequency() {
            return this._shaderValues.getNumber(CustomMaterial$1.BREATHINGLIGHTFREQUENCY);
        }
        set breathingLightFrequency(value) {
            this._shaderValues.setNumber(CustomMaterial$1.BREATHINGLIGHTFREQUENCY, value);
        }
        get breathingLightInterruption() {
            return this._shaderValues.getNumber(CustomMaterial$1.BREATHINGLIGHTINTERRUPTION);
        }
        set breathingLightInterruption(value) {
            this._shaderValues.setNumber(CustomMaterial$1.BREATHINGLIGHTINTERRUPTION, value);
        }
        get lightColor() {
            return this._shaderValues.getVector(CustomMaterial$1.LIGHTCOLOR);
        }
        set lightColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.LIGHTCOLOR, value);
        }
        get lightIntensity() {
            return this._shaderValues.getNumber(CustomMaterial$1.LIGHTINTENSITY);
        }
        set lightIntensity(value) {
            this._shaderValues.setNumber(CustomMaterial$1.LIGHTINTENSITY, value);
        }
        get lightDir() {
            return this._shaderValues.getVector(CustomMaterial$1.LIGHTDIR);
        }
        set lightDir(value) {
            this._shaderValues.setVector(CustomMaterial$1.LIGHTDIR, value);
        }
        get ordinary1Anisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.ORDINARY1ANISOTROPY);
        }
        set ordinary1Anisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.ORDINARY1ANISOTROPY, value);
        }
        get ordinary2Anisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.ORDINARY2ANISOTROPY);
        }
        set ordinary2Anisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.ORDINARY2ANISOTROPY, value);
        }
        get skinAnisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.SKINANISOTROPY);
        }
        set skinAnisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SKINANISOTROPY, value);
        }
        get hairAnisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.HAIRANISOTROPY);
        }
        set hairAnisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.HAIRANISOTROPY, value);
        }
        get jadeAnisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.JADEANISOTROPY);
        }
        set jadeAnisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.JADEANISOTROPY, value);
        }
        get silkStockingAnisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.SILKSTOCKINGANISOTROPY);
        }
        set silkStockingAnisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SILKSTOCKINGANISOTROPY, value);
        }
        get breathingLightAnisotropy() {
            return this._shaderValues.getNumber(CustomMaterial$1.BREATHINGLIGHTANISOTROPY);
        }
        set breathingLightAnisotropy(value) {
            this._shaderValues.setNumber(CustomMaterial$1.BREATHINGLIGHTANISOTROPY, value);
        }
        get groundBaseHeight() {
            return this._shaderValues.getNumber(CustomMaterial$1.GROUNDBASEHEIGHT);
        }
        set groundBaseHeight(value) {
            this._shaderValues.setNumber(CustomMaterial$1.GROUNDBASEHEIGHT, value);
        }
        get shadowColor() {
            return this._shaderValues.getVector(CustomMaterial$1.SHADOWCOLOR);
        }
        set shadowColor(value) {
            this._shaderValues.setVector(CustomMaterial$1.SHADOWCOLOR, value);
        }
        get shadowChangeCoefficienct() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWCHANGECOEFFICIENT);
        }
        set shadowChangeCoefficienct(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWCHANGECOEFFICIENT, value);
        }
        get shadowStrength1() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSTRENGTH1);
        }
        set shadowStrength1(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSTRENGTH1, value);
        }
        get shadowStrength2() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSTRENGTH2);
        }
        set shadowStrength2(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSTRENGTH2, value);
        }
        get shadowStrength3() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSTRENGTH3);
        }
        set shadowStrength3(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSTRENGTH3, value);
        }
        get shadowScale1() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSCALE1);
        }
        set shadowScale1(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSCALE1, value);
        }
        get shadowScale2() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSCALE2);
        }
        set shadowScale2(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSCALE2, value);
        }
        get shadowScale3() {
            return this._shaderValues.getNumber(CustomMaterial$1.SHADOWSCALE3);
        }
        set shadowScale3(value) {
            this._shaderValues.setNumber(CustomMaterial$1.SHADOWSCALE3, value);
        }
        get time() {
            return this._shaderValues.getNumber(CustomMaterial$1.TIME);
        }
        set time(value) {
            this._shaderValues.setNumber(CustomMaterial$1.TIME, value);
        }
        get isWebGL2() {
            return null;
        }
        set isWebGL2(value) {
            if (value == true)
                this._shaderValues.addDefine(CustomMaterial$1.WEBGL2);
        }
    }
    CustomMaterial$1.MAINTEX = Laya.Shader3D.propertyNameToID("u_MainTex");
    CustomMaterial$1.NORMTEX = Laya.Shader3D.propertyNameToID("u_NormalMap");
    CustomMaterial$1.HILIGHTTEX = Laya.Shader3D.propertyNameToID("u_HLTex");
    CustomMaterial$1.ENVTEX = Laya.Shader3D.propertyNameToID("u_EnvTex");
    CustomMaterial$1.SKINSCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_SkinScatteringColor");
    CustomMaterial$1.HAIRSCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_HairScatteringColor");
    CustomMaterial$1.JADESCATTERINGCOLOR = Laya.Shader3D.propertyNameToID("u_JadeScatteringColor");
    CustomMaterial$1.SILKSTOCKINGSCOLOR = Laya.Shader3D.propertyNameToID("u_SilkStockingsColor");
    CustomMaterial$1.SILKSTOCKTHICKNESS = Laya.Shader3D.propertyNameToID("u_SilkStockThickness");
    CustomMaterial$1.BREATHINGLIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_BreathingLightColor");
    CustomMaterial$1.BREATHINGLIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_BreathingLightIntensity");
    CustomMaterial$1.BREATHINGLIGHTFREQUENCY = Laya.Shader3D.propertyNameToID("u_BreathingLightFrequency");
    CustomMaterial$1.BREATHINGLIGHTINTERRUPTION = Laya.Shader3D.propertyNameToID("u_BreathingLightInterruption");
    CustomMaterial$1.ORDINARY1ANISOTROPY = Laya.Shader3D.propertyNameToID("u_Ordinary1Anisotropy");
    CustomMaterial$1.ORDINARY2ANISOTROPY = Laya.Shader3D.propertyNameToID("u_Ordinary2Anisotropy");
    CustomMaterial$1.SKINANISOTROPY = Laya.Shader3D.propertyNameToID("u_SkinAnisotropy");
    CustomMaterial$1.HAIRANISOTROPY = Laya.Shader3D.propertyNameToID("u_HairAnisotropy");
    CustomMaterial$1.JADEANISOTROPY = Laya.Shader3D.propertyNameToID("u_JadeAnisotropy");
    CustomMaterial$1.SILKSTOCKINGANISOTROPY = Laya.Shader3D.propertyNameToID("u_SilkStockingAnisotropy");
    CustomMaterial$1.BREATHINGLIGHTANISOTROPY = Laya.Shader3D.propertyNameToID("u_BreathingLightAnisotropy");
    CustomMaterial$1.BACKLIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_BackLightColor");
    CustomMaterial$1.BACKLIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_BackLightIntensity");
    CustomMaterial$1.AMBIENTCOLORSKY = Laya.Shader3D.propertyNameToID("u_AmbientColorSky");
    CustomMaterial$1.AMBIENTCOLORGROUND = Laya.Shader3D.propertyNameToID("u_AmbientColorGround");
    CustomMaterial$1.AMBIENTCOLORINTENSITY = Laya.Shader3D.propertyNameToID("u_AmbientColorIntensity");
    CustomMaterial$1.LIGHTCOLOR = Laya.Shader3D.propertyNameToID("u_LightColor");
    CustomMaterial$1.LIGHTINTENSITY = Laya.Shader3D.propertyNameToID("u_LightIntensity");
    CustomMaterial$1.LIGHTDIR = Laya.Shader3D.propertyNameToID("u_LightDir");
    CustomMaterial$1.TIME = Laya.Shader3D.propertyNameToID("u_MyTime");
    CustomMaterial$1.WEBGL2 = Laya.Shader3D.getDefineByName("WEBGL2");
    CustomMaterial$1.GROUNDBASEHEIGHT = Laya.Shader3D.propertyNameToID("u_GroundBaseHeight");
    CustomMaterial$1.SHADOWCHANGECOEFFICIENT = Laya.Shader3D.propertyNameToID("u_ShadowChangeCoefficienct");
    CustomMaterial$1.SHADOWCOLOR = Laya.Shader3D.propertyNameToID("u_ShadowColor");
    CustomMaterial$1.SHADOWSTRENGTH1 = Laya.Shader3D.propertyNameToID("u_ShadowStrength1");
    CustomMaterial$1.SHADOWSTRENGTH2 = Laya.Shader3D.propertyNameToID("u_ShadowStrength2");
    CustomMaterial$1.SHADOWSTRENGTH3 = Laya.Shader3D.propertyNameToID("u_ShadowStrength3");
    CustomMaterial$1.SHADOWSCALE1 = Laya.Shader3D.propertyNameToID("u_ShadowScale1");
    CustomMaterial$1.SHADOWSCALE2 = Laya.Shader3D.propertyNameToID("u_ShadowScale2");
    CustomMaterial$1.SHADOWSCALE3 = Laya.Shader3D.propertyNameToID("u_ShadowScale3");
    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.stage.frameRate = "fast";
            Laya.Stat.show(0, 0);
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.loader.load(["../src/RoleCheapPBR_bumped_fresnel_UI.fs",
                "../src/RoleCheapPBR_bumped_fresnel_UI.vs",
                "../src/CheapShadow1.fs",
                "../src/CheapShadow1.vs",
                "../src/CheapShadow2.fs",
                "../src/CheapShadow2.vs",
                "../src/CheapShadow3.fs",
                "../src/CheapShadow3.vs",
                "../res/guanyu_nv_d.png",
                "../res/guanyu_nv_h.png",
                "../res/guanyu_nv_n.png",
                "../res/bichiyouyu_nv_d.png",
                "../res/bichiyouyu_nv_h.png",
                "../res/bichiyouyu_nv_n.png",
                "../res/mojie_d.png",
                "../res/mojie_h.png",
                "../res/mojie_n.png"
            ], Laya.Handler.create(this, this.onResLoaded));
            this.scene = Laya.stage.addChild(new Laya.Scene3D());
            this.sprite3D = this.scene.addChild(new Laya.Sprite3D());
            var camera = (this.scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 12));
            camera.transform.rotate(new Laya.Vector3(-12, 0, 0), true, false);
            camera.orthographic = true;
            camera.clearFlag = Laya.CameraClearFlags.SolidColor;
            camera.clearColor = new Laya.Vector4(0.5, 0.5, 0.5, 1.0);
            camera.orthographicVerticalSize = 4;
            this.oldTime = Laya.timer.currTimer;
        }
        onVersionLoaded() {
        }
        onConfigLoaded() {
        }
        onResLoaded() {
            this.initShader();
            var _material_guanyu_nv = new CustomMaterial$1();
            _material_guanyu_nv.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
            _material_guanyu_nv.lightIntensity = 1.0;
            _material_guanyu_nv.lightDir = new Laya.Vector4(0.391844828931057, 0.374606593415912, 0.840313947, 0.0);
            _material_guanyu_nv.mainTex = Laya.loader.getRes("../res/guanyu_nv_d.png");
            _material_guanyu_nv.hiLightTex = Laya.loader.getRes("../res/guanyu_nv_h.png");
            _material_guanyu_nv.normTex = Laya.loader.getRes("../res/guanyu_nv_n.png");
            _material_guanyu_nv.envTex = Laya.loader.getRes("../res/env1.png");
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
            _material_guanyu_nv.breathingLightAnisotropy = 0.0;
            _material_guanyu_nv.backLightColor = new Laya.Vector4(0.513725490196078, 0.980392156862745, 1.0, 1.0);
            _material_guanyu_nv.backLightIntensity = 3.0;
            _material_guanyu_nv.ambientColorSky = new Laya.Vector4(0.219519718074868, 0.219519718074868, 0.219519718, 1.0);
            _material_guanyu_nv.ambientColorGround = new Laya.Vector4(0.315762743736397, 0.358653905926199, 0.579546612, 1.0);
            _material_guanyu_nv.ambientColorIntensity = 1.0;
            _material_guanyu_nv.time = (Laya.timer.currTimer - this.oldTime) * 0.001;
            _material_guanyu_nv.groundBaseHeight = 0.0;
            _material_guanyu_nv.shadowColor = new Laya.Vector4(0.36862745098, 0.4, 0.560784313725, 1.0);
            _material_guanyu_nv.shadowChangeCoefficienct = 0.0;
            _material_guanyu_nv.shadowStrength1 = 0.5;
            _material_guanyu_nv.shadowStrength2 = 0.25;
            _material_guanyu_nv.shadowStrength3 = 0.125;
            _material_guanyu_nv.shadowScale1 = 0.005;
            _material_guanyu_nv.shadowScale2 = 0.0;
            _material_guanyu_nv.shadowScale3 = -0.005;
            var _material_bichiyouyu_nv = new CustomMaterial$1();
            _material_bichiyouyu_nv.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
            _material_bichiyouyu_nv.lightIntensity = 1.0;
            _material_bichiyouyu_nv.lightDir = new Laya.Vector4(0.391844828931057, 0.374606593415912, 0.840313947, 0.0);
            _material_bichiyouyu_nv.mainTex = Laya.loader.getRes("../res/bichiyouyu_nv_d.png");
            _material_bichiyouyu_nv.hiLightTex = Laya.loader.getRes("../res/bichiyouyu_nv_h.png");
            _material_bichiyouyu_nv.normTex = Laya.loader.getRes("../res/bichiyouyu_nv_n.png");
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
            _material_bichiyouyu_nv.groundBaseHeight = 0.0;
            _material_bichiyouyu_nv.shadowColor = new Laya.Vector4(0.36862745098, 0.4, 0.560784313725, 1.0);
            _material_bichiyouyu_nv.shadowChangeCoefficienct = 0.0;
            _material_bichiyouyu_nv.shadowStrength1 = 0.5;
            _material_bichiyouyu_nv.shadowStrength2 = 0.25;
            _material_bichiyouyu_nv.shadowStrength3 = 0.125;
            _material_bichiyouyu_nv.shadowScale1 = 0.005;
            _material_bichiyouyu_nv.shadowScale2 = 0.0;
            _material_bichiyouyu_nv.shadowScale3 = -0.005;
            var _material_mojiezuo_compound = new CustomMaterial$1();
            _material_mojiezuo_compound.lightColor = new Laya.Vector4(0.843369730392169, 0.789313742415586, 0.701169502, 1.0);
            _material_mojiezuo_compound.lightIntensity = 1.0;
            _material_mojiezuo_compound.lightDir = new Laya.Vector4(0.391844828931057, 0.374606593415912, 0.840313947, 0.0);
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
            _material_mojiezuo_compound.shadowScale1 = 0.005;
            _material_mojiezuo_compound.shadowScale2 = 0.0;
            _material_mojiezuo_compound.shadowScale3 = -0.005;
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
            Laya.Mesh.load("../res/mojie_compound-mojie_hutui.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_jianjia.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_luomo.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_shoubi.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_toukui.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_wuqi.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0.84, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_xiongjia.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            Laya.Mesh.load("../res/mojie_compound-mojie_yaodai.lm", Laya.Handler.create(this, function (mesh) {
                this.mainChar = this.sprite3D.addChild(new Laya.MeshSprite3D(mesh));
                this.mainChar.transform.rotate(new Laya.Vector3(-90, 180, 0), true, false);
                this.mainChar.transform.translate(new Laya.Vector3(0, 0, 0));
                this.mainChar.meshRenderer.material = _material_mojiezuo_compound;
            }));
            this.sprite3D.transform.translate(new Laya.Vector3(0, -0.5, 0));
            Laya.timer.loop(33, this, function () {
                if (this.mainChar) {
                    this.sprite3D.transform.rotate(new Laya.Vector3(0, -0.9, 0), false, false);
                    var time = (Laya.timer.currTimer - this.oldTime) * 0.001;
                    _material_guanyu_nv.time = time;
                    if (time > 62.832) {
                        this.oldTime = Laya.timer.currTimer;
                    }
                }
            });
        }
        initShader() {
            var PBRShaderFs = Laya.loader.getRes("../src/RoleCheapPBR_bumped_fresnel_UI.fs");
            var PBRShaderVs = Laya.loader.getRes("../src/RoleCheapPBR_bumped_fresnel_UI.vs");
            var ShadowShader1Fs = Laya.loader.getRes("../src/CheapShadow1.fs");
            var ShadowShader1Vs = Laya.loader.getRes("../src/CheapShadow1.vs");
            var ShadowShader2Fs = Laya.loader.getRes("../src/CheapShadow2.fs");
            var ShadowShader2Vs = Laya.loader.getRes("../src/CheapShadow2.vs");
            var ShadowShader3Fs = Laya.loader.getRes("../src/CheapShadow3.fs");
            var ShadowShader3Vs = Laya.loader.getRes("../src/CheapShadow3.vs");
            var attributeMap = {
                'a_Position': Laya.VertexMesh.MESH_POSITION0,
                'a_Texcoord': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
                'a_Tangent': Laya.VertexMesh.MESH_TANGENT0
            };
            var uniformMap = {
                'u_MvpMatrix': Laya.Shader3D.PERIOD_SPRITE,
                'u_WorldMat': Laya.Shader3D.PERIOD_SPRITE,
                'u_ViewProjection': Laya.Shader3D.PERIOD_CAMERA,
                'u_MainTex': Laya.Shader3D.PERIOD_MATERIAL,
                'u_NormalMap': Laya.Shader3D.PERIOD_MATERIAL,
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
                'u_BreathingLightAnisotropy': Laya.Shader3D.PERIOD_MATERIAL,
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
                'u_MyTime': Laya.Shader3D.PERIOD_MATERIAL
            };
            var customShader = Laya.Shader3D.add("CustomShader");
            console.log("shader registed");
            var subShader = new Laya.SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            var PBRPass = subShader.addShaderPass(PBRShaderVs, PBRShaderFs);
            var shadowPass = subShader.addShaderPass(ShadowShader1Vs, ShadowShader1Fs);
            shadowPass.renderState.blend = Laya.RenderState.BLEND_ENABLE_ALL;
            shadowPass.renderState.blendEquation = Laya.RenderState.BLENDEQUATION_ADD;
            shadowPass.renderState.srcBlend = Laya.RenderState.BLENDPARAM_SRC_ALPHA;
            shadowPass.renderState.dstBlend = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
        }
    }
    new Main();

    exports.CustomMaterial = CustomMaterial$1;

    return exports;

}({}));
