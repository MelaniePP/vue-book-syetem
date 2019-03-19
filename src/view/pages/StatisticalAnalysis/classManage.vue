<template>
  <div class="classmanage">
    <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="9" :offset="0">使用期限：</el-col><el-col :span="6" :offset="0">班级类别：</el-col>
              </el-row>
              <!--查询  -->
              <div>
                <div class="block" style="float:left;margin-left:40px; padding-top:0px">
                  <!-- <span class="demonstration">起始日期时刻为 12:00:00</span> -->
                  <el-date-picker
                    v-model="value6"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                    >
                  </el-date-picker>
                </div>
                <el-select class="selectContent" v-model="value" filterable placeholder="请选择"  style="float:left">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>

               <p class="leftChange">
                  <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
                  <el-button class="selectButton" size="medium" type="primary" @click="addform()">新 建</el-button>
               </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="班级类别" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="班级名称"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="新坐席名称"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="UM账号"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
              <el-table-column  prop="currentOperator" label="老师姓名"  align="center"></el-table-column>
              <el-table-column prop="updateTime" label="生效时间" filter-placement="bottom-end"  align="center"></el-table-column>
              <el-table-column prop="deldateTime" label="失效时间" filter-placement="bottom-end"  align="center"></el-table-column>
              <el-table-column  prop="experience" label="操作"  align="center">
                <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEdit(scope.row)">删除</el-button>
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
    <!-- 新增班级模态框 -->
     <el-dialog
      title="班级配置"
      :visible.sync="showStudyState"
      width="40%"
      style="padding-bottom:40px"
      >
     <el-form ref="form" :model="classManageData" label-width="80px">
          <el-form-item label="班级名称">
            <el-input v-model="classManageData.name"></el-input>
          </el-form-item>

        <el-form-item label="使用期限">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="classManageData.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="classManageData.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="班级类别">
            <el-select v-model="classManageData.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

      <el-form-item label="导入学生">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      </el-form-item>
      <el-form-item style="text-align:right">
      <!-- <span slot="footer" > -->
        <el-button @click="showStudyState = false">取 消</el-button>
        <el-button type="primary" @click="showStudyState = false;studyStatus()">确 定</el-button>
      <!-- </span> -->
       </el-form-item>
      </el-form>
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
      //模态框数据
      classManageData:{
          name:'',
          date1:'',
          date2:'',
          region:'',
      },
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
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '10001',
          currentOperator: '吴昂武',
          updateTime: '2018-10-18 08:42:50',
          deldateTime: '2018-12-18 08:42:50'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '10001',
          currentOperator: '吴昂武',
          updateTime: '2018-10-18 08:42:50',
          deldateTime: '2018-12-18 08:42:50'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '10001',
          currentOperator: '吴昂武',
          updateTime: '2018-10-18 08:42:50',
          deldateTime: '2018-12-18 08:42:50'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '10001',
          currentOperator: '吴昂武',
          updateTime: '2018-10-18 08:42:50',
          deldateTime: '2018-12-18 08:42:50'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showStudyState:false,
      value6:'',
      value7:''
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
    addform(){
      this.showStudyState = true
    },
    studyStatus(){
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/classmanage';

</style>
