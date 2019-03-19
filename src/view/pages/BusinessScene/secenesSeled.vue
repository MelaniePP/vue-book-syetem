<template>
  <div class="secenesseled">
    <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region1" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动名称">
              <el-input v-model="form.name1"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">下一步</el-button>
              <!-- <el-button>取消</el-button> -->
            </el-form-item>
          </el-form>
  </div>
</template>
<script>
export default {
  title: '新建场景操作1',
  name: 'secenesSeled',
  inject: ['reload'],
  data() {
    return {
      stepIndex: 1,
      form: {
        name: '',
        name1: '',
        region: '',
        region1: '',
        desc: ''
      },
      id:0
    }
  },
  methods: {
    backShift() {
      this.$router.push({ name: 'Scenes' })
    },
    submitForm(row) {
      // console.log(row);
      this.$refs[row].validate(valid => {
        if (valid) {
          // alert('提交成功')
          let storage = window.localStorage
          let newmsg = JSON.stringify(this.form)
          storage.setItem('sceNum' + this.id, newmsg)
        } else {
          console.log('error submit!!')
          // return false
        }
      })
    },
    //数据回显
    backmsg(id){
      // console.log(id);

      if(id){
        let storage = window.localStorage
        let oldmsg = storage.getItem('sceNum'+id)
        oldmsg = JSON.parse(oldmsg)
        console.log(oldmsg)
        if(oldmsg){
          this.form = oldmsg
        }
      }
    }
  },
  created(){
     this.id=this.GetQueryString('className')
    //  console.log(this.id);
     this.backmsg(this.id)
  }
}
</script>
<style lang="less" >
//  @import "../../assets/theme/pageStyle/ScenceBg";
.scenceBg {
  .stepBar,
  .bodyMain {
    background: white;
    margin-top: 27px;
    padding-top: 12px;
    box-sizing: border-box;
  }
  .bodyMain {
    margin-left: 4%;
    width: 92%;
    padding: 7% 5%;
    .el-input {
      width: 30%;
    }
    .el-select {
      .el-input {
        width: 100%;
      }
    }
  }
}
</style>
