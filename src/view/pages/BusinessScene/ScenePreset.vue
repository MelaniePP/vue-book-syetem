<template>
  <div class="scenepreset">
     <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="6" :offset="0">业务模式：</el-col> <el-col :span="6" :offset="0">班级类别：</el-col>
              </el-row>
              <!--查询  -->
              <div>

                <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>

                <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
                <el-button class="selectButton" size="medium" type="primary" @click="addForm()">新 建</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="编号" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="业务模式"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="班级类别"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="场景名称"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
              <el-table-column  prop="experience" label="操作"  align="center">
                <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEdit(scope.row)">修改</el-button><span>|</span><el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
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
      title="班级配置"
      :visible.sync="showStudyState"
      width="40%"
      style="padding-bottom:40px"
      >
     <el-form ref="form" :model="classManageData" label-width="80px">


        <el-form-item label="业务模式">
            <el-select v-model="classManageData.region1" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="班级">
            <el-select v-model="classManageData.region2" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>

       <el-form-item label="场景名称">
            <el-select v-model="classManageData.region3" placeholder="请选择活动区域">
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
  title: '场景预设',
  name: 'ScenePreset',
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
          className: '1',
          UMID: '车位贷',
          Number: '新人培训',
          VideoTitle: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          Number: '新人培训',
          VideoTitle: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          Number: '新人培训',
          VideoTitle: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          Number: '新人培训',
          VideoTitle: '开场白'
        },
        {
          className: '1',
          UMID: '车位贷',
          Number: '新人培训',
          VideoTitle: '开场白'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showStudyState: false,
      classManageData:{

        region1:'',
        region2:'',
        region3:''
      }
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
    addForm() {
      this.showStudyState = true
    },
    handleEdit() {
      this.showStudyState = true
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/scenepreset';
</style>
