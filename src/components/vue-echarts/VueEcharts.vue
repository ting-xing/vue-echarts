<script setup lang="ts">
import {onMounted, onUnmounted, ref, watchEffect} from "vue";
import * as echarts from "echarts";
import {EChartsType} from "echarts";
import {VueEchartsProps} from "./VueEchartsProps.ts";

const props = defineProps<VueEchartsProps>();

const emits = defineEmits<{
  (e: "init", instance: EChartsType): void;
}>();

const chart = ref<HTMLElement | null>(null);


onMounted(() => {
  const dom = chart.value as HTMLDivElement;

  const echartsInstance = echarts.init(dom, props.theme, props.initOpts);

  /**
   * 订阅父元素的尺寸变化
   * @see https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver/ResizeObserver
   */
  const resizeObserver = new ResizeObserver(() => {
    echartsInstance.resize();
  });

  resizeObserver.observe(dom);

  watchEffect(() => {
    echartsInstance.setOption(props.option, props.setOptionOpts);
  });

  emits("init", echartsInstance);

  onUnmounted(() => resizeObserver.disconnect());

  onUnmounted(() => echartsInstance.dispose());
});
</script>

<template>
  <div ref="chart" class="chart"></div>
</template>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
