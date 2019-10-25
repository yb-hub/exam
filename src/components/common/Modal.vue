<template>
  <div class="modal-mask" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <!-- 头部 -->
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <!-- 内容部分 -->
        <div class="modal-body">
          <span>起床</span>

        </div>

        <div class="modal-body">
          <span>吃饭</span>
        </div>

        <div class="modal-body">
          <span>集合</span>

        </div>

        <div class="modal-body">
          <span>加工车间</span>

        </div>
         底部
        <div class="modal-footer">
          <mt-button type="danger" @click="cancel">取消</mt-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Modal",
    // props:{
    //   value:{
    //     type:Boolean
    //   }
    // },
    data(){
      return {
        // value:false
      }
    },
    methods:{
      cancel(){
        this.$store.dispatch('closeModal')
      }
    }
  }
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 70%;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
    border-bottom: 1px solid #ddd;
  }

  span {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    width: 60%;
    vertical-align: middle;
  }

  label {
    width: 30%;
    display: inline-block;
    vertical-align: middle;
  }

  .modal-footer {
    text-align: center;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter, .modal-leave {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
