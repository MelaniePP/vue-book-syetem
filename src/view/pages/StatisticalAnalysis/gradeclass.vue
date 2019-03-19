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
            <tr style="height:50%">
              <td valign="top" style="with:50%">
                <div class="echartsTitle"><span></span>个人与班级平均成绩 </div>
                <div class="echartsBody"></div>
              </td>
              <td valign="top" style="with:50%">
                <div class="echartsTitle"><span></span>个人与班级平均时间 </div>
                <div class="echartsWater"></div>
              </td>
            </tr>
            <tr style="height:50%">
              <td valign="top" style="with:50%">
                <div class="echartsTitle"><span></span>场景 </div>
                <div class="echartsWater1"></div>
              </td>
              <td valign="top" style="with:50%">
                <div class="echartsTitle"><span></span>场景分布 </div>
                <div class="echartsWater2"></div>
              </td>
            </tr>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  title: '班级成绩',
  name: 'gradeclass',
  inject: ['reload'],
  data() {
    return {
      time: ''
    }
  },
  methods: {
    //图表创建
    drawLineTable() {
      let myChart = this.$echarts.init(
        document.querySelector('.echartsBody'),
        'light'
      )
      // 绘制图表
      myChart.setOption({
        // title: { text: '在Vue中使用echarts' },
        // tooltip: {},
        legend: {
          left: '70%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          left: '4%', //图表距边框的距离
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        dataset: {
          source: [
            ['class', '班级', '个人'],
            ['10', 44.3, 15.8, 23.7],
            ['11', 43.3, 85.8, 93.7],
            ['12', 83.1, 73.4, 55.1],
            ['13', 86.4, 65.2, 82.5],
            ['14', 72.4, 53.9, 39.1],
            ['15', 72.4, 53.9, 39.1],
            ['16', 72.4, 53.9, 39.1],
            ['17', 72.4, 53.9, 39.1],
            ['18', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          name: '(分)',
          min: 0,
          max: 100,
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            // yAxisIndex: 1,
            // radius: '15%',
            itemStyle: {
              normal: {
                opacity: 0.8,
                color: '#0499FB'
              }, //hover状态
              emphasis: {
                opacity: 0.8,
                color: '#0499FB'
              }
            }
            ,
            // symbol:'none'
          },
          {
            type: 'bar',
            // yAxisIndex: 2,
            // radius: '15%',
            itemStyle: {
              normal: {
                opacity: 0.8,
                color: '#FCB92A',
                label: {
                  show: false
                  // position: 'top',
                  // formatter: '{b}\n{c}'
                }
              },

              //hover状态

              emphasis: {
                opacity: 0.8,
                color: '#FCB92A'
              },
            // symbol:'true'
            }
          },
          // {
          //   symbolSize: 20,
          //   data: [
          //     ['10', 44.3, 15.8, 23.7],
          //     ['11', 43.3, 85.8, 93.7],
          //     ['12', 83.1, 73.4, 55.1],
          //     ['13', 86.4, 65.2, 82.5],
          //     ['14', 72.4, 53.9, 39.1],
          //     ['15', 72.4, 53.9, 39.1],
          //     ['16', 72.4, 53.9, 39.1],
          //     ['17', 72.4, 53.9, 39.1],
          //     ['18', 72.4, 53.9, 39.1]
          //   ],
          //   type: 'scatter',
          //   itemStyle: {
          //     normal: {}
          //   },
          //   // symbol:'none'
          // }
        ],

        barWidth: '20%'
      })
    },
    //平均时间
    myEchars() {
      var water = this.$echarts.init(document.querySelector('.echartsWater'))
      water.setOption({
        // 定义样式和数据
        // backgroundColor: '#FBFBFB',
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['班级', '个人'],
          left: '70%'
        },

        calculable: true,

        xAxis: [
          {
            axisLabel: {
              // rotate: 30,
              // interval: 0
            },
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            type: 'category',
            boundaryGap: false,
            data: [11, 11, 11, 11, 11, 11, 11]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(分)',
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            min: 0,
            max: 100
          }
        ],
        series: [
          {
            name: '班级',
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: ['#0499FB'],
            data: [80, 10, 40, 30, 30, 40, 50, 60],
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: '#0499FB', //背景渐变色
                backgroundColor: '#4fd6d2',
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: '#4fd6d2'
                }
              }
            }
          },
          {
            name: '个人',
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: ['#FCB92A'],
            data: [20, 10, 30, 40, 60, 70, 20, 100],
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: '#FCB92A',
                lineStyle: {
                  // 系列级个性化 折线样式
                  width: 3,
                  type: 'solid',
                  backgroundColor: '#0180ff',
                  color: '#0180ff' //折线的颜色
                }
              }
            }
          }
        ]
      })
    },
    //场景
    myEcharsScence() {
      var water = this.$echarts.init(document.querySelector('.echartsWater1'))
      water.setOption({
        // 定义样式和数据
        // backgroundColor: '#FBFBFB',
        tooltip: {
          trigger: 'axis'
        },

        calculable: true,

        xAxis: [
          {
            axisLabel: {
              // rotate: 30,
              // interval: 0
            },
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            type: 'category',
            boundaryGap: false,
            // data: (function() {
            //   var list = []
            //   for (var i = 10; i < 18; i++) {
            //     if (i <= 12) {
            //       list.push('2016-' + i + '-01')
            //     } else {
            //       list.push('2017-' + (i - 12) + '-01')
            //     }
            //   }
            //   return list
            // })()
            data: [11, 11, 11, 11, 11, 11, 11]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(分)',
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            min: 0,
            max: 100
          }
        ],
        series: [
          {
            name: '班级',
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: ['#0499FB'],
            data: [10, 60, 40, 80, 60, 40, 50, 60],
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                // color: '#0499FB', //背景渐变色
                // backgroundColor: '#4fd6d2',
                // lineStyle: {
                //   // 系列级个性化折线样式
                //   width: 3,
                //   type: 'solid',
                //   color: '#4fd6d2'
                // }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2FFFEE' },
                  { offset: 0.5, color: '#4fd6d2' },
                  { offset: 1, color: '#0499FB' }
                ])
              }
            }
          }
        ]
      })
    },
    //场景分布
    myEcharsScenceAssign() {
      var water = this.$echarts.init(document.querySelector('.echartsWater2'))
      water.setOption({
        // 定义样式和数据
        // backgroundColor: '#FBFBFB',
        tooltip: {
          trigger: 'axis'
        },
        // dataset: {
        //   source: [
        //     ['class', '班级', '个人'],
        //     ['10', 44.3, 15.8, 23.7],
        //     ['11', 43.3, 85.8, 93.7],
        //     ['12', 83.1, 73.4, 55.1],
        //     ['13', 86.4, 65.2, 82.5],
        //     ['14', 72.4, 53.9, 39.1],
        //     ['15', 72.4, 53.9, 39.1],
        //     ['16', 72.4, 53.9, 39.1],
        //     ['17'  , 72.4, 53.9, 39.1],
        //     ['18', 72.4, 53.9, 39.1]
        //   ]
        // },
        // legend: {
        //   data: ['班级', '个人'],
        //   left: '70%'
        // },

        calculable: true,

        xAxis: [
          {
            axisLabel: {
              // rotate: 30,
              // interval: 0
            },
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            type: 'category',
            boundaryGap: false,
            // data: (function() {
            //   var list = []
            //   for (var i = 10; i < 18; i++) {
            //     if (i <= 12) {
            //       list.push('2016-' + i + '-01')
            //     } else {
            //       list.push('2017-' + (i - 12) + '-01')
            //     }
            //   }
            //   return list
            // })()
            data: [11, 11, 11, 11, 11, 11, 11]
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(分)',
            axisLine: {
              lineStyle: {
                color: 'black'
              }
            },
            min: 0,
            max: 100
          }
        ],
        series: [
          {
            name: '班级',
            type: 'line',
            symbol: 'none',
            smooth: 0.3,
            color: ['#0499FB'],
            data: [50, 80, 40, 50, 30, 80, 50, 60],
            areaStyle: {
              normal: {
                //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                // color: '#0499FB', //背景渐变色
                // backgroundColor: '#4fd6d2',
                // lineStyle: {
                //   // 系列级个性化折线样式
                //   width: 3,
                //   type: 'solid',
                //   color: '#4fd6d2'
                // }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#0499FB' },
                  { offset: 0.5, color: '#0499FB' },
                  { offset: 1, color: '#fff' }
                ])
              }
            }
          }
        ]
      })
    }
  },
  created() {},
  mounted() {
    this.drawLineTable()
    this.myEchars()
    this.myEcharsScence()
    this.myEcharsScenceAssign()
  }
}
</script>

<style scoped lang="less">
@import '../../../assets/theme/pageStyle/grade';
.echartsBody,
.echartsWater,
.echartsWater1,
.echartsWater2 {
  height: 100%;
  width: 95%;
}
.echartsTable tr td .echartsWater1 > div {
  // canvas
  height: 230px !important;
  //
}
</style>
