<template>
  <div class="grade">
    <el-row>
      <el-col :span="22" :offset="1">
        <div class="grid-content">
          <span>时间：</span>
          <el-date-picker v-model="time" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-button class="selectButton" size="medium" type="primary">查 询</el-button>
        </div>
        <div class="grid-echarts">
          <div class="ExportButtonWrap"><el-button class="ExportButton" type="primary" icon="el-icon-upload2">导出</el-button></div>
          <table class="echartsTable" >
            <tr>
              <td valign="top">
                <div class="echartsTitle"><span></span>个人与班级平均成绩 </div>
                <!-- <div><span></span>个人与班级平均成绩 </div> -->
              </td>
              <td valign="top">
                <div class="echartsTitle"><span></span>个人与班级平均时间 </div>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <div class="echartsTitle"><span></span>场景 </div>
              </td>
              <td valign="top">
                <div class="echartsTitle"><span></span>场景分布 </div>
              </td>
            </tr>
          </table>
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
