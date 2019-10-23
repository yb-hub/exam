<template>
    <div ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
      data(){
          return {
            scroll:null
          }
      },
      mounted(){
         this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:3,
            pullUpLoad:true,
           click:true
          })

        //使用probeType属性，监听滚动位置，0，1不监听，2监听（惯性的不监听），3惯性的也监听
        this.scroll.on('scroll',(position)=>{
          console.log(position);
        })

        this.scroll.on('pullingUp',()=>{
          console.log("上啦加载更多");
          this.scroll.finishPullUp();  //只有这里完成上拉加载，才能进行多次的上拉加载操作，否则只能加载一次
        })
      }
    }
</script>

<style scoped>

</style>
