//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isThemeLoadEnd = false;
        _this.isResourceLoadEnd = false;
        _this.isSocketSuc = false;
        _this.isResLoadEnd = false;
        return _this;
        // private onSocketFail(){
        //     console.error("socket 初始化失败");
        // }
    }
    /**
     * 加载进度界面
     * loading process interface
     */
    Main.prototype.start = function () {
        _super.prototype.start.call(this);
        // egret.lifecycle.addLifecycleListener((context) => {
        //      custom lifecycle plugin
        // })
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
            xlLib.SoundMgr.instance.musicOpen = false;
            xlLib.SoundMgr.instance.soundOpen = false;
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
            xlLib.SoundMgr.instance.musicOpen = true;
            xlLib.SoundMgr.instance.soundOpen = true;
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        RES.setMaxLoadingThread(4);
        /**初始化xlLib */
        var option = new xlLib.initOptions();
        if (true) {
            option.debug = true;
        }
        else {
            option.debug = false;
        }
        xlLib.init(option);
        xlLib.UIMgr.instance.commonLoadUI = LodingView;
        xlLib.UIMgr.instance.tipsLoadUI = TipsLoading;
        xlLib.ResUtils.init();
        xlLib.ReceiveMessageMgr.getInstance().initPushMessage();
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
        xlLib.SoundMgr.instance.musicOpen = true;
        xlLib.SoundMgr.instance.soundOpen = true;
    };
    Main.prototype.showLoadingIcon = function () {
        if (!this.loadingIcon) {
            this.loadingIcon = xlLib.DisplayUtils.createBitmapByName("loading_png");
            this.loadingIcon.x = xlLib.Global.screenWidth >> 1;
            this.loadingIcon.y = xlLib.Global.screenHeight >> 1;
            this.loadingIcon.anchorOffsetX = this.loadingIcon.width / 2;
            this.loadingIcon.anchorOffsetY = this.loadingIcon.height / 2;
        }
        this.addChild(this.loadingIcon);
        this.starRotation();
    };
    Main.prototype.starRotation = function () {
        egret.Tween.get(this.loadingIcon).to({ rotation: this.loadingIcon.rotation + 40 }, 100).call(this.starRotation, this);
    };
    Main.prototype.removeLodingIcon = function () {
        egret.Tween.removeTweens(this.loadingIcon);
        if (this.loadingIcon && this.loadingIcon.parent) {
            this.loadingIcon.parent.removeChild(this.loadingIcon);
        }
        this.loadingIcon = null;
        RES.destroyRes("loading_png");
    };
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the
     */
    Main.prototype.onThemeLoadComplete = function () {
        this.isThemeLoadEnd = true;
        this.createScene();
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.showLoadingIcon();
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);
            RES.loadGroup("load");
        }
        else if (event.groupName == "load") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    };
    Main.prototype.createScene = function () {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            // if(xlLib.Global.isH5)
            //     document.getElementById("loadingDiv").style.display = "none";
            this.startCreateScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
        }
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.startCreateScene = function () {
        if (xlLib.Utils.isAndroid) {
            xlLib.AndroidSDK.init();
        }
        else if (xlLib.Utils.isIOS) {
            xlLib.IosSDK.init();
        }
        this.removeLodingIcon();
        xlLib.ResLoadMgr.instance.load("hall", this.onLoadComplete, this.onResourceLoadError, this, LodingView, true);
        // xlLib.WebSocketMgr.getInstance().connect("47.91.221.49", ":3010");
        // var params:any = new Object;
        // params.host = "47.91.221.49";
        // params.port = "3010";
        // xlLib.PomeloSocketMgr.getInstance().initSocket(params, this.onInitSocketSuc, this.onSocketFail, this);
        // let config = RES.getRes("config_json");
        // JlGameConstant.socketUrl = config.socketUrl; 
        // xlLib.ResLoadMgr.instance.load("lb", this.onLoadComplete, this.onResourceLoadError, this, LbLoading, false);
        // xlLib.NetMgr.initSocket(JlGameConstant.socketUrl, RES.getRes("C2S_spb"), RES.getRes("gameMsg_json"), this.onInitSocketSuc, this.onSocketFail, this);
        // xlLib.Js2Native.init();
    };
    Main.prototype.onLoadComplete = function (event) {
        this.isResLoadEnd = true;
        this.isSocketSuc = true;
        this.startEnterGame();
    };
    // private onInitSocketSuc(){
    //     // SendMsgMgr.instance.onWxLoginReq(xlLib.UserInfo.uid, xlLib.UserInfo.unionid, xlLib.UserInfo.token);
    //     xlLib.PomeloSocketMgr.getInstance().initPushMessage();
    //     this.isSocketSuc = true;
    //     // xlLib.NetMgr.setHeadHandlerFun(lbcommon.OnHeadCallBack, null);
    //     this.startEnterGame();
    //     // xlLib.NetMgr.httpSend(JlGameConstant.GET_IP_URL, null, (rev)=>{
    //     //     if(rev && rev["0"]){
    //     //         xlLib.UserInfo.ip = rev.json.ip;
    //     //         xlLib.UserInfo.city = rev.json.province + rev.json.city;
    //     //     }
    //     // });
    // }
    Main.prototype.startEnterGame = function () {
        if (this.isSocketSuc && this.isResLoadEnd) {
            //  xlLib.UIMgr.instance.showUI(app.LoginView);
            this.loginView = new LoginView();
            this.uiLayer.addChild(this.loginView);
            // if(account && account != "" && (/^1[34578]\d{9}$/.test(account.split("_")[1]))){
            //     let login = new LbLogin();
            //     this.uiLayer.addChild(login);
            // }
            // else{
            //     if(account && account != ""){
            //         SendMsgMgr.instance.onVisitorLoginReq(account.split("_")[1], "111111");
            //     }
            //     else{
            //         SendMsgMgr.instance.onCreateRoleReq(111);
            //     }
            // }
        }
        // xlLib.SceneMgr.instance.changeScene(Lobby);
    };
    Main.prototype.resize = function () {
        if (this.loginView) {
            this.loginView.resize();
        }
    };
    return Main;
}(xlLib.GameDoc));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map