<template>
  <div class="right">
        <personalData></personalData>
        <div class="center">
            <div class="center-top">
                   <div class="icon"></div>
                    <div class="txt">我的资产</div>
                   <div class="txt-r">隐藏资产</div>
                           <div class="button">
                             <div class="txt">激活Visa卡，转入WikiPay获得更多收益</div>  
                            </div>
                       </div>
                       <div class="center-bottom">
                           <div class="c-bl">
                               <div class="left">
                                   <div class="top">$2333,0766.00</div>
                                   <div class="bottom">≈¥2333,0766.00JPY</div>
                               </div>
                               <div class="right">USD</div>
                           </div>
                           <div class="c-br">
                               <div class="left">
                                   <div class="icon"></div>
                                   <div class="txt">昨日收益:</div>
                                   <div class="num">+$3.22</div>
                                   <div class="usd">USD</div>
                               </div>
                               <div class="right">
                                   <div class="icon"></div>
                                   <div class="txt">七日年化收益率：1.50% </div>
                               </div>
                           </div>
                       </div>
                   </div>
         <ul class="tabs">
            <li class='first'>最近记录</li>
            <li class="second">充值</li>
            <li class="third">提现</li>
            <li class="forth">转账</li>
        </ul>
           <Table height="200" :columns="columns1" :data="data2"></Table>
    </div>
</template>

<script>
import personalData from '../components/personalData'
export default {
       data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        components:{
            personalData
        }

}

</script>
<style lang='stylus' scoped>
    .right
        margin-left 268px
        .center
            margin-left 40px
            height 251px
            .center-top
                height:64px;
                background:rgba(245,246,250,1);
                .icon
                    width:23px;
                    height:18px;
                    background:rgba(98,105,127,1);
                    float left
                    margin 23px 6px 23px 16px
                .txt
                    margin 17px 33px 17px 0
                    width:72px;
                    height:30px;
                    font-size:18px;
                    font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                    font-weight:bold;
                    color:rgba(98,105,127,1);
                    line-height:30px;
                    float left
                .txt-r
                    margin 23px 0 22px 0
                    width:62px;
                    height:19px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(54,116,215,1);
                    line-height:19px;
                    float left
                .button
                    margin 14px 23px 13px 0
                    float right
                    width:272px;
                    height:37px;
                    background:rgba(54,116,215,1);
                    border-radius:4px;
                    .txt
                        margin 6px 11px 7px 12px
                        width:255px;
                        height:24px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:24px;
            .center-bottom
                height 187px
                .c-bl
                    float left 
                    margin 43px 0 72px 16px
                    .left
                        float left
                        .top
                            width:308px;
                            height:37px;
                            font-size:40px;
                            font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                            font-weight:bold;
                            color:rgba(28,47,98,1);
                            line-height:35px;
                            margin-bottom 20px    
                        .bottom
                            width:177px;
                            height:15px;
                            font-size:18px;
                            font-family:MicrosoftYaHei;
                            color:rgba(28,47,98,1);
                            line-height:14px;
                    .right
                        float left
                        width:56px;
                        height:37px;
                        font-size:24px;
                        font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                        font-weight:bold;
                        color:rgba(44,53,76,1);
                        line-height:35px; 
                        margin-top 9px
                        margin-left -8px
                .c-br
                    margin-right 23px
                    float right 
                    .left
                        float left
                        margin-right 86px
                        .icon
                            float left
                            background-image url('../../assets/imgs/wallet.png')
                            width 26px
                            height 26px
                            margin 66px 17px 95px 0
                        .txt
                            margin 71px 1px 100px 0
                            float left
                            width:64px;
                            height:16px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(51,51,51,1);
                            line-height:14px;
                        .num
                            margin 71px 0 100px 0
                            float left
                            width:47px;
                            height:16px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(255,115,58,1);
                            line-height:14px;
                        .usd
                            margin 71px 0 100px 2px
                            float left
                            width:33px;
                            height:16px;
                            font-size:12px;
                            font-family:MicrosoftYaHei;
                            color:rgba(51,51,51,1);
                            line-height:14px;
                    .right
                        float right
                        .icon
                            float left
                            width:26px;
                            height:26px;
                            background-image url('../../assets/imgs/rate.png')
                            margin 66px 17px 95px 0
                        .txt
                            float left
                            width:160px;
                            height:16px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(51,51,51,1);
                            line-height:14px;
                            margin 71px 0 100px 0
        .tabs
            height:64px;
            background:rgba(245,246,250,1);
        .first
            width:64px;
            height:21px;
            font-size:16px;
            font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:21px;
            float left
            margin 23px 0 20px 16px
        .second
            margin 24px 84px 19px 96px
            width:32px;
            height:21px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            line-height:21px;
            float left
        .third
            margin 24px 84px 19px 0
            width:32px;
            height:21px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            line-height:21px;
            float left
        .forth
            margin 24px 0 19px 0
            width:32px;
            height:21px;
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(102,102,102,1);
            line-height:21px;
            float left
</style>