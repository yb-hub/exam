<template>
  <div id="list">
    <div v-for="(category,index) in categorys" :key="category.id">
      <div class="first-item">
        <span @click="show(index)"
              :class="showList[index] ? 'iconfont icon-arrow-down-' : 'iconfont icon-arrow-right-'"></span>
        <span @click="show(index)">{{category.name}}</span>
        <span class="iconfont icon-dingdan first-item-editor" @click="startTest(category.id)"></span>
      </div>
      <!--<ListItem :isShow="this.$store.state.showList[index]" :index="index"></ListItem>-->
      <div v-if="showList[index]">
        <div v-for="(son,index2) in category.sons" :key="son.id">
          <div class="second-item">
            <span @click="show2(index,index2)"
                  :class="showList2[index] != undefined&&showList2[index][index2] ? 'iconfont icon-arrow-down-' : 'iconfont icon-arrow-right-'"/>
            <span @click="show2(index,index2)"> {{son.name}}</span>
            <span class="iconfont icon-dingdan second-item-editor"></span>
          </div>
          <!--<ListItem :isShow="this.$store.state.showList2[index] != undefined&&this.$store.state.showList2[index][index2]"></ListItem>-->
          <div v-if="showList2[index] != undefined ? showList2[index][index2] : false">
            <div v-for="(grandSon,index3) in son.grandSon" :key="grandSon.id">
              <div class="third-item">
                <span class="iconfont icon-dingdan"></span>
                <span>{{grandSon.name}}</span>
                <span class="iconfont icon-dingdan third-item-editor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem'

  export default {
    name: "List",
    components: {
      ListItem,
    },
    data() {
      return {
        showList: [],
        showList2: [],
        categorys: [
          {
            id: 1,
            name: 'category1',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 2,
            name: 'category2',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 104,
                    name: 'grandSon'
                  },
                  {
                    id: 105,
                    name: 'grandSon'
                  },
                  {
                    id: 105,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 3,
            name: 'category3',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 4,
            name: 'category4',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 5,
            name: 'category5',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 6,
            name: 'category6',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
          {
            id: 7,
            name: 'category6',
            sons: [
              {
                id: 11,
                name: 'son1',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 12,
                name: 'son2',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
              {
                id: 13,
                name: 'son3',
                grandSon: [
                  {
                    id: 101,
                    name: 'grandSon'
                  },
                  {
                    id: 102,
                    name: 'grandSon'
                  },
                  {
                    id: 103,
                    name: 'grandSon'
                  }
                ]
              },
            ]
          },
        ]
      }
    },
    methods: {
      show(index) {
        console.log("index:" + index);
        console.log(this.showList);
        if (this.showList[index] != undefined) {
          this.$set(this.showList, index, !this.showList[index]);
          //this.showList.splice(index,1,!this.showList[index])
        } else {
          this.$set(this.showList, index, true)
          //this.showList.splice(index,1,true)
          //初始化showList2中的当前索引的数组
          this.$set(this.showList2, index, [])
        }
        console.log(this.showList[index]);
      },
      show2(index, index2) {
        if (this.showList2[index][index2] == undefined) {
          this.$set(this.showList2[index], index2, true)
        } else {
          this.$set(this.showList2[index], index2, !this.showList2[index][index2])
        }
      },
      startTest(categroyId){
        this.$router.push("/test")
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/list/down/iconfont.css";
  @import "../../assets/list/right/iconfont.css";
  @import "../../assets/list/editor/iconfont.css";

  #list {
    text-align: left;
    padding-left: 10px;
  }

  .first-item,.second-item,.third-item{
    height: 35px;
    line-height: 35px;
  }

  .first-item .first-item-editor,.second-item .second-item-editor,.third-item .third-item-editor {
    float: right;
    margin-right: 20px;
  }

  .second-item{
    padding-left:20px;
  }

  .third-item{
    padding-left: 40px;
  }
</style>
