<template>
<div class="headers">
  <div id="left"></div>
  <div class='header'>
          <div class="header-left">WikiPay App</div>
           <div class="header-right">
                    <div class='website' >WikiPay官网</div>
                    <span></span>
                    <Dropdown class='language'>
                    <img src="../../../assets/imgs/country.png" alt="" class="country-img"><a href="javascript:void(0)" class='language-r'>简体中文 </a>
                    <div class="icon"></div> 
                    <DropdownMenu slot="list" >
                        <DropdownItem >  
                            <img src="../../../assets/imgs/country.png" alt="">中文 
                        </DropdownItem>
                        <DropdownItem  > 
                            <img src="../../../assets/imgs/country.png" alt="">中文 
                        </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>  
        </div>
  <div id="right"></div>
</div>
</template>

<script>
export default {
    name:'headers'

}

</script>
<style lang='stylus' scoped>
.headers
   background:rgba(4,14,42,1);
   height:28px;
  #left 
    position: absolute; 
    top: 0; 
    left: 0;
    width: 19%;
  #right 
      position: absolute; 
      top: 0; 
      right: 0; 
      width: 19%;
 .header
        width 62%
        margin 0 auto
        height:28px;
        .header-left
          float left
          cursor pointer
          width:91px;
          height:14px;
          font-size:14px;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          line-height:14px;
          margin 6px 0 8px 0
       .header-right
          float right 
          height 28px
          .website
            margin 6px 0 8px 0
            float left
            width:87px;
            height:14px;
            font-size:14px;
            font-family:MicrosoftYaHei;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:14px;
          span 
            margin 7px 24px
            float left
            display block
            width:1px;
            height:14px;
            background:rgba(255,255,255,1);
            opacity:0.3;
          .language
            float left
            width 110px
            height 28px
            .country-img
              margin 7px 15px 8px 0
              display block
              width:20px;
              height:13px;
              float left
            .language-r
              float left
              display block
              width:60px;
              height:14px;
              font-size:14px;
              font-family:MicrosoftYaHei;
              font-weight:400;
              color:rgba(255,255,255,1);
              line-height:14px;
              margin 6px 12px 8px 0
            .icon
              width 8px
              height 4px
              background-image url('./images/route.png')
              margin -15px 0
              float right 
</style>