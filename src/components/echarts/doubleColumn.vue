<template>
  <div class="DubllBars" ref="DubllBars"></div>
</template>

<script>
// Echarts
export default {
  name: "DubllBars",
  data() {
    return {
      Xdata:[],
      Ydata1:[],
      Ydata2:[]
    }
  },
  props:{

  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.DubllBars);
      // 绘制图表
      var option = {
        backgroundColor: "transparent",
        color: ["#F5A52D","#002FFF"], //柱图形颜色
        xAxis: [
          {
            type: "category",
            data: this.Xdata,
            axisLabel: {
              inside: false,
              // interval:0,
              textStyle: {
                color: "#CCCCCC"
              }
            },
            // X轴坐标
            axisTick: {
              show: false
            },
            //X轴线设置 
            axisLine: {
              show: true,
              type: "solid",
              lineStyle: {
                color: "#cccccc",
                width: "1"
              }
            },
            z: 10
          }
        ],
        yAxis: {
          name: '个',
          nameTextStyle: {
              padding: [0, 0, -20,33]
          },
          // 隐藏Y轴
          axisLine: {
            show: true,
            type: "solid",
            lineStyle: {
              color: "#cccccc",
              width: "1"
            }
          },
          //   隐藏刻度标准
          axisTick: {
            show: false
          },
          //   隐藏刻度
          axisLabel: {
            show: true,
            inside: false,
            interval:0,
            textStyle: {
              color: "#CCCCCC"
            }
          },
          //   隐藏网格线
          splitLine: {
            show: false
          }
        },
        dataZoom: [
            {
              type: 'inside',
              startValue:0,
              endValue:6
            }
        ],
        //数据
        series: [
          // 第一根柱子的配置
          {
            name: "月度告警数量",
            type: "bar",
            // 柱子的宽度
            barWidth: "10",
            data: this.Ydata1,
            //配置样式
            itemStyle: {
              normal: {
                // 柱子样式
                barBorderRadius:[10, 10, 0, 0],
                //每个柱子的颜色
                color: ["#F5A52D"],
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#F5F5F5",
                    fontSize: 12
                  }
                }
              }
            }
          },
          // 第二根柱子的配置
          {
            name: "月度告警数量",
            type: "bar",
            // 柱子的宽度
            barWidth: "10",
            data: this.Ydata2,
            barGap:'80%',
            itemStyle: {
              normal: {
                // 柱子样式
                barBorderRadius:[10, 10, 0, 0],
                //每个柱子的颜色
                color: ["#002FFF"],
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#F5F5F5",
                    fontSize: 12
                  }
                }
              }
            }
          }],
          //控制边距　
          grid: {
            left: '15',
            right:'0%',
            top: '20',
            bottom: this.bottomDataPx.bottom,
            containLabel: true,
          },
      };
      myChart.setOption(option);
    }
  },
  mounted() {
    // 调用图表
    this.drawLine();
  }
};
</script>
<style lang="scss" scoped>
.DubllBars {
  width: 100%;
  height: 145px;
}
</style>