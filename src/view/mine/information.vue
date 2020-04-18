<template>
<div class="layout">
 <div class="information">
                <div class="profile"></div>
                <div class="information-c">
                        <div class="text">
                            <h3>早上好，春春华(*春春华)</h3>
                            <h5>转账看头像，安全有保障</h5>
                        </div>
                        <div class="account">
                            <div class="account-l">
                            <div class="icon"></div> 
                                    <div class="txt">手机账户:180***8888</div> 
                            </div>
                            <div class="account-r">
                                <div class="icon"></div> 
                                    <div class="txt">邮箱账户:27***373@qq.com</div> 
                                </div>
                            </div>
                </div>
                <div class="top-right">
                        <div class="recharge">
                            <div class="icon"></div>
                            <div class="txt">充值</div>
                        </div>
                        <div class="transfer">
                            <div class="icon"></div>
                            <div class="txt">转账</div>
                        </div>
                        <div class="cash-out">
                            <div class="icon"></div>
                            <div class="txt">提现</div>
                        </div>
            </div>
        </div>
        <div class="title">
            <div class="icon"></div> 
            <div class="txt">个人设置</div> 
        </div>
</div>
</template>

<script>
// import personalData from '../components/personalData'
export default {
  

}

</script>
<style lang='stylus' scoped>
.layout
    margin-left 368px
    .information
            height 72px
            margin 48px 0 44px 0
            float left
            .profile
                width:72px;
                height:72px;
                background:rgba(216,216,216,1);
                border-radius:8px;
                float left
                margin-right 24px
            .information-c
                float left
                .text
                    h3
                        width:207px;
                        height:24px;
                        font-size:18px;
                        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                        line-height:20px; 
                        float left
                        margin-bottom 15px
                    h5
                        width:184px;
                        height:18px;
                        font-size:13px;
                        font-family:MicrosoftYaHei;
                        color:rgba(153,153,153,1);
                        line-height:18px;
                        float left
                        margin 4px 0 17px 12px
                .account 
                    .account-l,.account-r 
                        height:32px;
                        background:rgba(240,244,255,1);
                        border-radius:4px;
                    .account-l
                        width 185px
                        float left
                        margin 15px 27px 0 0
                        .icon
                            width 9px
                            height 14px
                            background white
                            float left
                            margin 9px 8px 9px 16px
                        .txt
                            margin 6px 16px 6px 0
                            width:136px;
                            height:20px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(54,116,215,1);
                            line-height:18px;
                            float left
                    .account-r 
                        float left
                        width:242px;
                        margin-top 17px
                        .icon
                            margin 10px 8px 10px 16px
                            width 15px
                            height 12px
                            background white
                            float left
                        .txt
                            margin 6px 16px 9px 0
                            float left
                            width:187px;
                            height:17px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(54,116,215,1);
                            line-height:18px;
            .top-right
                    margin-left 120px
                    margin-top -29px
                    float right
                    height 38px
                    & > div
                        width:94px;
                        height:38px;
                        border-radius:4px;
                        opacity:0.49;
                        border:1px solid rgba(54,116,215,1);
                        float left
                        margin-top 66px
                        margin-right 24px
                        .txt
                            width 32px
                            height:16px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(54,116,215,1);
                            line-height:16px;
                            float left
                            margin 11px 0
                        .icon
                            margin 12px 8px 12px 17px
                    .recharge
                        .icon
                            float left
                            width:20px;
                            height:14px;
                            background:rgba(54,116,215,1);                     
                    .transfer
                        .icon
                            width:22px;
                            height:16px;
                            background:rgba(54,116,215,1);
                            float left
                    .cash-out
                        .icon
                            width:22px;
                            height:16px;
                            background:rgba(54,116,215,1);
                            float left   
    .title       
        height:64px;
        // background:rgba(245,246,250,1);
        .icon
            width:24px;
            height:18px;
            background:rgba(98,105,127,1);
            margin 23px 8px 23px 16px
            float left
        .txt
            margin 17px 0
            float left
            width:72px;
            height:30px;
            font-size:18px;
            font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
            font-weight:bold;
            color:rgba(98,105,127,1);
            line-height:30px;  

</style>