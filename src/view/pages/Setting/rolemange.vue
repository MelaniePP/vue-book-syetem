<template>
  <div class="rolemange">
        <div class="titleBox">
        <span style="text-align:left">新建问题</span>
        <span class="BackImg" @click="backShift()"></span>
        </div>
      <div class="rolemangeSmall">
      <div class="selectBox">
          <el-select v-model="value1" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </div>
      <el-tree
          :data="data2"
          show-checkbox
          default-expand-all=true
          node-key="id"
          highlight-current
          :props="defaultProps">
      </el-tree>
      <div class="profoot">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      data2: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                },
                {
                  id: 10,
                  label: '三级 1-1-3'
                },
                {
                  id: 10,
                  label: '三级 1-1-4'
                },
                {
                  id: 10,
                  label: '三级 1-1-5'
                },
                {
                  id: 10,
                  label: '三级 1-1-6'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    backShift() {
      this.$router.push({ name: 'permission' })
    },
    submitForm() {
      this.$router.push({ name: 'permission' })
    },
    resetForm(ruleForm){
      // alert(1)
      console.log(ruleForm);

      this.$refs[ruleForm].resetFields();
    }
  }
}
</script>
<style  lang="less" scoped>
.rolemange {
  // padding-left:4%;
  // overflow: hidden;
  .rolemangeSmall {
    width: 93%;
    margin-left: 3%;
    box-sizing: border-box;
    height: 600px;
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
    }
  }
}
</style>



