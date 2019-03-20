<template>
  <div class='menuLeftBar'>
    <div class="logo flex"><div class="logo_txt">智能培训平台</div></div>
    <div class="nav">
      <el-menu
          unique-opened
          :default-active="url"
          router
          active-text-color = "#fff"
          >

        <el-menu-item index="0-1" @click="indexChange()">首页</el-menu-item>
        <!-- <el-menu-item index="0">

            <el-menu-item-group>
              <el-menu-item index="routerTraining"><i class="el-icon-menu iconfont icon-kongzhi"></i>模拟训练</el-menu-item>
            </el-menu-item-group>
        </el-menu-item> -->
        <el-menu-item index="0"  @click="training($event)" :class="url==='training'?'is-acitve1':''">
            <i class="el-icon-menu iconfont icon-kongzhi"></i>
            <span slot="title">模拟训练</span>
        </el-menu-item>
        <!-- <el-menu-item index="routerTraining">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
        </el-menu-item> -->
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu iconfont icon-maikefeng"></i>话术学习</template>
          <el-menu-item-group>
            <el-menu-item index="speech" >话术学习</el-menu-item>
            <el-menu-item index="recording" >录音学习</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu iconfont icon-tuceng"></i>统计分析</template>
          <el-menu-item-group>
            <el-menu-item index="grade">个人成绩</el-menu-item>
             <el-menu-item index="gradeclass" >班级成绩</el-menu-item>
            <el-menu-item index="composition" >作业管理</el-menu-item>
            <el-menu-item index="record">历史纪录</el-menu-item>
            <el-menu-item index="AgentOften" >新坐席时常</el-menu-item>
            <el-menu-item index="classManage">班级管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu iconfont icon-kuoyinqi"></i>业务场景</template>
          <el-menu-item-group>
            <el-menu-item index="problem">问题管理</el-menu-item>
            <el-menu-item index="Scenes" >场景管理</el-menu-item>
            <el-menu-item index="ScenePreset">场景预设</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-menu iconfont icon-yonghu"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="User" >用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-menu iconfont icon-shezhi"></i>个人设置</template>
          <el-menu-item-group>
            <el-menu-item index="BaseField" >基础字段设置</el-menu-item>
            <el-menu-item index="permission" >权限管理</el-menu-item>
            <el-menu-item index="RecordingMaterial">录音资料管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
// 数组操作
import _ from 'lodash'
// 路由配置文件
export default {
  // 组建的名称
  title: '侧边菜单栏',
  name: 'navLeftBar',
  // 组建刷新
  inject: ['reload'],
  // 挂在组建
  components: {},
  data() {
    return {

      url: 'training'
    }
  },
  computed: {},
  // 初始化记载
  created() {
    this.geturl()

  },
  // DOM加载完毕执行操作
  mounted() {},
  // 事件处理
  methods: {
    geturl() {
      this.url = this.$route.path.slice(6)
      // console.log(this.url)
    },
    indexChange() {
      this.$router.push({ name: 'indexPage' })
    },
    training(e) {

      let subUl = document.querySelectorAll('.el-submenu')
      let current = document.querySelector('.icon-kongzhi').parentElement

      if (this.$route.path.slice(6) === '0') {
        // alert(1)
        subUl.forEach((item, index) => {
          // console.log(item);


          item.classList.remove('is-opened','is-active')

        })
      }

      setTimeout(()=>{
          this.$router.push({ name: 'routerTraining' })

      },0)
    },
    delDrowBack() {}
  },
  watch: {
    $route: 'geturl'
  },
  // 离开路由的操作
  destroyed() {}
}
</script>

<style scoped lang='less'>
@import '../../assets/fontFanmily/iconfont.css';
.is-acitve1{
  color: #fff!important
}
</style>
