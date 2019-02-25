<template>
  <div class="grade">
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="grid-content">
          <span>时间：</span>
          <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  title: '个人成绩',
  "name": "grade",
  inject: ['reload'],
  data () {
    return {
      time:''
    }
  },
  created() {
  },
  methods:{}

}
</script>

<style scoped lang="less">
  @import "../../../assets/theme/pageStyle/grade";
</style>
