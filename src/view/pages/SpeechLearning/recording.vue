<template>
  <div class="recording">
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="grid-content">
          <el-row class="selecTitle">
            <el-col :span="6" :offset="0">业务模式：</el-col><el-col :span="6" :offset="0">环节：</el-col><el-col :span="6" :offset="0">问题：</el-col>
          </el-row>
          <!--查询  -->
          <div>
            <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
            <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <!-- 录音 -->
        <div class="audio-content"><audio src="" controls="controls"></audio></div>
        <!-- 表格 -->
        <el-table :data="tableData" height="330">
          <el-table-column  prop="Number" label="编号"></el-table-column>
          <el-table-column  prop="title" label="标题"></el-table-column>
          <el-table-column  prop="time" label="拨打时间"></el-table-column>
          <el-table-column  prop="duration" label="时长"></el-table-column>
          <el-table-column label="评分" >
            <template slot-scope="scope">
              <el-rate v-model="scope.row.score"  disabled></el-rate>
            </template>
          </el-table-column>
          <el-table-column  prop="comments" label="评论次数"></el-table-column>
          <el-table-column prop="tag" label="标签" filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag disable-transitions>{{scope.row.label}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column  prop="experience" label="学习心得">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  :class="scope.row.score>0||scope.row.content1||scope.row.content2||scope.row.content3||scope.row.content4?'bt-statuschange':''"
                  @click="handleEdit(scope.$index, scope.row)">容易</el-button>
              </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="block">
          <el-pagination  background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
          :page-sizes="[50, 100, 150, 200]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="500">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

    <!-- 模态框 -->
    <el-dialog
      title="学习心得"
      :visible.sync="showStudyState"
      width="40%"
      >
      <div>

        <el-rate
          v-model="value3"
          show-text>
        </el-rate>
        <p style="margin-top:3%">该录音中好的三点：</p>
        <span>1-</span><el-input v-model="tableData[index].content1" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>2-</span><el-input v-model="tableData[index].content2" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>3-</span><el-input v-model="tableData[index].content3" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input>
        <p style="margin-top:3%">针对该录音中任意一点给出意见：</p>
        <el-input type="textarea" v-model="tableData[index].content4" style="width:90%;margin-top:3%"></el-input>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showStudyState = false">取 消</el-button>
        <el-button type="primary" @click="showStudyState = false;studyStatus()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  title: '录音学习',
  name: 'recording',
  inject: ['reload'],
  data() {
    return {
      // 输入问题
      inputContent: '',
      // 选项数据
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      // 选项数据v-model
      value: '',
      // 表格数据
      tableData: [
        {
          Number: '15',
          title: '经典场景',
          time: '2016-05-02',
          duration: '2016-05-02',
          score: 0,
          comments: '2',
          label: '师',
          content1: '',
          content2: '',
          content3: '',
          content4: ''
          // experience: '容易'
        },
        {
          Number: '25',
          title: '经典场景',
          time: '2016-05-02',
          duration: '2016-05-02',
          score: 0,
          comments: '2',
          label: '学',
          content1: '',
          content2: '',
          content3: '',
          content4: ''
          // experience: '容易'
        },
        {
          Number: '35',
          title: '经典场景',
          time: '2016-05-02',
          duration: '2016-05-02',
          score: 0,
          comments: '2',
          label: '学',
          content1: '',
          content2: '',
          content3: '',
          content4: ''
          // experience: '容易'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showStudyState: false,
      input1: '',
      input2: '',
      input3: '',
      value3: '',
      value4: '',
      value5: '',
      index: 0
    }
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleEdit(index, row) {
      console.log(index)
      console.log(row)
      this.showStudyState = true
      this.index = index
      if (row.score > 0) {
        this.value3 = row.score
      } else if (row.score === 0) {
        this.value3 = ''
      }
      // alert(1)
    },
    studyStatus() {
      // alert(1)
      console.log(this.index)
      this.tableData[this.index].score = this.value3
      this.value3 = 0
      this.input1 = ''
      this.input2 = ''
      this.input3 = ''
      this.value4 = ''
      let storage = window.localStorage
      let tableData =  JSON.stringify(this.tableData)
      storage.setItem('tableData',tableData)
    },
    getTableData(){
      let storage = window.localStorage
      let tableData =  JSON.parse(storage.getItem('tableData'))
      // console.log(tableData);
      if(tableData){
        this.tableData = tableData
      }
    }
  },
  created() {
    this.getTableData()
    // console.log(this.tableData)
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/recording';
.bt-statuschange {
  background: #409eff;
  color: white;
}
</style>

