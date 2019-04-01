<template>
  <div class="trainingTalk">
    <!-- 聊天框 -->
    <div class="talk-box">
      <i class="talk-left-img"><img src="@/assets/img/touxiang.png"></i>
      <p class="talk-left">
        <span>喂,请问是哪位?</span>
        <span style = "margin-top:5%" >
              <span style = "float:left;margin-left:45%">2018-12-3</span>
              <span style = "float:right;margin-right:5%">16:11</span>
        </span>
      </p>
    </div>
    <!-- 录音弹窗 -->
      <el-popover
          title="录音"
          placement="top"
          width="160"
          v-model="visible"
          >
          <p>是否确定开始录音滴一声后结束录音，请注意录音语速是否现在开始?</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="show">确定</el-button>
          </div>
          <!-- 话筒 -->
          <el-button slot="reference" class="write-video" v-if="visible1"></el-button>
      </el-popover>
      <!-- 进度 -->
      <div class="process" v-if="processVisible">
          <el-progress type="circle" :percentage="procData>99?100:procData" style="margin-left:35%;margin-top:25%"></el-progress><br>
          <el-button type="primary" style="margin-left:30%;margin-top:10%" @click="returnZero()">复位</el-button>
          <el-button
              type="primary"
              v-if="procData===101"
              @click="openFullScreen"
              v-loading.fullscreen.lock="fullscreenLoading"
              style="margin-left:8%">提交</el-button>
          <el-button type="primary" v-if="count == 1" @click="stopTimer()" style="margin-left:8%">暂停</el-button>
          <el-button type="primary" v-if="procData!==101&&count!=1" @click="timer()" style="margin-left:8%">开始</el-button>
      </div>
      <!-- 成功提示 -->
      <div class="modelbox">
        <img src="@/assets/img/completed.png" alt="">
        提交成功，请前往“个人成绩”页面查看成绩
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: true,
      visible: false,
      processVisible: false,
      procData: 0,
      //定时器
      t: null,
      fullscreenLoading: false,
      stepIndex:3,
      count:-1
    }
  },
  methods: {
    show() {
      this.visible = false
      this.processVisible = true
      this.visible1 = false
    },
    timer() {
      // alert(1)
      console.log(this.procData)
      // let a = 0
      this.t = setInterval(() => {
        if (this.procData > 99) {
          // alert(1)
          clearInterval(this.t)
          // clearTimeout(this.t)
        }
        this.procData++
        // a++
      }, 100)
      this.count = 1
    },
    returnZero(){
      clearInterval(this.t)
      this.t = null
      this.count = -1
      this.procData = 0
    },
    stopTimer(){
        clearInterval(this.t)
        this.t = null
        this.count = -1
    },
    openFullScreen() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
      setTimeout(() => {
        document.querySelector('.modelbox').style.display = 'block'
      }, 2500)
      setTimeout(() => {
        this.$router.push({ name: 'grade' })
      }, 10000)

    }
    // getPath() {
    //   console.log(this.$route.path)
    // }
  },

  watch: {
    procData: {
      handler(newName, oldName) {
        // console.log(newName, oldName)
        if (newName === 101) {
          // this.$router.push({name: 'trainingTalk', params: { stepTmp: 3 }})
          // console.log(this.$router)
          let storage = window.localStorage
          let stepTmp = 3
          stepTmp = JSON.stringify(stepTmp)
          storage.setItem('stepTmp', stepTmp)
          this.count = -1
          // this.$emit('updata',this.stepIndex)
          // storage.getItem('stepTmp', stepTmp)
          // stepTmp = JSON.parse(stepTmp)
          // this.stepIndex = stepTmp
        }
      },
      deep: true,
      immediate: true
    }
    //监听路由跳转
    // $route: {
    //   handler: function(val, oldVal) {
    //     console.log(val)
    //     if(val.name==='trainingTalk'){
    //       let storage = window.localStorage
    //       let stepTmp = 2
    //       storage.setItem('stepTmp',stepTmp)
    //     }
    //   },
    //   // 深度观察监听
    //   deep: true,
    //   immediate: true
    // }
  },
  created() {},
  beforeDestroy() {
    clearInterval(this.t)
    this.t = null
  }
}
</script>

<style  scoped lang='less'>
// @import '../../../assets/theme/pageStyle/routerTraining';
.trainingTalk {
  margin-left: 4%;
  width: 91%;
  padding-top: 2%;
  position: relative;
  .talk-box {
    height: 500px;
    width: 400px;
    background: #fff;
    border: 2px solid #6666;
    position: relative;
    padding-left: 6%;
    box-sizing: border-box;
    .talk-left {
      margin-top: 4%;
      width: 80%;
      // height: 10%;
      border: 2px solid #6666;
      padding-left: 6%;
      padding-top: 4%;
      padding-bottom: 4%;
      font-size: 16px;
      overflow: hidden;
      // position: absolute;
    }
    .talk-left span {
      display: block;
    }
    .talk-left-img {
      position: absolute;
      top: 25px;
      left: 20px;
      width: 30px;
      height: 30px;
      background: pink;
      border-radius: 50%;
    }
  }
  .write-video {
    width: 150px;
    height: 150px;
    // background: pink;
    background: url('../../../assets/img/timg.jpg') no-repeat center center;
    position: absolute;
    top: 35%;
    right: 30%;
    text-align: center;
    line-height: 200px;
    font-size: 20px;
    border-radius: 50%
  }
  .process {
    background-color:rgba(255,255,255,0.3);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 15%;
    left: 45%;
    border-radius: 50%
  }
  .modelbox {
    position: fixed;
    top: 0px;
    left: 16%;
    width: 94%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    opacity: 0.8;
    z-index: 99999;
    display: none;
    font-size: 30px;
    text-align: center;
    line-height: 700px;
    img{
      position: absolute;
      // top:36%;
      top:300px;
      left: 20%;
      width: 110px;
    }
  }
}
</style>

