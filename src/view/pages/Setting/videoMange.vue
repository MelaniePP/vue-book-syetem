<template>
  <div class="videoMange">
        <div class="titleBox">
        <span style="text-align:left">新增录音资料</span>
        <span class="BackImg" @click="backShift()"></span>
        </div>
      <div class="rolemangeSmall">
      <div class="selectBox">
        <el-form>
          <el-form-item label="活动名称">
            <el-input v-model="value1"></el-input>
          </el-form-item>
            <el-form-item label="活动名称">
            <el-input v-model="value1"></el-input>
          </el-form-item>
            <el-form-item label="活动名称">
            <el-input v-model="value1"></el-input>
          </el-form-item>
          <el-select v-model="value1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="value1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-form-item label="活动名称">
            <el-input v-model="value1"></el-input>
          </el-form-item>
          <!-- 文件上传 -->
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form>
      <div class="profoot">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
      </div>

      </div>
  </div>
  <!-- 树形控件 -->
</template>
<script>
export default {
  data() {
    return {
      value1: '',
       fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods:{
    handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      backShift(){
        this.$router.push({name:'RecordingMaterial'})
      }
  }
}
</script>
<style  lang="less" scoped>
.videoMange {
  // padding-left:4%;
  // overflow: hidden;
    // height: 100%;
  .rolemangeSmall {
    width: 93%;
    margin-left: 3%;
    box-sizing: border-box;
    height:700px;
    background: #fff;
    padding-top: 20px;
    margin-top: 20px;
    .selectBox {
      margin-left: 3%;
      background: #fff;
      width: 93%;
    }
    .profoot {
      float: right;
      margin-top: 4%;
      padding-right: 3%;
      background: #fff;
      // width: 100%;
    }
  }
}
</style>



