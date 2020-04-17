<template>
  <div class='record'>
      <div class="title">
        <svg-icon name="mine3" class="title-icon" ></svg-icon>
        <h4>全部记录</h4>  
      </div>
      <div class="center">
        <div class="center-top">
            <h4 class="time">时间</h4>
            <Row>
                  <DatePicker type="date" placeholder="Select date" class='left'></DatePicker>
                  <DatePicker type="date" placement="bottom-end" placeholder="Select date" class="left"></DatePicker>
            </Row>
        </div>
         <div class="center-bottom">
          <div>分类</div><div>全部</div><div>充值</div><div>提现</div><div>转账</div> 
        </div>
      </div>
      <Table height="1000" :columns="columns1" :data="data2"></Table>
  </div>
</template>

<script>
import '../../icons/mine3'
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
        }
    }
</script>
<style lang='stylus' scoped>
.record
  margin-left 308px
  .title
    margin-top 88px
    margin 14px
    height:30px;
    .title-icon
      float left 
      width:20px;
      height:18px;
      margin 7px 12px 5px 0
    h4 
      float left
      width:102px;
      height:30px;
      font-size:18px;
      font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
      font-weight:bold;
      color:rgba(98,105,127,1);
      line-height:30px;
  .center
    height:145px;
    background:rgba(245,246,250,1);
    .center-top
        height 28px
        margin-left 17px
      .time
        margin 21px 48px 0 0
        width:28px;
        height:19px;
        font-size:14px;
        font-family:MicrosoftYaHei;
        color:rgba(102,102,102,1);
        line-height:19px;
        margin-right 48px
        float left
      .left
        width 160px
        height 28px
        margin-right 21px
        margin-top 17px
        border-radius:4px;
        border:1px solid rgba(217,217,217,1)
        float left
    .center-bottom
      margin-left 17px
      height 19px
      &:nth-child(1)
        color:rgba(54,116,215,1);
      div 
        margin-top 19px
        width:28px;
        height:19px;
        font-size:14px;
        font-family:MicrosoftYaHei;
        line-height:19px;  
        float left
        margin-right 48px
        


</style>