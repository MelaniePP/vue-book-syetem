import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}
/** 
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      "name": 'login',
      component: resolve => require.ensure([], () => resolve(require('@/view/login')), 'login'),
      meta: {title: '登录', requireAuth: false}
    }, 
    {
      path: '/indexPage',
      "name": 'indexPage',
      component: resolve => require.ensure([], () => resolve(require('@/view/indexPage')), 'indexPage'),
      meta: {title: '首页', requireAuth: false}
    }, 
    {
      path: '/init',
      component: resolve => require.ensure([], () => resolve(require('@/view/init')), 'home'),
      meta: {title: '首页', requireAuth: false},
      "children":[
        {
          path: '/init/routerTraining',
          "name": 'routerTraining',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/routerTraining')), 'home'),
          meta: {title: '模拟训练', requireAuth: false}
        },
        {
          path: '/init/speech',
          "name": 'speech',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/SpeechLearning/speech')), 'home'),
          meta: {title: '话术学习', requireAuth: false}
        },
        {
          path: '/init/recording',
          "name": 'recording',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/SpeechLearning/recording')), 'home'),
          meta: {title: '录音学习', requireAuth: false}
        },
        {
          path: '/init/grade',
          "name": 'grade',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/StatisticalAnalysis/grade')), 'home'),
          meta: {title: '个人成绩', requireAuth: false}
        },
        {
          path: '/init/composition',
          "name": 'composition',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/StatisticalAnalysis/composition')), 'home'),
          meta: {title: '作业管理', requireAuth: false}
        },
        {
          path: '/init/record',
          "name": 'record',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/StatisticalAnalysis/record')), 'home'),
          meta: {title: '历史纪录', requireAuth: false}
        },
        {
          path: '/init/AgentOften',
          "name": 'AgentOften',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/StatisticalAnalysis/AgentOften')), 'home'),
          meta: {title: '新坐席时常', requireAuth: false}
        },
        {
          path: '/init/problem',
          "name": 'problem',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/BusinessScene/problem')), 'home'),
          meta: {title: '问题管理', requireAuth: false}
        },
        {
          path: '/init/ScenePreset',
          "name": 'ScenePreset',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/BusinessScene/ScenePreset')), 'home'),
          meta: {title: '场景预设', requireAuth: false}
        },
        {
          path: '/init/Scenes',
          "name": 'Scenes',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/BusinessScene/Scenes')), 'home'),
          meta: {title: '场景管理', requireAuth: false}
        },
        {
          path: '/init/User',
          "name": 'User',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/User/user')), 'home'),
          meta: {title: '用户管理', requireAuth: false}
        },
        {
          path: '/init/BaseField',
          "name": 'BaseField',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/Setting/BaseField')), 'home'),
          meta: {title: '基础字段设置', requireAuth: false}
        },
        {
          path: '/init/permission',
          "name": 'permission',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/Setting/permission')), 'home'),
          meta: {title: '权限管理', requireAuth: false}
        },
        {
          path: '/init/RecordingMaterial',
          "name": 'RecordingMaterial',
          component: resolve => require.ensure([], () => resolve(require('@/view/pages/Setting/RecordingMaterial')), 'home'),
          meta: {title: '录音资料管理', requireAuth: false}
        }
      ]
    }
  ]
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 * 路由拦截器
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
router.beforeEach((to, from, next) => {
  next()
})
/**
 * 路由输出
 */
export default router
