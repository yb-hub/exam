<template>
    <div>
      <Header headerTitle="wode"></Header>
      <Scroll class="wrapper">
        <div class="tree">
          <ul  v-for='item in menulist' :key="item.id">
            <!-- 没有子集 -->
            <li v-if='!item._child'>
              <div class="treeItem">
                {{item.catename}}
                <div class="liright">
                  <span :class="item.enabled_text == '启用'?'bgYes':'bgNo'">{{item.enabled_text}}</span>
                </div>
              </div>
            </li>
            <!-- 有子集 -->
            <li  v-if='item._child' >
              <div class="onechild treeItem" @click.stop='toggleChildren(item)'>
                {{item.expanded?'► ':'▼ '}}{{item.catename}}
                <div class="liright">
                  <span :class="item.enabled_text == '启用'?'bgYes':'bgNo'">{{item.enabled_text}}</span>
                </div>
              </div>
              <ul v-show='item.expanded' class="childs">
                <li v-for='child in item._child' :key="child.id">
                  <!-- 没有子集 -->
                  <div class="twochild treeItem marginL60" v-if="!child._child">{{child.catename}}
                    <div class="liright">
                      <span :class="child.enabled_text == '启用'?'bgYes':'bgNo'">{{child.enabled_text}}</span>
                    </div>
                  </div>
                  <!-- 有子集 -->
                  <div class="twochild marginL60" v-if="child._child"  @click='toggleChildren(child)'>
                    <div class="treeItem">
                      {{child.expanded?'► ':'▼'}}{{child.catename}}
                      <div class="liright">
                        <span :class="child.enabled_text == '启用'?'bgYes':'bgNo'">{{child.enabled_text}}</span>
                      </div>
                    </div>

                    <ul v-show='child.expanded'>
                      <!-- 遍历第三层 -->
                      <li class="threechild " v-for="child1 in child._child" :key="child1.id">
                        <div class="treeItem marginL60">
                          {{child1.catename}}
                          <div class="liright">
                            <span :class="child1.enabled_text == '启用'?'bgYes':'bgNo'">{{child1.enabled_text}}</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </Scroll>
    </div>
</template>

<script>
  import Header from '../common/Header'
  import Scroll from '../common/Scroll'
    export default {
        name: "wode",
      data(){
          return {
            menulist:[{
              catename:'水果',
              expanded:false,
              _child:[{
                catename:'苹果',
              },{
                catename:'荔枝'
              },{
                catename:'葡萄'
              },{
                catename:'火龙果',
                expanded:false,
                _child:[
                  {
                    catename:'白心',
                  },{
                    catename:'红心'
                  },
                ]

              }]
            }]

          }
      },
      components:{
        Header,
        Scroll,
      },
      methods:{
        // 切换展开收起
        toggleChildren: function(item) {
          // console.log(item)
          item.expanded = !item.expanded;
        },

      }
      // created(){
      //   this.$store.dispatch("changeHeaderTitle","我的")
      // }
    }
</script>

<style scoped>
  .wrapper{
    position: absolute;
    top:44px;
    bottom: 55px;
    left: 0px;
    right: 0px;
    overflow:hidden;
  }
</style>
