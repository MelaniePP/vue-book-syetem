<template>
  <div class='indexPage'>
    <div class="pageTop">
      <!-- <span class="headerLoge">智能云平台</span> -->
      <headerBar class="header"></headerBar>
    </div>
    <div class="pageTitle">智能云平台</div>
    <el-row :gutter="8">
      <el-col :span="4" :offset="item.offset" v-for="(item,index) in dataImg" :key="index">
        <div class="grid-content bg-purple-dark labelBG" @click="jumpPage(index)" :class="lastIndex.indexOf(index)!==-1 ? 'lastLabel':'labelBG'">
          <i :style="{'background':'url('+item.img+')no-repeat center top'}"></i>
          <span>{{item.name}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import headerBar from '../components/layout/headerBar'
  export default {
    // 组建的名称
    title: '首页',
    name: 'indexPage',
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {},
    data() {
      return {
        lastIndex:[],
        dataImg: [
          {img:require('../assets/img/mnxl.png'),name:"模拟训练",offset:4},
          {img:require('../assets/img/hs.png'),name:"话术学习",offset:0},
          {img:require('../assets/img/tj.png'),name:"统计分析",offset:0},
          {img:require('../assets/img/yw.png'),name:"业务场景",offset:0},
          {img:require('../assets/img/yh.png'),name:"用户管理",offset:4},
          {img:require('../assets/img/sz.png'),name:"系统设置",offset:0},
          {img:require('../assets/img/add.png'),name:"新增模块",offset:0},
        ],
      }
    },
    methods: {
      jumpPage(index){
        if(index==0){
          this.$router.push({name: 'routerTraining'});
        }else if(index==1){
          this.$router.push({name: 'speech'});
        }else if(index==2){
          this.$router.push({name: 'grade'});
        }else if(index==3){
          this.$router.push({name: 'problem'});
        }else if(index==4){
          this.$router.push({name: 'User'});
        }else if(index==5){
          this.$router.push({name: 'BaseField'});
        }
      }
    },
    components: {headerBar},
    created(){
      let _this = this;
      // 最后一个模块隐藏
      this.dataImg.map(function(item,index){
        if(item.name==''){
          // _this.lastIndex = index
          _this.lastIndex.push(index)
          console.log(_this.lastIndex)
        }
      })
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style lang="less">
  @import "../assets/theme/indexPage.less";
</style>
