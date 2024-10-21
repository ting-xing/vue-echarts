import {Meta, StoryObj} from "@storybook/vue3";
import VueEcharts from "./VueEcharts.vue";
import {HTMLAttributes, nextTick, ref, watch} from "vue";
import {VueEchartsProps} from "./VueEchartsProps.ts";
import {EchartsTheme} from "../../echarts-theme";
import {EchartsThemeRegister} from "../../echarts-theme";

const meta: Meta<VueEchartsProps> = {
    component: VueEcharts,
};

export default meta;

type Story = StoryObj<VueEchartsProps & HTMLAttributes>;

export const baseLineChart: Story = {
    name: "基础折线图",
    args: {
        option: {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line"
                }
            ]
        },
        style: "height:300px;"
    }
};

export const baseBarChart: Story = {
    name: "响应式",
    render: () => ({
        components: {VueEcharts},
        data() {
            return {
                values: [120, 200, 150, 80, 70, 110, 130]
            }
        },
        methods: {
            change() {
                this.values = Array.from({length: 7}).map(() => Math.random() * 100)
            }
        },
        computed: {
            option() {
                return {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: this.values,
                            type: 'bar'
                        }
                    ]
                }
            }
        },
        template: `
          <button @click="change">改变</button>
          <VueEcharts :option="option" style="height: 300px"></VueEcharts>`
    }),
}



export const useTheme: Story = {
    name: "使用 echartsOption",
    render: (args) => ({
        components: {VueEcharts},
        setup() {
            new EchartsThemeRegister().register();
            const currentTheme = ref(EchartsTheme.Vintage)
            const show = ref(true);

            watch(() => currentTheme.value, () => {
                    show.value = false;
                    nextTick(() => show.value = true)
                }
            )

            return {args, EchartsTheme, currentTheme, show}
        },
        template: `
          <div style="height: 300px">

            <template v-for="theme in EchartsTheme">
              <label>
                <input name="theme" type="radio" :value="theme" v-model="currentTheme">
                {{ theme }}
              </label>
            </template>


            <VueEcharts v-bind="args" :theme="currentTheme" v-if="show"></VueEcharts>
          </div>
        `
    }),
    args: {
        option: {
            xAxis: {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
                type: "value"
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line"
                }
            ]
        },
        style: "height:300px;",
        theme: EchartsTheme.PurplePassion
    }
}