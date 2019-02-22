<template>
  <div id='init' class="flex" ref="initBar">
    <menuBar class="leftBar" ref="leftBar"></menuBar>
    <div class="rightBar" :style="rightBar">
      <headerBar class="header"></headerBar>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>
<script>
  import headerBar from '../components/layout/headerBar'
  import menuBar from '../components/layout/navLeftBar'
  export default {
    // 组建的名称
    title: '子路由加载组建',
    "name": 'init',
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {headerBar, menuBar},
    data() {
      return {
        rightBar: null
      }
    },
    computed : {

    },
    // 初始化记载
    created() {
      let vue = this;
    },
    // DOM加载完毕执行操作
    mounted() {
      //this.initStyle()
    },
    // 事件处理
    methods: {
      initStyle () {
        let vue = this;
      // 动态样式计算
        vue.$nextTick( () =>{
          const init = vue.$refs.initBar.clientWidth;
          const leftBar = vue.$refs.leftBar.$el.clientWidth;
          vue.rightBar = {
            border: '1px solid red',
            width: init-leftBar-8 + 'px'
          }
        })
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>

</style>
