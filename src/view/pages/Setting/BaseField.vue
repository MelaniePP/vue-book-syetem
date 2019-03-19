<template>
  <div class="basefield">
    <el-menu :default-active="this.$route.path.slice(6)" class="el-menu-demo basestyle" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="workModel">业务模式配置</el-menu-item>
      <el-menu-item index="link">环节配置</el-menu-item>
      <el-menu-item index="degress">难度系数配置</el-menu-item>
      <el-menu-item index="classtype">班级类别配置</el-menu-item>
    </el-menu>
    <div class="mt40">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  title: '基础字段设置',
  name: 'BaseField',
  inject: ['reload'],
  data() {
    return {}
  },
  created() {


  },
  method: {}
}
</script>

<style scoped lang="less">
// @import "../assets/theme/home";
.basefield {
  .basestyle {
    overflow: hidden;
    background: white!important;
    margin-top: 27px;
    height: 130px;
    overflow: auto;
    color: #4d4d4d;
    font-size: 16px;
    border-radius: 2px;
    margin-left: 4.16667%;
    width: 91.66667%;
    .el-menu-item {
      margin-top: 40px;
      width: 25%;
      text-align: center;
    }
  }
  .mt40{
    margin-top: 40px;
  }

}
</style>
