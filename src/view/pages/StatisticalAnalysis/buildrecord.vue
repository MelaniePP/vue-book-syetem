<template>
    <div class="buildrecord">
        <div class="checkscore">
          <span>分数查看</span>
          <el-button type="primary">音频下载</el-button>
        </div>
        <div class="left">
             <!-- 聊天框 -->

            <div class="talk-box">
                <div class="my">
                      <i class="talk-left-img"><img src="@/assets/img/touxiang.png"></i>
                      <p class="talk-left">
                        <span>喂,请问是哪位?</span>
                        <span style = "margin-top:5%" >
                              <span style = "float:left;margin-left:45%">2018-12-3</span>
                              <span style = "float:right;margin-right:5%">16:11</span>
                        </span>
                      </p>
                </div>
                <div class="worker">
                      <i class="talk-right-img"><img src="@/assets/img/touxiang.png"></i>
                      <p class="talk-right">
                        <span>另外换个地方可以更快的提升自己的成绩!</span>
                        <span style = "margin-top:5%" >
                              <span style = "float:left;margin-left:45%">2018-12-3</span>
                              <span style = "float:right;margin-right:5%">16:11</span>
                        </span>
                      </p>
                </div>
                <div class="worker">
                      <i class="talk-right-img"><img src="@/assets/img/touxiang.png"></i>
                      <p class="talk-right">
                        <span>建议可以试一下哦!</span>
                        <span style = "margin-top:5%" >
                              <span style = "float:left;margin-left:45%">2018-12-3</span>
                              <span style = "float:right;margin-right:5%">16:11</span>
                        </span>
                      </p>
                </div>
                <div class="worker">
                      <i class="talk-right-img"><img src="@/assets/img/touxiang.png"></i>
                      <p class="talk-right">
                        <span>真的可以试一下哦!</span>
                        <span style = "margin-top:5%" >
                              <span style = "float:left;margin-left:45%">2018-12-3</span>
                              <span style = "float:right;margin-right:5%">16:11</span>
                        </span>
                      </p>
                </div>
            </div>
        </div>
       <div class="right">
          <!-- 音频 -->
        <div class="video">
          <div class="audio-content"><audio src="" controls="controls"></audio></div>
          <span class="score">100</span>
        </div>

        <!-- 分数框 -->
        <div class="store">
           <el-row>
                <el-col :span="22" :offset="1">
                  <!-- 表格 -->
                  <el-table :data="tableData" height="330">
                    <el-table-column  prop="className" label="规则总数" align="center"></el-table-column>
                    <el-table-column  prop="UMID" label="通过"  align="center" ></el-table-column>
                    <el-table-column  prop="Number" label="未通过"  align="center"></el-table-column>
                    <el-table-column  prop="VideoTitle" label="语速"  align="center"></el-table-column>
                    <!-- <el-table-column label="评分" >
                      <template slot-scope="scope">
                        <el-rate v-model="scope.row.score"></el-rate>
                      </template>
                    </el-table-column> -->
                    <el-table-column  prop="updateTime" label="抢话"  align="center"></el-table-column>
                    <el-table-column prop="currentOperator" label="及时回应" filter-placement="bottom-end"  align="center"></el-table-column>
                  </el-table>
                  <!-- 分页 -->
                  <div class="block">
                    <el-pagination  background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
                    :page-sizes="[50, 100, 150, 200]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="500">
                    </el-pagination>
                  </div>
                </el-col>
          </el-row>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          className: '1',
          UMID: '1',
          Number: '0',
          VideoTitle: '正常',
          updateTime: '正常',
          currentOperator: '正常'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.buildrecord {
  margin-left: 4%;
  width: 91%;
  padding-top: 2%;
  position: relative;
  .checkscore {
    padding: 4% 0;
    height: 5%;
    background: #fff;
    font-size: 20px;
    font-weight: 900;
    position: relative;
    // width: 91%;
    // margin-left: 3%;
    span {
      position: absolute;
      top: 50%;
      left: 4%;
      transform: translateY(-50%);
    }
    button {
      position: absolute;
      top: 50%;
      right: 4%;
      transform: translateY(-50%);
    }
  }
  .talk-box {
    height: 500px;
    width: 400px;
    background: #fff;
    border: 2px solid #6666;
    position: relative;
    // left: 0px;
    padding-left: 16%;
    padding-right: 4%;
    box-sizing: border-box;

    .my{
      position: relative;
    }
    .worker{
      position: relative;
    }
    .talk-left,
    .talk-right {

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

    .talk-left span,
    .talk-right span {
      display: block;
    }
    .talk-left-img
     {
      position: absolute;
      top: 25px;
      left: -40px;
      width: 30px;
      height: 30px;
      background: pink;
      border-radius: 50%;
    }
    .talk-right-img{
      position: absolute;
      top: 20px;
      right: 2px;
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
    border-radius: 50%;
  }
  .process {
    background-color: rgba(255, 255, 255, 0.3);
    width: 400px;
    height: 400px;
    position: absolute;
    top: 15%;
    left: 45%;
    border-radius: 50%;
  }
  .store {
    position: absolute;
    top: 100%;
    right: -5%;
    // width: 50%;
    width: 110%;
  }
  .video {
    position: relative;
    // width: 60%;

    // right: -39%;
    .audio-content {
      border-radius: 2px;
      background: white;
      margin-top: 20px;
      border-bottom: 1px solid #ecf3f8;
      audio {
        background: #ecf3f8;
        width: 446px;
        height: 45px;
        background: rgba(236, 243, 248, 1);
        border: 1px solid rgba(255, 255, 255, 1);
        border-radius: 8px;
        margin: 20px 0 20px 45px;
      }
    }
    .score {
      font-size: 30px;
      color: red;
      position: absolute;
      top: 50%;
      right: 4%;
      transform: translateY(-50%)
    }
  }
  .left{
    position: absolute;
    left: 0px;
    top:110%;
    height: 100%;
    // width: 40%;
  }
  .right{
    position: absolute;
    right:0%;
    top: 110%;
    height: 100%;
    width: 65%;
    // width: 60%;
  }
  .block{
    background: #fff;
    padding-left:15%
  }
}
</style>

