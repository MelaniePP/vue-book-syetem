<template>
  <div class="link">
      <el-row>
          <el-col :span="22" :offset="1">
            <div class="selectButton-bg"><el-button class="selectButton-setting" size="medium" type="primary" @click="addform">新 增</el-button></div>
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="环节编号" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="所属业务模式"  align="center"></el-table-column>
              <el-table-column  prop="tmp" label="环节名称"  align="center"></el-table-column>
              <el-table-column  prop="experience" label="操作"  align="center">
                <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEdit(scope.row)">修改</el-button><span>|</span><el-button type="text" size="small" @click="handleEdit(scope.row)">删除</el-button>
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
            <!--模态框 -->
     <el-dialog
      title="环节配置"
      :visible.sync="showStudyState"
      width="40%"
      style="padding-bottom:40px"
      >
     <el-form ref="classManageData" :model="classManageData" label-width="80px">
         <el-form-item label="环节名称">
              <el-input v-model="classManageData.name"></el-input>
     </el-form-item>
     <el-form-item label="业务模式">
        <el-select v-model="classManageData.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
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
  title: '环节配置',
  name: 'link',
  inject: ['reload'],
  data() {
    return {
      // 输入问题
      inputContent: '',
      // 选项数据v-model
      value: '',
      // 表格数据
      tableData: [
        {
          className: '1',
          UMID: '车位贷',
          tmp: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          tmp: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          tmp: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          tmp: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          tmp: '开场白'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showStudyState:false,
      classManageData:{
        name:'',
        region:''
      }
    }
  },
  created() {
    //  console.log(this.$route.path.slice(6));
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    addform(){
      this.showStudyState = true;
    }

  }
}
</script>

<style scoped lang="less">
// @import "../assets/theme/home";
.link {
  .basestyle {
    overflow: hidden;
    background: white !important;
    margin-top: 27px;
    height: 130px;
    overflow: auto;
    color: #4d4d4d;
    font-size: 16px;
    border-radius: 2px;
    margin-left: 4.16667%;
    width: 91.66667%;
    .el-menu-item {
      margin-top: 40px;
      width: 25%;
      text-align: center;
    }
  }
  .block {
    text-align: center;
    background: white;
    height: 50px;
    padding-top: 20px;
  }
  .selectButton-bg {
    padding-top: 20px;
    padding-right: 20px;
    overflow: hidden;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .selectButton-setting {
    float: right;
  }
  .el-input{
    width: 70%;
  }
}
</style>

