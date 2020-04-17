<template>
  <div class="transfer">
      <mineTop></mineTop>
       <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" label-position="left" class='form'>
         <FormItem label="收款账号" class='form-item'>
            <Input v-model="formLeft.input2" class='form-input' placeholder="手机号或邮箱"></Input>
        </FormItem>
        <FormItem label="转账金额" class='form-item'>
            <Input v-model="formLeft.input2" class='form-input'></Input>
        </FormItem>
        <FormItem label="付款备注" class='form-item'>
            <Input v-model="formLeft.input3" class='form-input' placeholder='仅在"账户明细"中显示'></Input>
        </FormItem>
        <FormItem class="form-item1">
            <div class="button" >转账</div>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import mineTop from '../components/mineTop'
export default {
    name:'transfer',
    components:{
      mineTop
    },
    data(){
      return {
         formLeft: {
                    input1: 'ewr',
                    input2: '',
                    input3: ''
                }
      }
    }

}

</script>
<style scoped lang='stylus'>
.transfer
  margin-left 308px
  margin-top 48px
  .form 
    margin-top 24px
    margin-left 15px
    .form-item 
      .form-input
        width:360px;
        height:36px;
        background:rgba(255,255,255,1);
    .form-item1
      margin-left 194px
      .button
        width:360px;
        height:48px;
        background:rgba(54,116,215,1);
        border-radius:4px;
        font-size:17px;
        font-family:PingFang-SC-Medium,PingFang-SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:48px;
        text-align center

</style>