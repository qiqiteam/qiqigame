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

class Main extends xlLib.GameDoc {
    private loginView:LoginView;
    /**
     * 加载进度界面
     * loading process interface
     */
    public start() {
        super.start();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            // egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            // egret.ticker.resume();
        }
        
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());

        RES.setMaxLoadingThread(4);

        /**初始化xlLib */
        let option = new xlLib.initOptions();
        if(DEBUG){
            option.debug = true;
        }
        else{
            option.debug = false;
        }
        xlLib.init(option);
        xlLib.UIMgr.instance.commonLoadUI = LodingView;
        xlLib.UIMgr.instance.tipsLoadUI = TipsLoading;
        xlLib.ReceiveMessageMgr.getInstance().initPushMessage();
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json", this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    private isThemeLoadEnd: boolean = false;
    /**
     * 主题文件加载完成,开始预加载
     * Loading of theme configuration file is complete, start to pre-load the 
     */
    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }
    private isResourceLoadEnd: boolean = false;
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }
    private createScene() {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            // if(xlLib.Global.isH5)
            //     document.getElementById("loadingDiv").style.display = "none";
            this.startCreateScene();
        }
    }
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == "preload") {
            
        }
    }


    private isSocketSuc: boolean = false;
    private isResLoadEnd: boolean = false;

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected startCreateScene(): void {
        if (xlLib.Utils.isAndroid) {
            xlLib.AndroidSDK.init();
        } else if(xlLib.Utils.isIOS) {
            xlLib.IosSDK.init();
        }
        xlLib.ResLoadMgr.instance.load("game", this.onLoadComplete, this.onResourceLoadError, this, LodingView, true);
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
    }

    private onLoadComplete(evt: RES.ResourceEvent){
        this.isResLoadEnd = true;
        this.isSocketSuc = true;
        this.startEnterGame();
    }

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


    private startEnterGame()
    {
        if(this.isSocketSuc && this.isResLoadEnd)
        {
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
    }

    public resize(): void 
    {
        if(this.loginView)
        {
            this.loginView.resize();
        }
    }

    // private onSocketFail(){
    //     console.error("socket 初始化失败");
    // }
}


