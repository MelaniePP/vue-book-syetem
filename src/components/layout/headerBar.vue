<template>
<div>
  <div class='header flex'>
    <span class="span user_img"><img src="@/assets/img/touxiang.png"></span>
    <span class="span user_setting">系统设置</span>
    <span class="span user_outting">退出</span>
  </div>

</div>
</template>

<script>
  export default {
    // 组建的名称
    title: '头部组建',
    "name": 'headerBar',
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {},
    data() {
      return {}
    },
    // 初始化记载
    created() {
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {},
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
</style>
