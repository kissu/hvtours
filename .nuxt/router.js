import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3afb5690 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4b8c0aba = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _41415428 = () => interopDefault(import('../pages/cars/index.vue' /* webpackChunkName: "pages/cars/index" */))
const _2c194c27 = () => interopDefault(import('../pages/cruises/index.vue' /* webpackChunkName: "pages/cruises/index" */))
const _0e6e8dac = () => interopDefault(import('../pages/flights/index.vue' /* webpackChunkName: "pages/flights/index" */))
const _a91e2e66 = () => interopDefault(import('../pages/giftcard/index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _dbc92c30 = () => interopDefault(import('../pages/holidays/index.vue' /* webpackChunkName: "pages/holidays/index" */))
const _40d158e8 = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _e39219ea = () => interopDefault(import('../pages/mice/index.vue' /* webpackChunkName: "pages/mice/index" */))
const _b2ead6e4 = () => interopDefault(import('../pages/visa/index.vue' /* webpackChunkName: "pages/visa/index" */))
const _9b6740f8 = () => interopDefault(import('../pages/about/contact.vue' /* webpackChunkName: "pages/about/contact" */))
const _50bfdbe3 = () => interopDefault(import('../pages/about/privacy-policy.vue' /* webpackChunkName: "pages/about/privacy-policy" */))
const _09628ce0 = () => interopDefault(import('../pages/about/refunds-policy.vue' /* webpackChunkName: "pages/about/refunds-policy" */))
const _c219753a = () => interopDefault(import('../pages/about/terms-of-use.vue' /* webpackChunkName: "pages/about/terms-of-use" */))
const _4b53172e = () => interopDefault(import('../pages/account/bookings/index.vue' /* webpackChunkName: "pages/account/bookings/index" */))
const _b15a8ef2 = () => interopDefault(import('../pages/account/hv-credits.vue' /* webpackChunkName: "pages/account/hv-credits" */))
const _645ff726 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _6017f174 = () => interopDefault(import('../pages/account/manage-payment-method.vue' /* webpackChunkName: "pages/account/manage-payment-method" */))
const _445dfb00 = () => interopDefault(import('../pages/account/manage-travellers.vue' /* webpackChunkName: "pages/account/manage-travellers" */))
const _d5e518a6 = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _c26efb28 = () => interopDefault(import('../pages/account/promo-codes.vue' /* webpackChunkName: "pages/account/promo-codes" */))
const _6084214f = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _46df55c2 = () => interopDefault(import('../pages/account/reviews.vue' /* webpackChunkName: "pages/account/reviews" */))
const _2bddfeb6 = () => interopDefault(import('../pages/account/wallet.vue' /* webpackChunkName: "pages/account/wallet" */))
const _96a1711e = () => interopDefault(import('../pages/account/wishlist.vue' /* webpackChunkName: "pages/account/wishlist" */))
const _3f3a2dde = () => interopDefault(import('../pages/flights/listing.vue' /* webpackChunkName: "pages/flights/listing" */))
const _7eb3361d = () => interopDefault(import('../pages/holidays/listing/index.vue' /* webpackChunkName: "pages/holidays/listing/index" */))
const _077c7a72 = () => interopDefault(import('../pages/holidays/weekend-gateways/index.vue' /* webpackChunkName: "pages/holidays/weekend-gateways/index" */))
const _22cf05de = () => interopDefault(import('../pages/account/bookings/_id.vue' /* webpackChunkName: "pages/account/bookings/_id" */))
const _7ee21bc5 = () => interopDefault(import('../pages/holidays/listing/_id.vue' /* webpackChunkName: "pages/holidays/listing/_id" */))
const _3b9d18bc = () => interopDefault(import('../pages/blogs/_id.vue' /* webpackChunkName: "pages/blogs/_id" */))
const _3bccba75 = () => interopDefault(import('../pages/giftcard/_id.vue' /* webpackChunkName: "pages/giftcard/_id" */))

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
    component: _3afb5690,
    name: "index___en"
  }, {
    path: "/es",
    component: _3afb5690,
    name: "index___es"
  }, {
    path: "/en/blogs",
    component: _4b8c0aba,
    name: "blogs___en"
  }, {
    path: "/en/cars",
    component: _41415428,
    name: "cars___en"
  }, {
    path: "/en/cruises",
    component: _2c194c27,
    name: "cruises___en"
  }, {
    path: "/en/flights",
    component: _0e6e8dac,
    name: "flights___en"
  }, {
    path: "/en/giftcard",
    component: _a91e2e66,
    name: "giftcard___en"
  }, {
    path: "/en/holidays",
    component: _dbc92c30,
    name: "holidays___en"
  }, {
    path: "/en/hotels",
    component: _40d158e8,
    name: "hotels___en"
  }, {
    path: "/en/mice",
    component: _e39219ea,
    name: "mice___en"
  }, {
    path: "/en/visa",
    component: _b2ead6e4,
    name: "visa___en"
  }, {
    path: "/es/blogs",
    component: _4b8c0aba,
    name: "blogs___es"
  }, {
    path: "/es/cars",
    component: _41415428,
    name: "cars___es"
  }, {
    path: "/es/cruises",
    component: _2c194c27,
    name: "cruises___es"
  }, {
    path: "/es/flights",
    component: _0e6e8dac,
    name: "flights___es"
  }, {
    path: "/es/giftcard",
    component: _a91e2e66,
    name: "giftcard___es"
  }, {
    path: "/es/holidays",
    component: _dbc92c30,
    name: "holidays___es"
  }, {
    path: "/es/hotels",
    component: _40d158e8,
    name: "hotels___es"
  }, {
    path: "/es/mice",
    component: _e39219ea,
    name: "mice___es"
  }, {
    path: "/es/visa",
    component: _b2ead6e4,
    name: "visa___es"
  }, {
    path: "/en/about/contact",
    component: _9b6740f8,
    name: "about-contact___en"
  }, {
    path: "/en/about/privacy-policy",
    component: _50bfdbe3,
    name: "about-privacy-policy___en"
  }, {
    path: "/en/about/refunds-policy",
    component: _09628ce0,
    name: "about-refunds-policy___en"
  }, {
    path: "/en/about/terms-of-use",
    component: _c219753a,
    name: "about-terms-of-use___en"
  }, {
    path: "/en/account/bookings",
    component: _4b53172e,
    name: "account-bookings___en"
  }, {
    path: "/en/account/hv-credits",
    component: _b15a8ef2,
    name: "account-hv-credits___en"
  }, {
    path: "/en/account/login",
    component: _645ff726,
    name: "account-login___en"
  }, {
    path: "/en/account/manage-payment-method",
    component: _6017f174,
    name: "account-manage-payment-method___en"
  }, {
    path: "/en/account/manage-travellers",
    component: _445dfb00,
    name: "account-manage-travellers___en"
  }, {
    path: "/en/account/profile",
    component: _d5e518a6,
    name: "account-profile___en"
  }, {
    path: "/en/account/promo-codes",
    component: _c26efb28,
    name: "account-promo-codes___en"
  }, {
    path: "/en/account/register",
    component: _6084214f,
    name: "account-register___en"
  }, {
    path: "/en/account/reviews",
    component: _46df55c2,
    name: "account-reviews___en"
  }, {
    path: "/en/account/wallet",
    component: _2bddfeb6,
    name: "account-wallet___en"
  }, {
    path: "/en/account/wishlist",
    component: _96a1711e,
    name: "account-wishlist___en"
  }, {
    path: "/en/flights/listing",
    component: _3f3a2dde,
    name: "flights-listing___en"
  }, {
    path: "/en/holidays/listing",
    component: _7eb3361d,
    name: "holidays-listing___en"
  }, {
    path: "/en/holidays/weekend-gateways",
    component: _077c7a72,
    name: "holidays-weekend-gateways___en"
  }, {
    path: "/es/about/contact",
    component: _9b6740f8,
    name: "about-contact___es"
  }, {
    path: "/es/about/privacy-policy",
    component: _50bfdbe3,
    name: "about-privacy-policy___es"
  }, {
    path: "/es/about/refunds-policy",
    component: _09628ce0,
    name: "about-refunds-policy___es"
  }, {
    path: "/es/about/terms-of-use",
    component: _c219753a,
    name: "about-terms-of-use___es"
  }, {
    path: "/es/account/bookings",
    component: _4b53172e,
    name: "account-bookings___es"
  }, {
    path: "/es/account/hv-credits",
    component: _b15a8ef2,
    name: "account-hv-credits___es"
  }, {
    path: "/es/account/login",
    component: _645ff726,
    name: "account-login___es"
  }, {
    path: "/es/account/manage-payment-method",
    component: _6017f174,
    name: "account-manage-payment-method___es"
  }, {
    path: "/es/account/manage-travellers",
    component: _445dfb00,
    name: "account-manage-travellers___es"
  }, {
    path: "/es/account/profile",
    component: _d5e518a6,
    name: "account-profile___es"
  }, {
    path: "/es/account/promo-codes",
    component: _c26efb28,
    name: "account-promo-codes___es"
  }, {
    path: "/es/account/register",
    component: _6084214f,
    name: "account-register___es"
  }, {
    path: "/es/account/reviews",
    component: _46df55c2,
    name: "account-reviews___es"
  }, {
    path: "/es/account/wallet",
    component: _2bddfeb6,
    name: "account-wallet___es"
  }, {
    path: "/es/account/wishlist",
    component: _96a1711e,
    name: "account-wishlist___es"
  }, {
    path: "/es/flights/listing",
    component: _3f3a2dde,
    name: "flights-listing___es"
  }, {
    path: "/es/holidays/listing",
    component: _7eb3361d,
    name: "holidays-listing___es"
  }, {
    path: "/es/holidays/weekend-gateways",
    component: _077c7a72,
    name: "holidays-weekend-gateways___es"
  }, {
    path: "/en/account/bookings/:id",
    component: _22cf05de,
    name: "account-bookings-id___en"
  }, {
    path: "/en/holidays/listing/:id",
    component: _7ee21bc5,
    name: "holidays-listing-id___en"
  }, {
    path: "/es/account/bookings/:id",
    component: _22cf05de,
    name: "account-bookings-id___es"
  }, {
    path: "/es/holidays/listing/:id",
    component: _7ee21bc5,
    name: "holidays-listing-id___es"
  }, {
    path: "/en/blogs/:id",
    component: _3b9d18bc,
    name: "blogs-id___en"
  }, {
    path: "/en/giftcard/:id",
    component: _3bccba75,
    name: "giftcard-id___en"
  }, {
    path: "/es/blogs/:id",
    component: _3b9d18bc,
    name: "blogs-id___es"
  }, {
    path: "/es/giftcard/:id",
    component: _3bccba75,
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
