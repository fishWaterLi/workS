<template>
<div>
    <div class="top">
           <div class="top-left">
                <div class="top-top">
                    <div class="icon"></div>
                    <div class="txt">账户资产</div>
                </div>
                <div class="top-bottom">
                        <div class="left">
                            <div class="top">$2333,0766.00</div>
                            <div class="bottom">≈¥2333,0766.00JPY</div>
                        </div>
                        <div class="right">USD</div>
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
            <div class="txt">充值</div> 
        </div>
        <!-- <div class="title">
            <div class="icon"></div> 
            <div class="txt">转账</div> 
        </div> -->
</div>
</template>

<script>

export default {
    name:'mineTop'
}
</script>
<style scoped lang='stylus'>
        .top
            height:170px;
            background:rgba(245,246,250,1);
            .top-left
                float left
                .top-top
                    .icon
                        float left
                        width:15px;
                        height:15px;
                        background:rgba(98,105,127,1);
                        margin 30px 8px 29px 16px
                    .txt
                        float left
                        width:60px;
                        height:18px;
                        font-size:14px;
                        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                        font-weight:bold;
                        color:rgba(98,105,127,1);
                        line-height:16px;
                        margin 28px 0
                .top-bottom
                    margin-left 16px
                    float left
                    .left
                        float left
                        .top
                            width:255px;
                            height:37px;
                            font-size:34px;
                            font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                            font-weight:bold;
                            color:rgba(0,0,0,1);
                            line-height:35px;
                            margin-bottom  13px
                        .bottom
                            width:152px;
                            height:18px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(102,102,102,1);
                            line-height:18px;
                    .right
                        float left
                        width:48px;
                        height:20px;
                        font-size:16px;
                        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                        font-weight:bold;
                        color:rgba(0,0,0,1);
                        line-height:20px; 
                        margin-top 15px      
            .top-right
                float right
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
            margin-top 16px       
            height:64px;
            background:rgba(245,246,250,1);
            .icon
                width:24px;
                height:18px;
                background:rgba(98,105,127,1);
                margin 23px 8px 23px 16px
                float left
            .txt
                margin 17px 0
                float left
                width:38px;
                height:30px;
                font-size:18px;
                font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                font-weight:bold;
                color:rgba(98,105,127,1);
                line-height:30px;
</style>