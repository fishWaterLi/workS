<template>
  <div>
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
     </div>
</template>

<script>
export default {
    name:'downloadVersion'

}

</script>
<style lang='stylus' scoped>
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
                  .apple
                    float left
                    width 34px
                    height 38px
                    margin 5px 0px 5px 40px
                    background-image url('../../assets/imgs/apple.svg') 
                    background-repeat no-repeat
                    background-position 50% 50%
                    background-color white
                    &:hover
                      background-color white
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
                  .robot 
                    float left
                    width 34px;
                    height 37px
                    margin 6px 0px 5px 21px
                    background-image url('../../assets/imgs/robot.svg') 
                    background-repeat no-repeat
                    background-position 50% 50%
                    &:hover
                      background-color white
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
                  .group
                    float left
                    width:17px;
                    height:18px;
                    background-image url('../../assets/imgs/group.png')
                    box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5); 
                    margin 15px 0 15px 43px
                    &:hover
                      background-color white
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
                  // box-sizing border-box
                  width 159px;
                  height:48px;
                  box-shadow:0px 2px 4px 0px rgba(0,0,0,0.5);
                  border-radius:24px;
                  border:1px solid rgba(255,255,255,1);
                  float right
                  .code
                     width 30px
                     height 30px
                     background-image url('../../assets/imgs/erwei.png')
                     margin 9px 65px 

</style>