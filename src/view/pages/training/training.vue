<template>
  <div class="training">
      <el-row>
      <el-col :span="22" :offset="1">
            <!-- 标签 -->
          <div class="taphead" v-if = "visvibale" @mouseenter="enter(index)">
            <p class="sanjiaoup" v-if = "current1"></p>
            <p class="sanjiaodown" v-if = "current2"></p>
            <div class="basemsg" >
              <h1>基本信息</h1>
              <p>
                <span>场景名称</span>
                <span>难度级别</span>
                <span>训练时长</span>
              </p>
              <p>
                <span>车险营销</span>
                <span>中</span>
                <span>12分钟</span>

              </p>
            </div>
            <div class="desmsg">
              <h1>场景描述</h1>
              <p>对车险电销的场景进行模拟训练</p>
            </div>
          </div>

        <div class="grid-content">
          <!-- 第1页 -->
          <div v-if="0==indexPage" v-for="(item,index) in moudleData" :data-index="index" @mouseenter="enter(index)" @mouseleave="leave(index)" @click="next()"><span>{{item}}</span></div>
          <!-- 第2页 -->
          <div v-if="1==indexPage" v-for="(item,index) in moudleData" :data-index="index"  @mouseenter="enter(index)" @mouseleave="leave(index)" @click="next()">1222</div>
          <!-- 第3页 -->
          <div v-if="2==indexPage" v-for="(item,index) in moudleData" :data-index="index"  @mouseenter="enter(index)" @mouseleave="leave(index)" @click="next()">333</div>
        </div>
      </el-col>
    </el-row>
    <!-- 页面模块选择器 -->
     <!--  -->
    <el-row> <el-col :span="22" :offset="1" >
      <div class="module-select"> <span v-for="(item,index) in 3" @click="selectPage(index)" :class="index==indexPage?'selevtPonit':'borderriusPonit'"></span>
    </div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  // title: '模拟训练',
  // name: 'routerTraining',
  // inject: ['reload'],
  data() {
    return {
      // 进度条

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
      current2: false
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
       this.visvibale = false
    },
    next() {
      // alert(1)

      // this.stepIndex = 2 ,
      this.$router.push({ name: 'trainingTalk' })
    }
  },
  watch: {
    //  $route( to , from ){
    //    console.log( to , from )
    //     // to , from 分别表示从哪跳转到哪，都是一个对象
    //     // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
    //  },
  }
}
</script>

<style  scoped lang='less'>
@import '../../../assets/theme/pageStyle/routerTraining';
.taphead {
  width: 300px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  // opacity: 1;
  position: absolute;
  top: 50%;
  left: 8%;
  z-index: 999;
  padding: 20px 20px;
  box-sizing: border-box;
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
  border-color: transparent transparent rgba(0, 0, 0, 0.6); /*透明 透明  灰*/
  margin: 40px auto;
  z-index: 1000;
}
.sanjiaodown {
  // display: block;
  width: 0;
  height: 0;
  border-width: 20px 20px 0;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.6) transparent transparent; /*灰 透明 透明 */
  margin: 40px auto;
  position: absolute;
  top: 80%;
  right: 20%;
}
.basemsg,
.desmsg {
  p {
  display: flex;
  flex-flow: wrap;
  margin-top: 5%;
    span{
          flex: 0 0 30%;
    }
  }
}
.desmsg {
  margin-top: 5%;
}
</style>

