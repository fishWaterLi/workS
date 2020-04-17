
<template>
    <div class="layout" >
      <headers></headers>
      <icon></icon>
      <div class="content-bottom">
        <div class="left"></div>
        <div class="right"></div>
        <div class="center">
        <div class="download">
            <h2>WikiPay立志于让全球支付更简单</h2>
            <h3>顶尖的技术团队专业打造，立志于解决中心化国际支付问题，资金安全不在话下，联系人转账0手续费，还有跟多商户合作优惠资源等你来领取</h3>
            <div class='download-b'>
                    <div class='first'>
                      <div class='df'>
                          <div class="apple"></div>
                          <div class='writing'>
                          <span class='top'>下载</span>
                          <span class='bt'>Ios版</span>
                      </div>
                    </div>
                      <div class="ds">
                        <div class="robot"></div>
                        <div class='writing'>
                        <span class='top'>下载</span>
                        <span class='bt'>Android版</span>
                        </div>
                      </div>
                         </div>
                      <div class="second">
                          <div class="dt">
                            <div class="group"></div>
                            <div class='writing'>
                              <span class='top'>下载</span>
                              <span class='bt'>Google</span>
                            </div>
                            </div>
                          <div class="dfo">
                           <div class="code"></div>
                          </div>
                      </div>
                  </div>
                <!-- <qrcodeLogin></qrcodeLogin> -->
        </div> 
        <div class="login" v-show="isPwdLogin">
          <div class='login-toper'>
            <div class="login-topl">
                <!-- <span class="traingle">></span> -->
                <div class='txt'>账号密码管理</div>
          </div>
           <div class="login-topr"  @click='switchto'></div>
             <div class='l-s'>扫一扫登录</div>
                <div class='l-app'>
                            <span class="use">请使用</span>
                            <span class="wiki">Wikipay APP</span>
                            <span class="l-app-l">扫码登陆</span>
                          </div>
                          <div class='code'>
                            <div class='code-l'>
                            <div class="code-le" :style='{backgroundImage:`url(${qrcodeData})`}'></div>
                            </div>
                            <div class='code-r'>
                              <div class="code-rp"></div>
                            </div>
                          </div>
                        <div class="intro">Wikipay APP - 首页状态栏中间 - 扫一扫登录</div>
                        </div>
                        <div class="login-footer">
                          <span class="lf-l">还没有手机WikiPay ?</span> 
                          <span class="lf-r" @click="$router.push({path:'/downlod'})">下载wikipay</span>
                        </div>
            </div>
        <div class="pwd-login" v-if="!isPwdLogin">
          <div class="qrcodeImg" @click='switchto'></div>
          <div class="top">
            <div class="sweep-login"> 
                扫一扫登录 
            </div>
          </div>
          <div class="txt">账号密码登录</div>
          <h4 class="account">账号</h4>
          <div class="num">
            <Dropdown trigger="click" class="num-left">
                   <a href="javascript:void(0)">
                    <div class="country" :style="`background:url(${flag})`"></div> 
                    <div class="number">{{flagCode}}</div> 
                    <div class="icon"></div>
                  </a>
              <DropdownMenu slot="list">
                  <DropdownItem v-for="(item,key) in flagList" :key="item.id" class='list' @click.native="changeFlagCode(key)">
                     <div class="country" :style="`background:url(${item.flag})`"></div>
                    <div class="txt">{{item.code}}</div>
                  </DropdownItem>
              </DropdownMenu>
          </Dropdown> 
        <input type="tel" placeholder="输入邮箱/手机号" class='tel' v-model="userName">
    </div>
      <h4 class="pwd">密码</h4>
      <!-- <div class="length"></div> -->
      <input type="password" placeholder="输入登陆密码" class="pass" v-model="pwd">
       <h4 class='captcha-txt' v-show="isShowCaptcha">验证码</h4>
       <div class="captcha" v-show="isShowCaptcha">
          <input type="text" class="captcha-left" placeholder="输入验证码" v-model="captcha">
          <div class="captcha-right" :style="`background:url(${captchaImg}) no-repeat center`"></div>
       </div>
        <button class="login-b" @click="login">登录</button>
        <div class="bottom">
          <div class="sign">免费注册</div>
          <a class="forget" >忘记登录密码？</a>
        </div>
          </div>
        </div>
          </div>
      <footers></footers>
    </div>
    
</template>
<script>
import headers from './components/header/headers'
import icon from './components/icon/icon'
import footers from './components/footer/footers'
import {mapMutations} from 'vuex'
  export default {
        name:'layout',
        data(){
            return {
                bg:'',
                lgToken:'',
                isPwdLogin: false,
                isShowCaptcha: false,
                userName:'',
                pwd:'',
                flagList: [],//国旗列表
                lgToken:'',
                qrcodeData:'',  //二维码图形
                captchaId:'', //验证码序列号
                flagCode:'',  //国家区号
                flag:'',      //旗帜地址
                captcha:'',   //验证码
                captchaImg:'',
                }
        },
        components:{
          headers,
          icon,
          footers
        },
        mounted() {
          this.flagCode = '0086';
          this.flag = 'https://img.wikifx.com/flag/7d8833382673bab2/CN.png_wiki-template-global';
          this.getQrcode();
        },
        methods:{
         ...mapMutations(['changeLogin']),

        //国家区号代码选择
         changeFlagCode(key) {
          this.flagCode = this.flagList[key].code;
          this.flag = this.flagList[key].flag;
         },

         switchto(){
           if(this.isPwdLogin == true){
             if(this.flagList.length == 0){
              this.getFlags();
             }
           }
            return this.isPwdLogin=!this.isPwdLogin
          },

        //获取二维码信息
        getQrcode(){
            this.$getQrcode('', res=>{
              if(res.code == 0) {
                this.qrcodeData = res.data.data;
                this.lgToken = res.data.lgToken;
              }else{
                this.$Message.error(res.msg);
              }
          });
        },

        //获取国旗
        getFlags(){
          this.$getFlags('', res=>{
              if(res.code == 0) {
                  this.flagList = res.data.flags;
              }else{
                  this.$Message.error(res.msg)
              }
          });
        },

      // 账号密码登录业务逻辑
        login(){
            if(this.userName==''){ 
              this.$Message.error('请输入用户名');
              return
            } 
            if(this.pwd==''){
              this.$Message.error('请输入密码');
              return
            }
            let params = {          
                areaCode: this.flagCode,
                userName: this.userName,
                pwd:      this.pwd
            }
            if(this.isShowCaptcha = true){
              if (this.captcha.length > 0 ) {
                params.id = this.captchaId;
                params.digits = this.captcha;
              }
            }
            this.$phoneLogin(params,(res)=>{
             if(res.code == 0){
                this.isShowCaptcha = false;
                this.userToken = `res.data.token`
                this.changeLogin({Authorization:this.userToken})
                this.$router.push('/mine');
             } else if (res.code == 1010008) {
                this.$Message.error(res.msg);
                this.isShowCaptcha = true;
                this.$getCaptchaid('',(res)=>{
                  if(res.data.captchaId.length > 0){
                    let param = { 
                      id: res.data.captchaId,
                    }
                    this.captchaId = res.data.captchaId;
                    this.captchaImg = this.$getCaptcha(this.captchaId);
                    console.log(this.captchaImg);
                  }
                })
            }else {
                this.$Message.error(res.msg);
            }
        })
      } 
  }
  }
</script>
<style scoped lang='stylus'>
    .layout
       height 1140px
       width 100%
       background-image url('../assets/imgs/Group3.png')
       position relative
      .content-bottom
          position relative
          margin 0 auto
          overflow hidden
          .left
            width 22%
            position: absolute; 
            top: 0; 
            bottom 0
            right 0
            left: 0;
          .right
            width 10%
            position: absolute; 
            top: 0; 
            bottom 0
            right 0
            left: 0;
          .center 
            width 67%
            margin 0 auto
            .download
              width 512px
              margin-top 48px
              float left
              h2
                width:512px;
                height:64px;
                font-size:32px;
                font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:60px;
                margin-top 32px
              h3
                width:494px;
                height:92px;
                font-size:14px;
                font-family:MicrosoftYaHei;
                color:rgba(255,255,255,1);
                line-height:33px;
              .download-b
                width 350px
                height 115px
                .first
                  overflow hidden
                  margin-bottom 37px
                  .df
                    margin-right 31px
                    box-sizing border-box
                    width:160px;
                    height:48px;
                    // background:rgba(255,255,255,1);
                    border: 1px solid #fff
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:24px;
                    float left
                    &:hover
                      background-color white
                    .apple
                      float left
                      width 34px
                      height 38px
                      margin 5px 0px 5px 40px
                      background-image url('../assets/imgs/apple.svg') 
                      background-repeat no-repeat
                      background-position 50% 50%
                    .writing
                      margin 5px 0 5px 9px
                      float left 
                      .top  
                        display block
                        width:28px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(51,51,51,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                      .bt
                        display block
                        width:34px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(111,111,111,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                  .ds
                    width:159px;
                    height:48px;
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:24px;
                    border:1px solid rgba(255,255,255,1);
                    float right
                    &:hover
                      background-color white
                    .robot 
                      float left
                      width 34px;
                      height 37px
                      margin 6px 0px 5px 21px
                      background-image url('../assets/imgs/robot.svg') 
                      background-repeat no-repeat
                      background-position 50% 50%
                      &:hover
                        color #000000
                    .writing
                      margin 5px 0 5px 9px
                      float left 
                      .top  
                        display block            
                        width:28px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                      .bt
                        display block
                        width:68px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                .second
                  overflow hidden
                  .dt
                    margin-right 31px
                    box-sizing border-box
                    width:159px;
                    height:48px;
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:24px;
                    border:1px solid rgba(255,255,255,1);
                    float left
                    &:hover
                      background-color white
                    .group
                      float left
                      width:17px;
                      height:18px;
                      background-image url('../assets/imgs/group.png')
                      box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5); 
                      margin 15px 0 15px 43px
                    .writing
                      margin 5px 0 5px 9px
                      float left 
                      .top  
                        display block            
                        width:28px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                      .bt
                        display block
                        width:49px;
                        height:19px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:19px;
                        text-shadow:0px 2px 4px rgba(0,0,0,0.5);
                  .dfo
                    width 159px;
                    height:48px;
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                    border-radius:24px;
                    border:1px solid rgba(255,255,255,1);
                    float right
                    &:hover
                      background-color white
                    .code
                      width 30px
                      height 30px
                      background-image url('../assets/imgs/erwei.png')
                      margin 9px 65px 
            .login
                float right
                width:400px
                height:449px
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);
                border-radius:8px;
                position relative
                .login-toper 
                  .login-topl
                      width:104px;
                      height:28px;
                      background:rgba(248,251,255,1);
                      border:1px solid rgba(54,116,215,0.3);
                      font-size:12px;
                      font-family:MicrosoftYaHei;
                      color:rgba(54,116,215,1);
                      line-height:28px;
                      text-align center
                      margin 12px 89px 0 207px
                    // .traingle
                    //   display block
                    //   top 10px
                    //   right 8px
                    //   position absolute
                    //   width 10px
                    //   height 10px
                    //   color rgba(54,116,215,0.3)
                    // .txt
                    //   width:104px;
                    //   height:28px;
                    //   background:rgba(248,251,255,1);
                    //   border:1px solid rgba(54,116,215,0.3);
                    //   font-size:12px;
                    //   font-family:MicrosoftYaHei;
                    //   color:rgba(54,116,215,1);
                    //   line-height:28px;
                    //   text-align center
                  .login-topr
                    width:103px;
                    height:111px
                    position absolute
                    background-image url('../assets/imgs/pc-1.png')
                    top 0
                    right 0
                  .l-s
                    width:126px;
                    height:24px;
                    font-size:21px;
                    font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:21px;
                    margin 0 226px 22px 48px
                  .l-app
                    overflow hidden
                    .use
                      margin-left 48px
                      display inline-block
                      width 53px
                      height:17px;
                      font-size:16px;
                      font-family:MicrosoftYaHei;
                      color:rgba(51,51,51,1);
                      line-height:15px;
                      margin-right 1px
                    .wiki
                      display inline-block
                      width:106px;
                      height:17px;
                      font-size:16px;
                      font-family:MicrosoftYaHei;
                      color:rgba(43,178,255,1);
                      line-height:16px;
                    .l-app-l
                      display inline-block
                      width:68px;
                      height:17px;
                      font-size:16px;
                      font-family:MicrosoftYaHei;
                      color:rgba(51,51,51,1);
                      ine-height:15px;
                      margin-right 123px
                  .code
                    overflow hidden
                    margin 40px 43px 23px 48px 
                    .code-l
                      float left
                      width:157px;
                      height:157px;
                      border:1px solid rgba(238,238,238,1);
                      margin-right 10px
                      .code-le
                        width:141px;
                        height:141px;
                        margin 8px
                        background-position center
                    .code-r 
                      float left 
                      width:142px;
                      height:154px;
                      // opacity:0.14;
                      border:3px solid rgba(54,116,215,0.14);
                      .code-rp
                        background-image url('../assets/imgs/sweep.png')
                        width:138px;
                        height:146px;
                  .intro
                      width:291px;
                      height:16px;
                      font-size:14px;
                      font-family:MicrosoftYaHei;
                      color:rgba(153,153,153,1);
                      line-height:16px;
                      margin 0 54px 39px 55px
                .login-footer
                  height:64px;
                  background:rgba(243,248,255,1);
                  .lf-l
                    margin 24px 4px 23px 81px
                    display inline-block
                    width:145px;
                    height:17px;
                    font-size:15px;
                    font-family:MicrosoftYaHei;
                    color:rgba(102,102,102,1);
                    line-height:15px;
                  .lf-r
                    margin 24px 80px 23px 4px
                    display inline-block
                    width:86px;
                    height:17px;
                    font-size:15px;
                    font-family:MicrosoftYaHei;
                    color:rgba(54,116,215,1);
                    line-height:15px;  
            .pwd-login
                float right
                width:400px
                min-height:449px
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);
                position relative
                border-radius:8px;
                .qrcodeImg
                    width:103px;
                    height:111px;
                    background-image url('../assets/imgs/qrcodeImg.png')
                    position absolute
                    top 0
                    right 0
                .top
                  height 94px
                  .sweep-login
                    width:93px;
                    height:28px;
                    line-height 28px
                    text-align center
                    background:rgba(248,251,255,1);
                    border:1px solid rgba(54,116,215,0.3);
                    float left
                    margin 12px 89px 0 218px
                    font-size:12px;
                    font-family:MicrosoftYaHei;
                    color:rgba(54,116,215,1);
                .txt
                  width:126px;
                  height:21px;
                  font-size:20px;
                  font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                  font-weight:bold;
                  color:rgba(51,51,51,1);
                  line-height:21px;
                  position absolute
                  left 48px
                  top 40px
                .account
                  width:45px;
                  height:17px;
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  color:rgba(51,51,51,1);
                  line-height:15px;
                  margin 0 0 20px 134px
                .num
                  margin 0 48px 0 50px
                  .num-left
                    a 
                      display block
                      .country
                        background-image url('../assets/imgs/country.png')
                        width:20px;
                        height:13px;
                        float left
                        margin-top 24px
                        margin-bottom 59px
                      .number
                        width:32px;
                        height:16px;
                        font-size:16px;
                        font-family:RobotoCondensed-Regular,RobotoCondensed;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:16px;
                        float left
                        margin 23px 8px 57px 2px
                      .icon
                        width:8px;
                        height:4px;
                        float left
                        background-image url('../assets/imgs/route2.png')
                        margin 29px 12px 15px 8px
                    .list
                      height 16px
                      .country
                        width 20px
                        height 13px
                        float left
                      .txt
                        width 32px
                        height 16px
                        float left
                        font-size:16px;
                        font-family:RobotoCondensed-Regular,RobotoCondensed;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        line-height:16px;
                        position static
                  .tel
                    display block
                    float right 
                    width:205px;
                    height:28px;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    color:rgba(204,204,204,1);
                    line-height:21px;
                    border-bottom 1px solid rgba(204,204,204,1)
                    margin-top 20px
                .pwd
                    width:45px;
                    height:17px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(51,51,51,1);
                    line-height:15px;
                    margin-left 48px
                .pass
                  display block
                  width:205px;
                  height:28px;
                  font-size:16px;
                  font-family:MicrosoftYaHei;
                  color:rgba(204,204,204,1);
                  line-height:21px;
                  margin-left 48px
                  margin-top 20px
                  border-bottom 1px solid rgba(204,204,204,1) 
                .captcha-txt
                  width:53px;
                  height:17px;
                  font-size:14px;
                  font-family:MicrosoftYaHei;
                  color:rgba(51,51,51,1);
                  line-height:15px;
                  margin-left 48px
                  margin-top 45px
                .captcha
                  height 33px
                  margin-top 16px
                  margin-left 48px
                  .captcha-left
                    margin-top 5px
                    float left
                    width:103px;
                    height:28px;
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    color:rgba(204,204,204,1);
                    line-height:21px;
                    margin-right 31px 
                  .captcha-right
                    float left
                    width:180px;
                    height:60px;
                .login-b
                  width:304px;
                  height:48px;
                  background:rgba(54,116,215,1);
                  border-radius:8px;
                  opacity:0.5;
                  margin 40px 48px 10px 48px
                .bottom
                  margin 0 49px 49px 48px
                  .sign
                    float left
                    width:63px;
                    height:17px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(54,116,215,1);
                    line-height:15px;
                  .forget
                    // cursor pointer
                    float right 
                    width:107px;
                    height:17px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(54,116,215,1);
                    line-height:15px;   
         
</style>