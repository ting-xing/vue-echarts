import {EChartsOption, init} from "echarts";
import {EchartsTheme} from "../../echarts-theme";

export type EchartsInstance = ReturnType<typeof init>

export type InitParams = Parameters<typeof init>

export type EChartsInitOpts = NonNullable<InitParams[2]>;

export type SetOptionOpts = NonNullable<Parameters<EchartsInstance["setOption"]>[1]>

/**
 * @see https://echarts.apache.org/zh/api.html#echarts.init
 */
export interface VueEchartsProps {
    /**
     * 应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 echarts.registerTheme 注册的主题名称。参见 ECharts 中的样式简介。
     */
    theme?: EchartsTheme | InitParams[1];
    /**
     * 配置项
     */
    option: EChartsOption;
    /**
     * 初始化 echartsInstance 时的参数
     */
    initOpts?: EChartsInitOpts;
    /**
     * 内部调用 `echartsInstance. setOption` 时，携带的参数
     */
    setOptionOpts?: SetOptionOpts;
}