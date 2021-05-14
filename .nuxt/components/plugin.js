import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HomeSlider: () => import('../../components/holidays/HomeSlider.vue' /* webpackChunkName: "components/home-slider" */).then(c => wrapFunctional(c.default || c)),
  Blogcards: () => import('../../components/blog/Blogcards.vue' /* webpackChunkName: "components/blogcards" */).then(c => wrapFunctional(c.default || c)),
  SideNav: () => import('../../components/account/SideNav.vue' /* webpackChunkName: "components/side-nav" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  LangSwitcher: () => import('../../components/LangSwitcher.vue' /* webpackChunkName: "components/lang-switcher" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  Navdark: () => import('../../components/Navdark.vue' /* webpackChunkName: "components/navdark" */).then(c => wrapFunctional(c.default || c)),
  Offercardcarousel: () => import('../../components/Offercardcarousel.vue' /* webpackChunkName: "components/offercardcarousel" */).then(c => wrapFunctional(c.default || c)),
  Offerscardtab: () => import('../../components/Offerscardtab.vue' /* webpackChunkName: "components/offerscardtab" */).then(c => wrapFunctional(c.default || c)),
  Popularoutes: () => import('../../components/Popularoutes.vue' /* webpackChunkName: "components/popularoutes" */).then(c => wrapFunctional(c.default || c)),
  Promotionsbanner: () => import('../../components/Promotionsbanner.vue' /* webpackChunkName: "components/promotionsbanner" */).then(c => wrapFunctional(c.default || c)),
  Sliderhomepage: () => import('../../components/Sliderhomepage.vue' /* webpackChunkName: "components/sliderhomepage" */).then(c => wrapFunctional(c.default || c)),
  Tourcardcarousel: () => import('../../components/Tourcardcarousel.vue' /* webpackChunkName: "components/tourcardcarousel" */).then(c => wrapFunctional(c.default || c)),
  UserAuthForm: () => import('../../components/UserAuthForm.vue' /* webpackChunkName: "components/user-auth-form" */).then(c => wrapFunctional(c.default || c)),
  Langlist: () => import('../../components/langlist.vue' /* webpackChunkName: "components/langlist" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
