<template>
  <div class="problem">
    <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid-content">
              <el-row class="selecTitle">
                <el-col :span="6" :offset="0">业务模式：</el-col><el-col :span="6" :offset="0">环节: </el-col>
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
                <el-button class="selectButton" size="medium" type="primary" @click="newProblem()">新 建</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22" :offset="1">
            <!-- 表格 -->
            <el-table :data="tableData" height="330">
              <el-table-column  prop="className" label="编号" align="center"></el-table-column>
              <el-table-column  prop="UMID" label="问题描述"  align="center"></el-table-column>
              <el-table-column  prop="Number" label="环节"  align="center"></el-table-column>
              <el-table-column  prop="VideoTitle" label="创建时间"  align="center"></el-table-column>
              <!-- <el-table-column label="评分" >
                <template slot-scope="scope">
                  <el-rate v-model="scope.row.score"></el-rate>
                </template>
              </el-table-column> -->
              <el-table-column  prop="updateTime" label="最后更新时间"  align="center"></el-table-column>
              <el-table-column prop="currentOperator" label="关联规则数" filter-placement="bottom-end"  align="center"></el-table-column>
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
  </div>
</template>
<script>
export default {
  title: '问题管理',
  name: 'problem',
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
          UMID: '无法接听',
          Number: '开场白',
          VideoTitle: '2018-10-18 08:42:50',
          updateTime: '2018-12-18 08:42:50',
          currentOperator: '305'
        },
        {
          className: '2',
          UMID: '无法接听',
          Number: '开场白',
          VideoTitle: '2018-10-18 08:42:50',
          updateTime: '2018-12-18 08:42:50',
          currentOperator: '305'
        },
        {
          className: '3',
          UMID: '无法接听',
          Number: '开场白',
          VideoTitle: '2018-10-18 08:42:50',
          updateTime: '2018-12-18 08:42:50',
          currentOperator: '305'
        },
        {
          className: '4',
          UMID: '无法接听',
          Number: '开场白',
          VideoTitle: '2018-10-18 08:42:50',
          updateTime: '2018-12-18 08:42:50',
          currentOperator: '305'
        },
        {
          className: '5',
          UMID: '无法接听',
          Number: '开场白',
          VideoTitle: '2018-10-18 08:42:50',
          updateTime: '2018-12-18 08:42:50',
          currentOperator: '305'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  created() {


  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    newProblem(){
      this.$router.push({name: 'ProblemTable'})
    },
    handleEdit(rows){
      // console.log(rows)
      this.$router.push({name: 'ProblemTable',query: { className:rows.className}})
    }
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/problem';
</style>
