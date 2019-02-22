<template>
  <div class="routerTraining">
    <el-row :gutter="0">
      <el-col :span="22" :offset="1">
        <el-steps class="stepBar" :active="stepIndex" align-center>
          <el-step title="场景选择"></el-step>
          <el-step title="模拟训练"></el-step>
          <el-step title="训练结束"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="grid-content">
          <!-- 第1页 -->
          <div v-if="0==indexPage" v-for="(item,index) in moudleData">{{item}}</div>
          <!-- 第2页 -->
          <div v-if="1==indexPage" v-for="(item,index) in moudleData">1222</div>
          <!-- 第3页 -->
          <div v-if="2==indexPage" v-for="(item,index) in moudleData">333</div>
        </div>
      </el-col>
    </el-row>
    <!-- 页面模块选择器 -->
     <!--  -->
    <el-row> <el-col :span="22" :offset="1" >
      <div class="module-select"> <span v-for="(item,index) in 3" @click="selectPage(index)" :class="index==indexPage?'selevtPonit':'borderriusPonit'"></span>
    </div></el-col> </el-row>
  </div>
</template>
<script>
export default {
  title: '模拟训练',
  "name": "routerTraining",
  inject: ['reload'],
  data () {
    return {
      // 进度条
      stepIndex:1,
      // 页面选择
      indexPage:0,
      moudleData:["车险营销","车险营销","小雨新人培训","平安新人培训","车险测试2","车险测试2","平安新人培训","车险测试2","车险测试2"]
    }
  },
  methods:{
    selectPage(index){
      this.indexPage = index;
    }
  },
  created() {
  },

}
</script>

<style scoped lang="less">
  @import "../../assets/theme/pageStyle/routerTraining";
</style>
