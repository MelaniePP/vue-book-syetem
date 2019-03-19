<template>
  <div class="home_flex">
    <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="6" :offset="0">时间：</el-col><el-col :span="6" :offset="0">录音标题：</el-col><el-col :span="6" :offset="0">班级类别：</el-col>
              </el-row>
              <!--查询  -->
              <div>
                <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
                  <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
                <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>

                <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="班级名称" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="UM账号"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="录音编号"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="录音标题"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
              <el-table-column  prop="updateTime" label="提交作业时间"  align="center"></el-table-column>
              <el-table-column prop="currentOperator" label="评分" filter-placement="bottom-end"  align="center"></el-table-column>
              <el-table-column  prop="experience" label="学习心得"  align="center">
                <template slot-scope="scope">
                  <el-button
                  size="mini"
                   :class="scope.row.score>0||scope.row.content1||scope.row.content2||scope.row.content3||scope.row.content4?'bt-statuschange':''"
                  @click="handleEdit(scope.$index, scope.row)">学习</el-button>

                <!-- <el-button type="text" size="small" @click="handleEdit(scope.row)">学习</el-button> -->
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
          v-model="tableData[index].score"
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
        <el-button type="primary" @click="showStudyState = false;submitTableData()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  title: '作业管理',
  name: 'composition',
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
          className: '续保',
          UMID: '100001',
          Number: '38',
          VideoTitle: '车位贷场景',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '3',
          content1: '',
          content2: '',
          content3: '',
          content4: '',
          score: 0
        },
        {
          className: '续保',
          UMID: '100001',
          Number: '38',
          VideoTitle: '车位贷场景',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '3',
          content1: '',
          content2: '',
          content3: '',
          content4: '',
          score: 0
        },
        {
          className: '续保',
          UMID: '100001',
          Number: '38',
          VideoTitle: '车位贷场景',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '3',
          content1: '',
          content2: '',
          content3: '',
          content4: '',
          score: 0
        },
        {
          className: '续保',
          UMID: '100001',
          Number: '38',
          VideoTitle: '车位贷场景',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '3',
          content1: '',
          content2: '',
          content3: '',
          content4: '',
          score: 0
        },
        {
          className: '续保',
          UMID: '100001',
          Number: '38',
          VideoTitle: '车位贷场景',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '3',
          content1: '',
          content2: '',
          content3: '',
          content4: '',
          score: 0
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showStudyState: false,
      value3: '',
      value4: '',
      index: 0
    }
  },
  created() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    handleEdit(index, rows) {
      console.log(rows)
      this.showStudyState = true
      this.index = index
    },
    submitTableData() {
      let storage = window.localStorage
      let composirionTableData = JSON.stringify(this.tableData)
      storage.setItem('composirionTableData', composirionTableData)
    },
    getTableData() {
      let storage = window.localStorage
      let composirionTableData = JSON.parse(
        storage.getItem('composirionTableData')
      )
      if(composirionTableData){
        this.tableData = composirionTableData
      }
      // console.log(tableData);
      // alert(1)
    }
  },
  created() {
    this.getTableData()
    // console.log(this.tableData)
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/home';
.bt-statuschange {
  background: #409eff;
  color: white;
}
</style>
