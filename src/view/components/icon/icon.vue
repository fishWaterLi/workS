<template>
<div class="icons">
    <div class="left"></div>
    <div class='icon' >
       <div class="img"></div>
    </div>
    <div class="right"></div>
 </div>
</template>

<script>
export default {
    name:'icon'

}

</script>
<style lang='stylus' scoped>
.icons
     height 48px
     position relative
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
    .icon
        width 62%
        margin 0 auto
        margin-top 59px
        .img
            width 194px
            height 48px
            background-image url('../../../assets/imgs/icon.png')
            background-repeat no-repeat
</style>