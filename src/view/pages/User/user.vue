<template>
  <div class="user">
    <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="6" :offset="0">班级类别：</el-col><el-col :span="6" :offset="0">姓名：</el-col>
              </el-row>
              <!--查询  -->
              <div>

                <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
                <!-- <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select> -->

                <el-button class="selectButton" size="medium" type="primary">搜 索</el-button>
                <el-button class="selectButton" size="medium" type="primary" @click="addUser()">新 增</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="姓名" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="班级名称"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="UM账号"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="角色"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
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
    <!-- 模态框 -->
     <el-dialog

      :visible.sync="showUueState"
      width="40%"
      :before-close="handleClose"
      >
      <div>
        <h2 v-if="!id"> 新建角色</h2>
        <h2 v-if="id"> 修改角色</h2>
        <span>姓名:</span><el-input v-model="statusFrom.input1" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>UM账号:</span><el-input v-model="statusFrom.input2" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>使用期限：</span><el-input v-model="statusFrom.input3" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>身份证号码：</span><el-input v-model="statusFrom.input4" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>所属机构：</span><el-input v-model="statusFrom.input5" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <span>密码：</span><el-input v-model="statusFrom.input6" placeholder="请输入内容" style="width:70%;margin-top:3%"></el-input><br>
        <div style="margin-top:20px">班级类型：
          <el-select v-model="statusFrom.value1" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </div>
        <div style="margin-top:20px">班级名称：
        <el-select v-model="statusFrom.value2" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </div>
        <div style="margin-top:20px">角色：
        <el-select v-model="statusFrom.value3" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showUueState = false">取 消</el-button>
        <el-button type="primary" @click="showUueState = false;studyStatus()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  title: '用户管理',
  name: 'user',
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
          className: '张三',
          UMID: '新人培训',
          Number: '10001',
          VideoTitle: '管理员'
        },
        {
          className: '张三',
          UMID: '新人培训',
          Number: '10002',
          VideoTitle: '管理员'
        },
        {
          className: '张三',
          UMID: '新人培训',
          Number: '10003',
          VideoTitle: '管理员'
        },
        {
          className: '张三',
          UMID: '新人培训',
          Number: '10004',
          VideoTitle: '管理员'
        },
        {
          className: '张三',
          UMID: '新人培训',
          Number: '10005',
          VideoTitle: '管理员'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      showUueState: false,
      statusFrom: {
        value1: '',
        value2: '',
        value3: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
      },
      id: 0
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
    addUser() {
      this.statusFrom = {
        value1: '',
        value2: '',
        value3: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
      }
       this.id = 0 
      this.showUueState = true;
    },
    handleClose() {
      this.showUueState = false
    },
    handleEdit(row) {

      //  console.log(row);
      this.id = row.Number
      //              let storage = window.localStorage
      //       let usrId = JSON.parse(storage.getItem('usrId'+this.id))
      //       this.statusFrom = usrId
      //  console.log(usrId);

      let storage = window.localStorage
      // console.dir(storage.key);

      if (this.id) {
        let usrId = JSON.parse(storage.getItem('usrId' + this.id))
        // console.log(usrId)

        if(usrId!=null){
          this.statusFrom = usrId

        }else if (usrId===null){
           this.statusFrom = {
              value1: '',
              value2: '',
              value3: '',
              input1: '',
              input2: '',
              input3: '',
              input4: '',
              input5: '',
              input6: ''
            }
        }
      }
      this.showUueState = true
    },
    studyStatus() {
      console.log(this.statusFrom)
      let storage = window.localStorage
      let usrId = JSON.stringify(this.statusFrom)
      storage.setItem('usrId' + this.id, usrId)
      this.statusFrom = {
        value1: '',
        value2: '',
        value3: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: ''
      }
       this.id = 0
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/user';
</style>
