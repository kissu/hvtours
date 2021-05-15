import locale7744c453 from '../../locales/es.js'
import locale77427e78 from '../../locales/en.js'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"name":"Espaneol","code":"es","iso":"es","file":"es.js","icon":"https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/SP.png"},{"name":"English","code":"en","iso":"en-IN","file":"en.js","icon":"https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/US.png"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix",
  lazy: false,
  langDir: "/Users/vin/Documents/Website Projects/hvtours/locales",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"lang","cookieSecure":false,"fallbackLocale":"en","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true,"mutations":{"setLocale":"I18N_SET_LOCALE","setMessages":false},"preserveState":false},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: (previous, current) => {
      if (process.client) {
        const DATE = new Date();
        DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000);
        document.cookie = 'lang=' + current + '; path=/; expires=' + DATE.toUTCString();
      }
    },
  normalizedLocales: [{"name":"Espaneol","code":"es","iso":"es","file":"es.js","icon":"https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/SP.png"},{"name":"English","code":"en","iso":"en-IN","file":"en.js","icon":"https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/US.png"}],
  localeCodes: ["es","en"],
}

export const localeMessages = {
  'es.js': () => Promise.resolve(locale7744c453),
  'en.js': () => Promise.resolve(locale77427e78),
}
