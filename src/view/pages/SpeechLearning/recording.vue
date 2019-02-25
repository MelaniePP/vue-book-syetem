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
        <el-table :data="tableData" height="355"> 
          <el-table-column  prop="Number" label="编号"></el-table-column>
          <el-table-column  prop="title" label="标题"></el-table-column>
          <el-table-column  prop="time" label="拨打时间"></el-table-column>
          <el-table-column  prop="duration" label="时长"></el-table-column>
          <el-table-column label="评分" >
            <template slot-scope="scope">
              <el-rate v-model="scope.row.score"></el-rate>
            </template>
          </el-table-column>
          <el-table-column  prop="comments" label="评论次数"></el-table-column>
          <el-table-column prop="tag" label="标签" filter-placement="bottom-end">
            <template slot-scope="scope">
              <el-tag disable-transitions>{{scope.row.label}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column  prop="experience" label="学习心得"> </el-table-column>
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
  title: '录音学习',
  "name": "recording",
  inject: ['reload'],
  data () {
    return {
      // 输入问题
      inputContent:"",
      // 选项数据
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      // 选项数据v-model
      value: '',
      // 表格数据
      tableData: [{
          Number: '55',
          title: '经典场景',
          time: '2016-05-02',      
          duration: '2016-05-02',
          score: 2,
          comments: '2',
          label: '师',
          experience: '容易'
        },
        {
          Number: '55',
          title: '经典场景',
          time: '2016-05-02',      
          duration: '2016-05-02',
          score: 1,
          comments: '2',
          label: '学',
          experience: '容易'
        },
        {
          Number: '55',
          title: '经典场景',
          time: '2016-05-02',      
          duration: '2016-05-02',
          score: 2,
          comments: '2',
          label: '学',
          experience: '容易'
        }],
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
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }

}
</script>

<style scoped lang="less">
  @import "../../../assets/theme/pageStyle/recording";
</style>
