import dark from '../assets/theme/dark.json'
import vintage from '../assets/theme/vintage.json'
import westeros from '../assets/theme/westeros.json'
import essos from '../assets/theme/essos.json'

import wonderland from '../assets/theme/wonderland.json'
import walden from '../assets/theme/walden.json'
import chalk from '../assets/theme/chalk.json'
import infographic from '../assets/theme/infographic.json'

import macarons from '../assets/theme/macarons.json'
import roma from '../assets/theme/roma.json'
import shine from '../assets/theme/shine.json'
import purplePassion from '../assets/theme/purple-passion.json'
import {registerTheme} from "echarts";
import {EchartsTheme} from "./EchartsTheme.ts";

export class EchartsThemeRegister {


    public themes: Record<EchartsTheme, object> = {
        [EchartsTheme.Dark]: dark,
        [EchartsTheme.Vintage]: vintage,
        [EchartsTheme.Westeros]: westeros,
        [EchartsTheme.Essos]: essos,
        [EchartsTheme.Wonderland]: wonderland,
        [EchartsTheme.Walden]: walden,
        [EchartsTheme.Chalk]: chalk,
        [EchartsTheme.Infographic]: infographic,
        [EchartsTheme.Macarons]: macarons,
        [EchartsTheme.Roma]: roma,
        [EchartsTheme.Shine]: shine,
        [EchartsTheme.PurplePassion]: purplePassion
    }

    public register() {
        Object.entries(this.themes).map(([themeName, theme]) => registerTheme(themeName, theme))
    }

    public getTheme(themeName: EchartsTheme) {
        return this.themes[themeName]
    }
}