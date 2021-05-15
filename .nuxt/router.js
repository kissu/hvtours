import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cb69e04 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _056d9a80 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _da6c9534 = () => interopDefault(import('../pages/cars/index.vue' /* webpackChunkName: "pages/cars/index" */))
const _1853fb26 = () => interopDefault(import('../pages/cruises/index.vue' /* webpackChunkName: "pages/cruises/index" */))
const _53a9781c = () => interopDefault(import('../pages/flights/index.vue' /* webpackChunkName: "pages/flights/index" */))
const _496a0972 = () => interopDefault(import('../pages/giftcard/index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _7c15073c = () => interopDefault(import('../pages/holidays/index.vue' /* webpackChunkName: "pages/holidays/index" */))
const _61e7bc86 = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _41a15285 = () => interopDefault(import('../pages/mice/index.vue' /* webpackChunkName: "pages/mice/index" */))
const _59f4f408 = () => interopDefault(import('../pages/visa/index.vue' /* webpackChunkName: "pages/visa/index" */))
const _7a0915ca = () => interopDefault(import('../pages/about/contact.vue' /* webpackChunkName: "pages/about/contact" */))
const _1afcaadd = () => interopDefault(import('../pages/about/privacy-policy.vue' /* webpackChunkName: "pages/about/privacy-policy" */))
const _74e8eeec = () => interopDefault(import('../pages/about/refunds-policy.vue' /* webpackChunkName: "pages/about/refunds-policy" */))
const _562b8add = () => interopDefault(import('../pages/about/terms-of-use.vue' /* webpackChunkName: "pages/about/terms-of-use" */))
const _089b6ce3 = () => interopDefault(import('../pages/account/bookings/index.vue' /* webpackChunkName: "pages/account/bookings/index" */))
const _5e8afe01 = () => interopDefault(import('../pages/account/hv-credits.vue' /* webpackChunkName: "pages/account/hv-credits" */))
const _d4e68a9a = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _021b5bba = () => interopDefault(import('../pages/account/manage-payment-method.vue' /* webpackChunkName: "pages/account/manage-payment-method" */))
const _4a007fc6 = () => interopDefault(import('../pages/account/manage-travellers.vue' /* webpackChunkName: "pages/account/manage-travellers" */))
const _6075b073 = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _62ce279c = () => interopDefault(import('../pages/account/promo-codes.vue' /* webpackChunkName: "pages/account/promo-codes" */))
const _02237d49 = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _b00edc36 = () => interopDefault(import('../pages/account/reviews.vue' /* webpackChunkName: "pages/account/reviews" */))
const _19eb131f = () => interopDefault(import('../pages/account/wallet.vue' /* webpackChunkName: "pages/account/wallet" */))
const _564ea36b = () => interopDefault(import('../pages/account/wishlist.vue' /* webpackChunkName: "pages/account/wishlist" */))
const _0aa26aa4 = () => interopDefault(import('../pages/flights/listing.vue' /* webpackChunkName: "pages/flights/listing" */))
const _a60fa2d2 = () => interopDefault(import('../pages/holidays/listing/index.vue' /* webpackChunkName: "pages/holidays/listing/index" */))
const _364e6b38 = () => interopDefault(import('../pages/holidays/weekend-gateways/index.vue' /* webpackChunkName: "pages/holidays/weekend-gateways/index" */))
const _8e5567ea = () => interopDefault(import('../pages/account/bookings/_id.vue' /* webpackChunkName: "pages/account/bookings/_id" */))
const _491eeabf = () => interopDefault(import('../pages/holidays/listing/_id.vue' /* webpackChunkName: "pages/holidays/listing/_id" */))
const _7ca03ce8 = () => interopDefault(import('../pages/blogs/_id.vue' /* webpackChunkName: "pages/blogs/_id" */))
const _83c5b922 = () => interopDefault(import('../pages/giftcard/_id.vue' /* webpackChunkName: "pages/giftcard/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _6cb69e04,
    name: "index___en"
  }, {
    path: "/es",
    component: _6cb69e04,
    name: "index___es"
  }, {
    path: "/en/blogs",
    component: _056d9a80,
    name: "blogs___en"
  }, {
    path: "/en/cars",
    component: _da6c9534,
    name: "cars___en"
  }, {
    path: "/en/cruises",
    component: _1853fb26,
    name: "cruises___en"
  }, {
    path: "/en/flights",
    component: _53a9781c,
    name: "flights___en"
  }, {
    path: "/en/giftcard",
    component: _496a0972,
    name: "giftcard___en"
  }, {
    path: "/en/holidays",
    component: _7c15073c,
    name: "holidays___en"
  }, {
    path: "/en/hotels",
    component: _61e7bc86,
    name: "hotels___en"
  }, {
    path: "/en/mice",
    component: _41a15285,
    name: "mice___en"
  }, {
    path: "/en/visa",
    component: _59f4f408,
    name: "visa___en"
  }, {
    path: "/es/blogs",
    component: _056d9a80,
    name: "blogs___es"
  }, {
    path: "/es/cars",
    component: _da6c9534,
    name: "cars___es"
  }, {
    path: "/es/cruises",
    component: _1853fb26,
    name: "cruises___es"
  }, {
    path: "/es/flights",
    component: _53a9781c,
    name: "flights___es"
  }, {
    path: "/es/giftcard",
    component: _496a0972,
    name: "giftcard___es"
  }, {
    path: "/es/holidays",
    component: _7c15073c,
    name: "holidays___es"
  }, {
    path: "/es/hotels",
    component: _61e7bc86,
    name: "hotels___es"
  }, {
    path: "/es/mice",
    component: _41a15285,
    name: "mice___es"
  }, {
    path: "/es/visa",
    component: _59f4f408,
    name: "visa___es"
  }, {
    path: "/en/about/contact",
    component: _7a0915ca,
    name: "about-contact___en"
  }, {
    path: "/en/about/privacy-policy",
    component: _1afcaadd,
    name: "about-privacy-policy___en"
  }, {
    path: "/en/about/refunds-policy",
    component: _74e8eeec,
    name: "about-refunds-policy___en"
  }, {
    path: "/en/about/terms-of-use",
    component: _562b8add,
    name: "about-terms-of-use___en"
  }, {
    path: "/en/account/bookings",
    component: _089b6ce3,
    name: "account-bookings___en"
  }, {
    path: "/en/account/hv-credits",
    component: _5e8afe01,
    name: "account-hv-credits___en"
  }, {
    path: "/en/account/login",
    component: _d4e68a9a,
    name: "account-login___en"
  }, {
    path: "/en/account/manage-payment-method",
    component: _021b5bba,
    name: "account-manage-payment-method___en"
  }, {
    path: "/en/account/manage-travellers",
    component: _4a007fc6,
    name: "account-manage-travellers___en"
  }, {
    path: "/en/account/profile",
    component: _6075b073,
    name: "account-profile___en"
  }, {
    path: "/en/account/promo-codes",
    component: _62ce279c,
    name: "account-promo-codes___en"
  }, {
    path: "/en/account/register",
    component: _02237d49,
    name: "account-register___en"
  }, {
    path: "/en/account/reviews",
    component: _b00edc36,
    name: "account-reviews___en"
  }, {
    path: "/en/account/wallet",
    component: _19eb131f,
    name: "account-wallet___en"
  }, {
    path: "/en/account/wishlist",
    component: _564ea36b,
    name: "account-wishlist___en"
  }, {
    path: "/en/flights/listing",
    component: _0aa26aa4,
    name: "flights-listing___en"
  }, {
    path: "/en/holidays/listing",
    component: _a60fa2d2,
    name: "holidays-listing___en"
  }, {
    path: "/en/holidays/weekend-gateways",
    component: _364e6b38,
    name: "holidays-weekend-gateways___en"
  }, {
    path: "/es/about/contact",
    component: _7a0915ca,
    name: "about-contact___es"
  }, {
    path: "/es/about/privacy-policy",
    component: _1afcaadd,
    name: "about-privacy-policy___es"
  }, {
    path: "/es/about/refunds-policy",
    component: _74e8eeec,
    name: "about-refunds-policy___es"
  }, {
    path: "/es/about/terms-of-use",
    component: _562b8add,
    name: "about-terms-of-use___es"
  }, {
    path: "/es/account/bookings",
    component: _089b6ce3,
    name: "account-bookings___es"
  }, {
    path: "/es/account/hv-credits",
    component: _5e8afe01,
    name: "account-hv-credits___es"
  }, {
    path: "/es/account/login",
    component: _d4e68a9a,
    name: "account-login___es"
  }, {
    path: "/es/account/manage-payment-method",
    component: _021b5bba,
    name: "account-manage-payment-method___es"
  }, {
    path: "/es/account/manage-travellers",
    component: _4a007fc6,
    name: "account-manage-travellers___es"
  }, {
    path: "/es/account/profile",
    component: _6075b073,
    name: "account-profile___es"
  }, {
    path: "/es/account/promo-codes",
    component: _62ce279c,
    name: "account-promo-codes___es"
  }, {
    path: "/es/account/register",
    component: _02237d49,
    name: "account-register___es"
  }, {
    path: "/es/account/reviews",
    component: _b00edc36,
    name: "account-reviews___es"
  }, {
    path: "/es/account/wallet",
    component: _19eb131f,
    name: "account-wallet___es"
  }, {
    path: "/es/account/wishlist",
    component: _564ea36b,
    name: "account-wishlist___es"
  }, {
    path: "/es/flights/listing",
    component: _0aa26aa4,
    name: "flights-listing___es"
  }, {
    path: "/es/holidays/listing",
    component: _a60fa2d2,
    name: "holidays-listing___es"
  }, {
    path: "/es/holidays/weekend-gateways",
    component: _364e6b38,
    name: "holidays-weekend-gateways___es"
  }, {
    path: "/en/account/bookings/:id",
    component: _8e5567ea,
    name: "account-bookings-id___en"
  }, {
    path: "/en/holidays/listing/:id",
    component: _491eeabf,
    name: "holidays-listing-id___en"
  }, {
    path: "/es/account/bookings/:id",
    component: _8e5567ea,
    name: "account-bookings-id___es"
  }, {
    path: "/es/holidays/listing/:id",
    component: _491eeabf,
    name: "holidays-listing-id___es"
  }, {
    path: "/en/blogs/:id",
    component: _7ca03ce8,
    name: "blogs-id___en"
  }, {
    path: "/en/giftcard/:id",
    component: _83c5b922,
    name: "giftcard-id___en"
  }, {
    path: "/es/blogs/:id",
    component: _7ca03ce8,
    name: "blogs-id___es"
  }, {
    path: "/es/giftcard/:id",
    component: _83c5b922,
    name: "giftcard-id___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
