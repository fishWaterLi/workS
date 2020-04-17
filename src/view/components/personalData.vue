<template>
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
    </div>
</template>

<script>
export default {
    name:'personalData'

}

</script>
<style scoped lang='stylus'>
        .information
            height 72px
            margin 48px 0 44px 40px
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
</style>