<template>
<!-- 充值 -->
 <div class="recharge">
       <mineTop> </mineTop>
        <!-- 充值方式 -->
        <div class="methods">
            <div class="methods-top">
                <div class="methods-top-left">充值方式</div>
                <div class="methods-top-right">
                    <div class="OMNI">
                        <div class="icon"></div>
                        <div class="txt">USDT-OMNI</div>
                    </div>
                    <div class="ERC">
                        <div class="icon"></div>
                        <div class="txt">USDT-ERC20</div>
                    </div>
                    <div class="BTC">
                        <div class="icon"></div>
                        <div class="txt">BTC</div>
                    </div>
                    <div class="ETH">
                        <div class="icon"></div>
                        <div class="txt">ETH</div>
                    </div>
                    <div class="VISA">
                        <div class="icon"></div>
                    </div>
                    <div class="Master">
                        <div class="icon"></div>
                    </div>
                    <div class="Card">
                        <div class="icon"></div>
                        <div class="txt">Card</div>
                    </div>
                </div>
            </div>
           <div class="divide"></div>   
           <div class="methods-bottom-top">
               <div class="icon"></div>
               <div class="txt"></div>
           </div>
           <div class="methods-bottom-b">
               <div class="icon"></div>
               <div class="txt">地址为限时动态地址，请在有效时间内完成充值</div>
           </div>
        </div>
        <Tabs value="name1">
            <TabPane label="充值账单" name="name1">
                 <Table height="200" :columns="columns1" :data="data2"></Table>
            </TabPane>
            <TabPane label="充值中" name="name2"> 
                <Table height="200" :columns="columns1" :data="data2"></Table>
            </TabPane>
            <TabPane label="成功" name="name3">
                <Table height="200" :columns="columns1" :data="data2"></Table>
            </TabPane>
            <TabPane label="失败" name="name4">
                <Table height="200" :columns="columns1" :data="data2"></Table>
             </TabPane>
        </Tabs>
  
</div>
 
</template>

<script>
import mineTop from '../components/mineTop'
 export default {
        data () {
            return {
                columns1: [
                    {
                        title: '类别',
                        key: 'name'
                    },
                    {
                        title: '订单时间',
                        key: 'age'
                    },
                    {
                        title: '名称|帐号|订单号',
                        key: 'address'
                    },
                    {
                        title: '金额|明细',
                        key: 'address'
                    },
                    {
                        title: '状态'
                    },
                    {
                        title: '备注',
                        key: 'address'
                    },
                    {
                        title: '操作',
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
           mineTop
        }
    }

</script>
<style lang='stylus' scoped>
    .recharge
        margin-left 308px
        margin-top 48px
        .methods
            margin-bottom 73px
            .methods-top 
                margin-top 27px
                height 32px
                .methods-top-left
                    width:59px;
                    height:17px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(102,102,102,1);
                    line-height:14px;
                    float left
                    margin 8px 80px 8px 16px
                .methods-top-right
                    height 32px
                    float left
                    .OMNI,.ERC,.ETH,.VISA,.Master,.Card,.BTC
                        float left
                        margin-right 24px
                        height:32px;
                        background:rgba(247,246,251,1);
                    .OMNI
                        width 148px
                        .icon
                            float left
                            width 22px 
                            height 18px
                            background-image url('../../assets/imgs/recharge2.png')
                            margin 7px 4px 7px 12px
                        .txt
                            margin 10px 9px 10px 0
                            width:101px;
                            height:13px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(34,34,34,1);
                            line-height:12px;
                            float left
                    .ERC
                        width 148px
                        .icon
                            width 22px 
                            height 18px
                            background-image url('../../assets/imgs/recharge1.png')
                            margin 7px 4px 7px 12px
                            float left
                        .txt
                            float left
                            margin 10px 8px 10px 0
                            width:102px;
                            height:13px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(34,34,34,1);
                            line-height:12px;
                    .BTC,.ETH
                        width 78px
                        .icon
                            width 18px
                            height 18px
                            float left
                            margin 7px 7px 7px 11px
                        .txt
                            margin 10px 5px 10px 0
                            width:37px;
                            height:12px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(34,34,34,1);
                            line-height:12px;
                            float left
                    .BTC
                        .icon
                            background-image url('../../assets/imgs/recharge6.png')
                    .ETH
                        .icon
                            background black
                    .VISA
                        width 58px
                        .icon
                            width 32px
                            height 11px
                            margin 10px auto
                            background-image url('../../assets/imgs/recharge4.png')
                    .Master
                        width 52px
                        .icon
                            width 30px
                            height 18px
                            margin 7px auto
                            background-image url('../../assets/imgs/recharge3.png')
                    .Card
                        width 93px
                        .icon
                            float left
                            width 19px
                            height 19px
                            margin 5px 6px 8px 12px
                            background-image url('../../assets/imgs/recharge5.png')
                        .txt
                            float left
                            width:37px;
                            height:18px;
                            font-size:16px;
                            font-family:MicrosoftYaHei;
                            color:rgba(34,34,34,1);
                            line-height:16px;
                            margin 7px 0
            .divide
                height:1px;
                background:rgba(235,235,235,1);
                margin-left 155px
                margin-top 43px
            .methods-bottom-top
                height 14px
                margin-top 25px
                margin-left 195px
                .icon
                    width:4px;
                    height:4px;
                    background:rgba(216,216,216,1);
                    border-radius 50%
                    float left
                    margin 7px 7px 5px 0
                .txt
                    width:342px;
                    height:14px;
                    background-image url('../../assets/imgs/recharge7.png')
                    background-repeat no-repeat
                    float left
            .methods-bottom-b
                height 14px
                margin-left 195px
                margin-top 14px
                .icon
                    margin 7px 7px 5px 0
                    width:4px;
                    height:4px;
                    background:rgba(216,216,216,1);
                    border-radius 50%
                    float left
                .txt
                    width:342px;
                    height:14px;
                    font-size:12px;
                    font-family:MicrosoftYaHei;
                    color:rgba(153,153,153,1);
                    line-height:14px;
                    float left
              
                




                
            
                            
               
          
                        
        
</style>