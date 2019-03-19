<template>
  <div class="record">
     <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="7" :offset="0">时间：</el-col><el-col :span="7" :offset="0">录音标题：</el-col><el-col :span="7" :offset="0">班级类别：</el-col>
              </el-row>
              <!--查询  -->
              <div>
                <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
                <el-input class="selectContent inputContent" :clearable=true v-model="inputContent" size="medium" placeholder="请输入内容"></el-input>
                <el-select class="selectContent" v-model="value" filterable placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              <el-row class="selecTitle">
                <el-col :span="7" :offset="0">时间：</el-col><el-col :span="7" :offset="0">录音标题：</el-col><el-col :span="7" :offset="0">班级类别：</el-col>
              </el-row>
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
              <el-table-column  prop="UMID" label="姓名"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="场景名称"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="得分"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
              <el-table-column  prop="updateTime" label="训练时间"  align="center"></el-table-column>
              <el-table-column prop="currentOperator" label="录音时长" filter-placement="bottom-end"  align="center"></el-table-column>
              <el-table-column  prop="experience" label="操作"  align="center">
                <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEdit(scope.row)">查看</el-button>
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
  </div>
</template>
<script>
export default {
  title: '历史纪录',
  name: 'record',
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
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '85',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '89s'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '85',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '89s'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '85',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '89s'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '85',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '89s'
        },
        {
          className: '续保',
          UMID: '张三',
          Number: '新人培训',
          VideoTitle: '85',
          updateTime: '2018-10-18 08:42:50',
          currentOperator: '89s'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
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
    handleEdit(row){
        this.$router.push({name:'buildrecord'})
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/record';
</style>
