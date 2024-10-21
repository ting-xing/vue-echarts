# vue-echarts

将 echarts 封装成 vue3 的组件

* 使用 ResizeObserver 订阅父组件尺寸变化，自动调用 resize() 方法。
* 数据变化自动调用 setOption。
* 组件挂载后，触发 @init 事件，可获取到 echarts 实例。
* 内置官方12种主题，可扩展其他主题。[更多主题](https://echarts.apache.org/zh/theme-builder.html)

## [查看用法]( https://ting-xing.github.io/vue-echarts/)

## 快速上手

```shell
npm i @ting-xing/vue-echarts -S
```

```vue

<script setup>
  import VueEcharts from '@ting-xing/vue-echarts'
  
  const option = {
    xAxis: {
      type: 'category',
      data: {0: 'Mon', 1: 'Tue', 2: 'Wed', 3: 'Thu', 4: 'Fri', 5: 'Sat', 6: 'Sun'}
    },
    yAxis: {type: 'value'},
    series: {0: {data: {0: 150, 1: 230, 2: 224, 3: 218, 4: 135, 5: 147, 6: 260}, type: 'line'}}
  };
</script>
<template>
  <!--这将渲染一个基础折线图-->
  <VueEcharts
      :option="option"
  />
</template>
```

如何使用 [使用内置主题](https://ting-xing.github.io/vue-echarts/?path=/story/components-vue-echarts-vueecharts--use-theme)