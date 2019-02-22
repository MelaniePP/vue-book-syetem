<template>
  <div class='menuLeftBar'>
    <div class="logo flex"><div class="logo_txt">智能培训平台</div></div>
    <div class="nav">
      <el-menu :default-openeds="['0']">
        <el-menu-item index="0-1" @click="routerPage('首页')">首页</el-menu-item>
        <el-menu-item index="0" @click="routerPage('模拟训练')"><i class="el-icon-menu iconfont icon-kongzhi"></i>模拟训练</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu iconfont icon-maikefeng"></i>话术学习</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="routerPage('话术学习')">话术学习</el-menu-item>
            <el-menu-item index="1-2" @click="routerPage('录音学习')">录音学习</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu iconfont icon-tuceng"></i>统计分析</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="routerPage('个人成绩')">个人成绩</el-menu-item>
            <el-menu-item index="2-2" @click="routerPage('作业管理')">作业管理</el-menu-item>
            <el-menu-item index="2-3" @click="routerPage('历史纪录')">历史纪录</el-menu-item>
            <el-menu-item index="2-4" @click="routerPage('新坐席时常')">新坐席时常</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu iconfont icon-kuoyinqi"></i>业务场景</template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="routerPage('问题管理')">问题管理</el-menu-item>
            <el-menu-item index="3-2" @click="routerPage('场景管理')">场景管理</el-menu-item>
            <el-menu-item index="3-3" @click="routerPage('场景预设')">场景预设</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-menu iconfont icon-yonghu"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="4-1" @click="routerPage('用户管理')">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-menu iconfont icon-shezhi"></i>个人设置</template>
          <el-menu-item-group>
            <el-menu-item index="5-1" @click="routerPage('基础字段设置')">基础字段设置</el-menu-item>
            <el-menu-item index="5-2" @click="routerPage('权限管理')">权限管理</el-menu-item>
            <el-menu-item index="5-3" @click="routerPage('录音资料管理')">录音资料管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  // 数组操作
  import _ from 'lodash';
  // 路由配置文件
  export default {
    // 组建的名称
    title: '侧边菜单栏',
    "name": 'navLeftBar',
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {},
    data() {
      return {
        navIcon: '',
        activeNav: 0,
        activeSubNav: 0
      }
    },
    computed:{},
    // 初始化记载
    created() {
      let vue = this;
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      routerPage(page){
        if(page=='首页'){
          this.$router.push({name: 'indexPage'});
        }else if(page=='模拟训练'){
          this.$router.push({name: 'routerTraining'});
        }else if(page=='话术学习'){
          this.$router.push({name: 'speech'});
        }else if(page=='录音学习'){
          this.$router.push({name: 'recording'});
        }else if(page=='个人成绩'){
          this.$router.push({name: 'grade'});
        }else if(page=='作业管理'){
          this.$router.push({name: 'composition'});
        }else if(page=='历史纪录'){
          this.$router.push({name: 'record'});
        }else if(page=='新坐席时常'){
          this.$router.push({name: 'AgentOften'});
        }else if(page=='问题管理'){
          this.$router.push({name: 'problem'});
        }else if(page=='场景管理'){
          this.$router.push({name: 'Scenes'});
        }else if(page=='场景预设'){
          this.$router.push({name: 'ScenePreset'});
        }else if(page=='用户管理'){
          this.$router.push({name: 'User'});
        }else if(page=='基础字段设置'){
          this.$router.push({name: 'BaseField'});
        }else if(page=='权限管理'){
          this.$router.push({name: 'permission'});
        }else if(page=='录音资料管理'){
          this.$router.push({name: 'RecordingMaterial'});
        }
      },
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  @import "../../assets/fontFanmily/iconfont.css";
</style>
