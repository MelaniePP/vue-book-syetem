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
    <router-view></router-view>

  </div>
</template>
<script>
export default {
  title: '模拟训练',
  name: 'routerTraining',
  inject: ['reload'],
  data() {
    return {
      // 进度条
      stepIndex: 1,
      // 页面选择
      indexPage: 0,
      moudleData: [
        '车险营销',
        '车险营销',
        '小雨新人培训',
        '平安新人培训',
        '车险测试2',
        '车险测试2'
      ],
      visvibale: false,
      left: 1,
      current1: true,
      current2: false,
      timer: null
      // storageStatus:''
    }
  },
  methods: {
    selectPage(index) {
      this.indexPage = index
    },
    enter(index) {
      this.visvibale = true
      // console.log(index)

      setTimeout(() => {
        let positionX = document.querySelector('.taphead')
        let width = document.querySelectorAll('.grid-content div')[0]
          .offsetWidth
        let height = document.querySelectorAll('.grid-content div')[0]
          .offsetHeight
        // let afterStyle = window.getComputedStyle(positionX, ":after");
        // console.log(afterStyle)

        // let height = document.querySelectorAll('.grid-content div')[0].offsetHeight
        // console.log(width);
        // console.log(height)

        if (index < 3) {
          this.left = 120 + width * index
          positionX.style.left = this.left + 'px'
          positionX.style.top = height + 'px'
          this.current1 = true
          this.current2 = false
        } else {
          // this.current = 180
          this.left = 120 + width * (index - 3)
          positionX.style.top = 100 + 'px'
          positionX.style.left = this.left + 'px'
          this.current1 = false
          this.current2 = true
        }
      }, 0)
    },
    leave(index) {
      //  this.visvibale = false
    },
    next() {
      // alert(1)
    },
    getStorage() {
      this.timer = setInterval(() => {
        // if (this.stepIndex === 3) {
        //   clearInterval(this.timer)
        // }
        let storage = window.localStorage
        // storage.getItem('stepTmp')
        this.stepIndex = JSON.parse(storage.getItem('stepTmp'))
        if (this.stepIndex === 3) {
          clearInterval(this.timer)
        }
        // console.log(this.stepIndex)
      }, 1000)
    }
  },
  created() {
    this.getStorage()
    // console.log(this.GetQueryString())
  },
  mounted() {},
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // console.log(oldVal)
        // console.log(val)

        if (val.name === 'trainingTalk') {
          let storage = window.localStorage
          let stepTmp = 2
          stepTmp = JSON.stringify(stepTmp)
          storage.setItem('stepTmp', stepTmp)
          storage.getItem('stepTmp', stepTmp)
          stepTmp = JSON.parse(stepTmp)
          this.stepIndex = stepTmp
          // console.log(this.stepIndex)
        }
        if (val.name === 'training') {
          let storage = window.localStorage
          let stepTmp = 1
          stepTmp = JSON.stringify(stepTmp)
          storage.setItem('stepTmp', stepTmp)
          storage.getItem('stepTmp', stepTmp)
          stepTmp = JSON.parse(stepTmp)
          this.stepIndex = stepTmp
          // console.log(this.stepIndex)
        }
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
    // storageStatus:{
    //      handler: function(val, oldVal) {
    //        console.log(val,oldVal)
    //      }
    // }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/theme/pageStyle/routerTraining';
.taphead {
  width: 300px;
  height: 200px;
  background: pink;
  position: absolute;
  top: 50%;
  left: 8%;
  z-index: 999;
}
// .taphead::after {
//   content: '';
//   display: block;
//   position: absolute;
//   top: -28%;
//   right: 13%;
//   width: 0;
//   height: 0;
//   border-width: 0 20px 20px;
//   border-style: solid;
//   border-color: transparent transparent pink; /*透明 透明  灰*/
//   margin: 40px auto;

// }
.sanjiaoup {
  // display: block;
  position: absolute;
  top: -30%;
  right: 20%;
  width: 0;
  height: 0;
  border-width: 0px 20px 20px;
  border-style: solid;
  border-color: transparent transparent pink; /*透明 透明  灰*/
  margin: 40px auto;
  z-index: 1000;
}
.sanjiaodown {
  // display: block;
  width: 0;
  height: 0;
  border-width: 20px 20px 0;
  border-style: solid;
  border-color: pink transparent transparent; /*灰 透明 透明 */
  margin: 40px auto;
  position: absolute;
  top: 79%;
  right: 20%;
}
// .taphead::before {
//   content: '';
//   display: block;
//   position: absolute;
//   top: -77%;
//   right: -35%;
//   width: 0;
//   height: 0;
//   border-width: 20px 20px 0px;
//   border-style: solid;
//   border-color: transparent transparent pink; /*透明 透明  灰*/
//   margin: 40px auto;
//   z-index: 1000;
//   }
</style>
