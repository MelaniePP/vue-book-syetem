<template>
  <div class="speech">
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
    <!-- 折叠 -->
      <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              一致性 Consistency<i class="header-icon el-icon-info"></i>
            </template>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
  </div>
</template>
<script>
export default {
  title: '话术学习',
  "name": "speech",
  inject: ['reload'],
  data () {
    return {
    }
  },
  created() {
  },
  method:{}

}
</script>

<style scoped lang="less">
// @import "../assets/theme/home";
  @import "../../../assets/theme/pageStyle/speech";
</style>
