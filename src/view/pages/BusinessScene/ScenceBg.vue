<template>
  <div class="scenceBg">
    <div class="titleBox">
        <span style="text-align:left" v-if="!id">新建场景操作</span>
        <span style="text-align:left" v-if="id">修改场景操作</span>
        <span class="BackImg" @click="backShift()"></span>
    </div>
    <el-row :gutter="0">
      <el-col :span="22" :offset="1">
        <el-steps class="stepBar" :active="stepIndex" align-center>
          <el-step title="场景选择"></el-step>
          <el-step title="模拟训练"></el-step>
          <el-step title="训练结束"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <div class="bodyMain">
      <div class="movebox">
         <!-- 基本信息 -->
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
            <el-form-item  style="text-align:center">
              <el-button type="primary" @click="submitForm('form')">下一步</el-button>
              <!-- <el-button>取消</el-button> -->
            </el-form-item>
          </el-form>

        <!-- 设置问题 -->
          <el-form ref="form" :model="form" label-width="80px">
            <h1 style="text-align:center">问题描述</h1>
            <el-form-item :label="'环节'+(index+1)" v-for="(item,index) in scenceForm" :key="item.index">
              <el-input v-model="item.name"></el-input>
            </el-form-item>
            <el-button style="margin-left:45%;margin-top:4%" @click="addNewStep()">新增环节</el-button>
            <el-form-item  style="text-align:center">
              <el-button  @click="backshift1()">上一步</el-button>
              <el-button type="primary" @click="submitForm1('form')">下一步</el-button>
            </el-form-item>
          </el-form>

        <!-- 规则设置 -->
          <el-form ref="form" :model="form" label-width="80px">
                <template>
                  <el-transfer
                    v-model="value5"
                    :props="{
                      key: 'value',
                      label: 'desc'
                    }"
                    :data="data3">
                  </el-transfer>
                </template>
           <el-form-item label="性质">
                <el-checkbox-group v-model="form.type">
                  <!-- <el-checkbox v-for="item in form.permissionBeans" :key="item" :checked="item.checked" @change.native="test()">{{item.name}}</el-checkbox> -->
                  <el-checkbox label="语速" name="type"></el-checkbox>
                  <el-checkbox label="抢话" name="type"></el-checkbox>
                  <el-checkbox label="回应及时" name="type"></el-checkbox>
                  <el-checkbox label="高压" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
              <!-- <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item> -->
            <el-form-item  style="text-align:center">
              <el-button @click="backshift2()">上一步</el-button>
              <el-button type="primary" @click="submitForm2('form');test()">保存</el-button>
              <!-- <el-button>取消</el-button> -->
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: '新建场景操作',
  name: 'ScenceBg',
  inject: ['reload'],

  data() {
    const generateData3 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data3: generateData3(),
      value5: [],
      stepIndex: 1,
      form: {
        name: '',
        name1: '',
        region: '',
        region1: '',
        desc: '',
        type: [],
        delivery: false,
        // permissionBeans: [
        //   {
        //     id: 1,
        //     name: '语速',
        //     checked: true
        //   },
        //   {
        //     id: 2,
        //     name: '抢话',
        //     checked: false
        //   },
        //   {
        //     id: 3,
        //     name: '回应及时',
        //     checked: false
        //   },
        //   {
        //     id: 4,
        //     name: '高压',
        //     checked: false
        //   }
        // ]
      },
      scenceForm: [{ name: '' }],
      id: 0
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
          let width = document.querySelector('.bodyMain').offsetWidth
          let box = document.querySelector('.movebox')
          // console.log(width);
          box.style.left = -width + 'px'
          this.stepIndex = 2
        } else {
          console.log('error submit!!')
          // return false
        }
      })
    },
    submitForm1(row) {
      // console.log(row);
      this.$refs[row].validate(valid => {
        if (valid) {
          // alert('提交成功')
          let storage = window.localStorage
          let newmsg = JSON.stringify(this.form)
          storage.setItem('sceNum' + this.id, newmsg)
          let width = document.querySelector('.bodyMain').offsetWidth
          let box = document.querySelector('.movebox')
          // console.log(width);
          box.style.left = -width * 2 + 'px'
          this.stepIndex = 3
        } else {
          console.log('error submit!! ')
          // return false
        }
      })
    },
    submitForm2(row) {
      // console.log(row);
      this.$refs[row].validate(valid => {
        if (valid) {
          // alert('提交成功')
          let storage = window.localStorage
          let newmsg = JSON.stringify(this.form)
          storage.setItem('sceNum' + this.id, newmsg)
          // console.log(this.form.type)
          this.$router.push({name:'Scenes'})
        } else {
          console.log('error submit!!')
          // return false
        }
      })
    },
    backshift1() {
      let width = document.querySelector('.bodyMain').offsetWidth
      let box = document.querySelector('.movebox')
      // console.log(width);
      box.style.left = 0 + 'px'
      this.stepIndex = 1
    },
    backshift2() {
      let width = document.querySelector('.bodyMain').offsetWidth
      let box = document.querySelector('.movebox')
      // console.log(width);
      box.style.left = -width + 'px'
      this.stepIndex = 2
    },
    //数据回显
    backmsg(id) {
      // console.log(id);

      if (id) {
        let storage = window.localStorage
        let oldmsg = storage.getItem('sceNum' + id)
        oldmsg = JSON.parse(oldmsg)
        console.log(oldmsg)
        if (oldmsg) {
          this.form = oldmsg
        }
      }
    },
    //新增环节
    addNewStep() {
      this.scenceForm.push({
        name: ''
      })
    },
    test(row) {
      // alert(1)
      console.log(this.form)
      // alert(2)
    }
  },
  created() {
    this.id = this.GetQueryString('className')
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
    position: relative;
    height: 800px;
    overflow: hidden;
    .el-input {
      width: 30%;
    }
    .el-select {
      .el-input {
        width: 100%;
      }
    }
    .el-textarea {
      textarea {
        width: 60%;
      }
    }
    .el-form {
      position: absolute;
      width: 100%;
      padding-left: 4%;
    }
  }
  .el-form:nth-child(2) {
    left: 100%;
    .el-form-item {
      // transform: translateX(-50%)
      margin-top: 5%;
      margin-left: 22%;
    }
  }
  .el-form:nth-child(3) {
    left: 200%;
    .el-transfer,
    .el-form-item {
      // transform: translateX(-50%)
      margin: 3% 0 3% 25%;
    }
  }
  .movebox {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>


