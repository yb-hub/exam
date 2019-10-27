<template>
    <div id="person-detail">
      <div class="person-img">
        <div>
          <img src="../../assets/images/avatar.jpg" alt="avatar" class="person-avatar">
        </div>
        <div class="person-name">
          <div>麻辣香锅不要辣</div>
          <div>学号：15143325</div>
        </div>
      </div>
      <div id ="item-list">
        <div>考试记录</div>
        <div>我的收藏</div>
        <div>我的错题</div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "PersonDetail"
    }
</script>


<style scoped>
  .person-img{
    height: 100px;
    padding: 20px;
    background-color:#ccc;
  }
  .person-avatar{
    width:80px;
    border-radius: 40px;
    float:left;
  }
  .person-name{
   float: left;
    margin-left: 30px;
    padding-top:30px;
  }
</style>
