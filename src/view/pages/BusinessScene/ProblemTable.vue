<template>
  <div class="ProblemTable">
    <div class="titleBox">
        <span style="text-align:left" v-if="!id">新建问题</span>
        <span style="text-align:left" v-if="id">修改问题</span>
        <span class="BackImg" @click="backUp()"></span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="table-left" style="float:left">
          <el-form-item label="业务模式:" prop="modle" >
              <el-select v-model="ruleForm.modle" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="环节:" prop="step">
              <el-select v-model="ruleForm.step" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="问题叙述:" prop="desc1">
              <el-input type="textarea" v-model="ruleForm.desc1"></el-input>
            </el-form-item>
            <el-form-item label="话术学习:" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助" value="1"></el-radio>
                <el-radio label="线下场地免费" value="2"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="标准话术:" prop="desc2">
              <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
            </el-form-item>
      </div>
      <div class="table-right" style="float:right">
        <el-form-item label="关联规则:" prop="desc3">
              <el-input type="textarea" v-model="ruleForm.desc3"></el-input>
            </el-form-item>
      </div>
      <div class="profoot">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>

    </el-form>
  </div>
</template>
<script>
export default {
  title: '新建问题',
  name: 'ProblemTable',
  inject: ['reload'],
  data() {
    return {
      id:0,
      ruleForm: {
        delivery: false,
        // type: [],
        resource: '',
        desc1: '',
        desc2: '',
        desc3: '',
        modle:'',
        step:''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        // resource: [
        //   { required: true, message: '请选择活动资源', trigger: 'blur' }
        // ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      // console.log(formName);

      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('提交成功')
          let storage = window.localStorage
          let newmsg = JSON.stringify(this.ruleForm)
          storage.setItem('num'+this.id,newmsg)
          this.$router.push({name:'problem'})
        } else {
          console.log('error submit!!')
          // return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    backUp(){
        // alert(1)
        this.$router.push({name:'problem'})
    },
    //数据回显
    backmsg(id){
      // console.log(id);

      if(id){
        let storage = window.localStorage
        let oldmsg = storage.getItem('num'+id)
        oldmsg = JSON.parse(oldmsg)
        console.log(oldmsg)
        if(oldmsg){
          this.ruleForm = oldmsg
        }
      }
    }
  },
  created(){
   this.id=this.GetQueryString('className')
  //  console.log(this.id)
   this.backmsg(this.id)
   }

}
</script>
<style lang="less" scoped>
.ProblemTable {
  .el-form {
    margin-top: 20px;
    background: #fff;
    overflow: hidden;
    margin-left: 3%;
    width: 94%;
    // height: 100%;
  }
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
  .table-left,
  .table-right{
    margin-top: 3.98%;
    margin-left:3%;
    margin-right:6.29%;
    overflow: hidden;
  }
  .table-left{
    width: 36.43%;
    margin-bottom: 2.77%;
  }
  .table-right{
    margin-top: 4%;
    width: 35.05%;
  }
  .el-select{
        // widows: 20.45%;;
        height:4.51%;
        margin-top: 2.02%;
        .el-input{
          width: 40%;
        }
  }
  .el-textarea{
    textarea{
      min-height:160px;
    }
  }
  .profoot{
    border-top: 2px dashed #E0E0E0;
    overflow: hidden;
    width: 100%;
    text-align: right;
    padding-top: 1.92%;
    padding-right:11.27%;
    padding-bottom:1%;
    box-sizing: border-box
  }
}
</style>



