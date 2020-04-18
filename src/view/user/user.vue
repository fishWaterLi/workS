
<template>
<!-- 内页 -->
    <div class="layout">
            <Header class='header'>
                <Menu mode="horizontal" theme="dark" active-name="1" class='header-menu'>
                    <div class="layout-logo">
                        <div class="logo"></div>
                        <div class="website">WikiPay 官网</div>
                        <div class="divide"></div>
                        <Dropdown class='menu'>
                            <div class="country"></div>
                            <a href="javascript:void(0)" class="text">
                                <div class="text-l"> 简体中文</div>
                                 <div class="icon"></div>
                            </a>
                            <DropdownMenu slot="list" class="list">
                                <DropdownItem><div class="icon"></div>中国</DropdownItem>
                                <DropdownItem><div class="icon"></div>美国</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1" class="tidings">   
                              <div class="tidings-l">
                                  <!-- <img src="../../assets/imgs/tidings.png" alt=""> -->
                                  </div>
                             <div class="tidings-r">消息</div>
                        </MenuItem>
                        <div class="divide"></div>
                        <MenuItem name="2" class="names">
                           <div class="profile"></div>
                           <div class="name">李某某</div>
                        </MenuItem>
                        <div class="divide"></div>
                        <MenuItem name="3" class="out">
                          <div class="out-l"></div>
                          <div class="out-r">退出账号</div>
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
    <div class="left">
    <Menu  active-name="1-2" :open-names="['1']" style="width:268px;backgroundColor:rgba(245,246,250,1)">
                <Submenu name="1">
                    <template slot="title" >
                    <div class='title' @click="$router.push('/user')">
                        <div class="icon icon-one"></div>  
                        <div class="txt">我的资产</div> 
                    </div>
                    </template>
                     <div class="menu-item " @click="$router.push('/user/recharge')">
                        <div class="icon icon-f"></div>  
                        <div class="txt">充值</div> 
                    </div>
                    <div class="menu-item"  @click="$router.push('/user/cashOut')">
                        <div class="icon icon-s"></div>  
                        <div class="txt">提现</div> 
                    </div>
                     <div class="menu-item"  @click="$router.push('/user/transfer')">
                        <div class="icon icon-t"></div>  
                        <div class="txt">转账</div> 
                    </div> 
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <div class="title" @click="$router.push('/user/record')">
                            <div class="icon icon-two"></div>  
                            <div class="txt">全部记录</div> 
                        </div>
                    </template>
                    <div class="menu-item">
                        <div class="icon icon-forth" @click="$router.push('/user/record/rechargeRecord')"></div>  
                        <div class="txt1">充值记录</div> 
                    </div>
                    <div class="menu-item"  @click="$router.push('/user/record/cashOutRecord')">
                        <div class="icon icon-fifth"></div>  
                        <div class="txt1">提现记录</div> 
                    </div>
                    <div class="menu-item"  @click="$router.push('/user/record/transferRecord')">
                        <div class="icon icon-six"></div>  
                        <div class="txt1">转账记录</div> 
                    </div>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <div class="title" @click="$router.push('/user/mine')">
                            <div class="icon icon-three"></div>  
                            <div class="txt">个人信息</div> 
                        </div>
                    </template>
                    <div class="menu-item" @click="$router.push('/user/mine/safe')">
                        <div class="icon icon-seven"></div>  
                        <div class="txt1">安全设置</div> 
                    </div>
                    <div class="menu-item" @click="$router.push('/user/mine/information')">
                        <div class="icon icon-eight"></div>  
                        <div class="txt1">消息中心</div> 
                    </div>
                </Submenu>
            </Menu>
     </div>
    <router-view ></router-view>
</div>
</template>
<script>
    export default {
        name:'mine',
    }
</script>
<style scoped lang='stylus'>
.layout
    position: relative;
    overflow: hidden;
    .header
        height:40px;
        background:rgba(28,47,98,1);
        .header-menu
            height 40px
            background:rgba(28,47,98,1);
            .layout-logo
                height:40px;
                float: left;
                position: relative;
                margin-left 28px
                .logo
                    margin 8px 10px 7px 0
                    width:23px;
                    height:25px;
                    background-image url('../../assets/imgs/logo.png')
                    float left
                .website
                    width:92px;
                    height:17px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(255,255,255,1);
                    line-height:14px;
                    float left
                    margin  13px 0 10px 0
                .divide
                    width:1px;
                    height:14px;
                    background:rgba(255,255,255,1);
                    opacity:0.3;
                    float left
                    margin 14px 24px 12px 24px
                .menu
                    float left
                    .country 
                        width:20px;
                        height:13px;
                        background-image url('../../assets/imgs/country.png')
                        margin 14px 14px 13px 0
                        float left
                    .text
                        float left
                        .text-l
                            width:60px;
                            height:15px;
                            font-size:14px;
                            font-family:MicrosoftYaHei;
                            color:rgba(255,255,255,1);
                            line-height:14px;
                            float left
                            margin 13px 12px 12px 0
                        .icon
                            float left
                            width 8px
                            height 4px
                            background-image url('../../assets/imgs/route.png')
                            margin 19px 0 17px 0
            .layout-nav
                float right
                margin: 0 auto;
                margin-right: 23px;
                @media screen and (max-width:950px)
                    display none
                .divide
                    width:1px;
                    height:14px;
                    background:rgba(255,255,255,1);
                    opacity:0.3;
                    margin 13px 24px
                    float left
                .tidings
                    margin-top 13px
                    .tidings-l 
                        float left
                        margin-right 12px
                        width 13px
                        height 14px
                        background-image url('../../assets/imgs/tidings.png')
                    .tidings-r
                        float left
                        width:30px;
                        height:15px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:14px;
                .names
                    .profile
                        width 29px
                        height 28px
                        border-radius 50%
                        background-image url('../../assets/imgs/Bitmap.png')
                        margin 6px 0
                        float left
                    .name
                        float left
                        width:42px;
                        height:15px;
                        font-size:14px;
                        font-family:MicrosoftYaHei;
                        color:rgba(255,255,255,1);
                        line-height:14px;
                        margin 13px 0 12px 10px
                 .out
                    .out-l 
                        width 16px
                        height 15px
                        background-image url('../../assets/imgs/close.png')
                        margin 13px 11px 12px 0
                        float left
                    .out-r
                        width:83px;
                        height:14px;
                        font-size:14px;
                        font-family:PingFang-SC-Regular,PingFang-SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:14px;
                        margin 13px 0
    .left
        float left
        .title
            width:212px;
            height:64px;
            border-radius 8px
            &:hover
                background:rgba(54,116,215,1);
                box-shadow:0px 2px 12px 0px rgba(54,116,215,0.5);
                color white
                .icon 
                    background-color #fff
                .txt
                    color white
            .icon
                width 18px
                height 14px
                float left
                margin 26px 16px 24px 20px
                background-color #62697F 
            .icon-one 
                mask-image url('../../assets/imgs/mine5.svg')    
            .icon-two 
                mask-image url('../../assets/imgs/mine3.svg')
            .icon-three
                 mask-image url('../../assets/imgs/mine7.svg')
            .txt 
                margin 22px 94px 21px 0
                width:64px;
                height:21px;
                font-size:16px;
                font-family:MicrosoftYaHei;
                color:rgba(98,105,127,1);
                line-height:21px;
                float left
        .menu-item
            border-radius 8px
            width:212px;
            height:64px;
            margin 0px 28px 0 28px
            font-size:16px;
            font-family:MicrosoftYaHei;
            color:rgba(98,105,127,1);
            line-height:16px;
            &:hover
                background:rgba(54,116,215,1);
                box-shadow:0px 2px 12px 0px rgba(54,116,215,0.5);
                .icon
                    background-color white
                .txt
                    color white
                .txt1
                    color white
            .icon
                width 18px
                height 14px
                float left
                margin 26px 16px 24px 38px
                background-color #828AA4
            .icon-f
                mask-image url('../../assets/imgs/mine8.svg')
            .icon-s 
                mask-image url('../../assets/imgs/mine9.svg')
            .icon-t
                mask-image url('../../assets/imgs/mine10.svg')
            .icon-s 
                mask-image url('../../assets/imgs/mine9.svg')
            .icon-forth
                mask-image url('../../assets/imgs/mine8.svg')
            .icon-fifth 
                mask-image url('../../assets/imgs/mine9.svg')
            .icon-six
                mask-image url('../../assets/imgs/mine8.svg')
            .icon-seven 
                mask-image url('../../assets/imgs/mine9.svg')
            .txt
                margin 21px 108px 23px 0px
                width:32px;
                height:21px;
                line-height:21px;
                float left
            .txt1
                margin 21px 76px 23px 0px
                width:64px;
                height:21px;
                line-height:21px;
                float left
</style>
