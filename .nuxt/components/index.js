import { wrapFunctional } from './utils'

export { default as HomeSlider } from '../../components/holidays/HomeSlider.vue'
export { default as Blogcards } from '../../components/blog/Blogcards.vue'
export { default as SideNav } from '../../components/account/SideNav.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as LangSwitcher } from '../../components/LangSwitcher.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as Navdark } from '../../components/Navdark.vue'
export { default as Offercardcarousel } from '../../components/Offercardcarousel.vue'
export { default as Offerscardtab } from '../../components/Offerscardtab.vue'
export { default as Popularoutes } from '../../components/Popularoutes.vue'
export { default as Promotionsbanner } from '../../components/Promotionsbanner.vue'
export { default as Sliderhomepage } from '../../components/Sliderhomepage.vue'
export { default as Tourcardcarousel } from '../../components/Tourcardcarousel.vue'
export { default as UserAuthForm } from '../../components/UserAuthForm.vue'
export { default as Langlist } from '../../components/langlist.vue'

export const LazyHomeSlider = import('../../components/holidays/HomeSlider.vue' /* webpackChunkName: "components/home-slider" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogcards = import('../../components/blog/Blogcards.vue' /* webpackChunkName: "components/blogcards" */).then(c => wrapFunctional(c.default || c))
export const LazySideNav = import('../../components/account/SideNav.vue' /* webpackChunkName: "components/side-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLangSwitcher = import('../../components/LangSwitcher.vue' /* webpackChunkName: "components/lang-switcher" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNavdark = import('../../components/Navdark.vue' /* webpackChunkName: "components/navdark" */).then(c => wrapFunctional(c.default || c))
export const LazyOffercardcarousel = import('../../components/Offercardcarousel.vue' /* webpackChunkName: "components/offercardcarousel" */).then(c => wrapFunctional(c.default || c))
export const LazyOfferscardtab = import('../../components/Offerscardtab.vue' /* webpackChunkName: "components/offerscardtab" */).then(c => wrapFunctional(c.default || c))
export const LazyPopularoutes = import('../../components/Popularoutes.vue' /* webpackChunkName: "components/popularoutes" */).then(c => wrapFunctional(c.default || c))
export const LazyPromotionsbanner = import('../../components/Promotionsbanner.vue' /* webpackChunkName: "components/promotionsbanner" */).then(c => wrapFunctional(c.default || c))
export const LazySliderhomepage = import('../../components/Sliderhomepage.vue' /* webpackChunkName: "components/sliderhomepage" */).then(c => wrapFunctional(c.default || c))
export const LazyTourcardcarousel = import('../../components/Tourcardcarousel.vue' /* webpackChunkName: "components/tourcardcarousel" */).then(c => wrapFunctional(c.default || c))
export const LazyUserAuthForm = import('../../components/UserAuthForm.vue' /* webpackChunkName: "components/user-auth-form" */).then(c => wrapFunctional(c.default || c))
export const LazyLanglist = import('../../components/langlist.vue' /* webpackChunkName: "components/langlist" */).then(c => wrapFunctional(c.default || c))
