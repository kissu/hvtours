import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f03f26be = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _716e603a = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _9c5e70ba = () => interopDefault(import('../pages/cars/index.vue' /* webpackChunkName: "pages/cars/index" */))
const _a88d29e0 = () => interopDefault(import('../pages/cruises/index.vue' /* webpackChunkName: "pages/cruises/index" */))
const _e3e2a6d6 = () => interopDefault(import('../pages/flights/index.vue' /* webpackChunkName: "pages/flights/index" */))
const _1fd4a704 = () => interopDefault(import('../pages/giftcard/index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _067f281f = () => interopDefault(import('../pages/holidays/index.vue' /* webpackChunkName: "pages/holidays/index" */))
const _491998fa = () => interopDefault(import('../pages/hotels/index.vue' /* webpackChunkName: "pages/hotels/index" */))
const _60a864c2 = () => interopDefault(import('../pages/mice/index.vue' /* webpackChunkName: "pages/mice/index" */))
const _78fc0645 = () => interopDefault(import('../pages/visa/index.vue' /* webpackChunkName: "pages/visa/index" */))
const _31ec7e6d = () => interopDefault(import('../pages/about/contact.vue' /* webpackChunkName: "pages/about/contact" */))
const _2758564c = () => interopDefault(import('../pages/about/privacy-policy.vue' /* webpackChunkName: "pages/about/privacy-policy" */))
const _d23a9af2 = () => interopDefault(import('../pages/about/refunds-policy.vue' /* webpackChunkName: "pages/about/refunds-policy" */))
const _bb61dfcc = () => interopDefault(import('../pages/about/terms-of-use.vue' /* webpackChunkName: "pages/about/terms-of-use" */))
const _3e5fe8c0 = () => interopDefault(import('../pages/account/bookings/index.vue' /* webpackChunkName: "pages/account/bookings/index" */))
const _aaa2f984 = () => interopDefault(import('../pages/account/hv-credits.vue' /* webpackChunkName: "pages/account/hv-credits" */))
const _4d702356 = () => interopDefault(import('../pages/account/login.vue' /* webpackChunkName: "pages/account/login" */))
const _1b51c346 = () => interopDefault(import('../pages/account/manage-payment-method.vue' /* webpackChunkName: "pages/account/manage-payment-method" */))
const _5d750be9 = () => interopDefault(import('../pages/account/manage-travellers.vue' /* webpackChunkName: "pages/account/manage-travellers" */))
const _a5bd0754 = () => interopDefault(import('../pages/account/profile.vue' /* webpackChunkName: "pages/account/profile" */))
const _06e60e95 = () => interopDefault(import('../pages/account/promo-codes.vue' /* webpackChunkName: "pages/account/promo-codes" */))
const _4af12dc6 = () => interopDefault(import('../pages/account/register.vue' /* webpackChunkName: "pages/account/register" */))
const _16b74470 = () => interopDefault(import('../pages/account/reviews.vue' /* webpackChunkName: "pages/account/reviews" */))
const _5e74bedc = () => interopDefault(import('../pages/account/wallet.vue' /* webpackChunkName: "pages/account/wallet" */))
const _c1c75830 = () => interopDefault(import('../pages/account/wishlist.vue' /* webpackChunkName: "pages/account/wishlist" */))
const _574e3687 = () => interopDefault(import('../pages/flights/listing.vue' /* webpackChunkName: "pages/flights/listing" */))
const _f5a66558 = () => interopDefault(import('../pages/holidays/listing/index.vue' /* webpackChunkName: "pages/holidays/listing/index" */))
const _06a4111b = () => interopDefault(import('../pages/holidays/weekend-gateways/index.vue' /* webpackChunkName: "pages/holidays/weekend-gateways/index" */))
const _eba713f0 = () => interopDefault(import('../pages/account/bookings/_id.vue' /* webpackChunkName: "pages/account/bookings/_id" */))
const _1a7614bc = () => interopDefault(import('../pages/holidays/listing/_id.vue' /* webpackChunkName: "pages/holidays/listing/_id" */))
const _0d0121ea = () => interopDefault(import('../pages/blogs/_id.vue' /* webpackChunkName: "pages/blogs/_id" */))
const _37a89a6c = () => interopDefault(import('../pages/giftcard/_id.vue' /* webpackChunkName: "pages/giftcard/_id" */))

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
    component: _f03f26be,
    name: "index___en"
  }, {
    path: "/es",
    component: _f03f26be,
    name: "index___es"
  }, {
    path: "/en/blogs",
    component: _716e603a,
    name: "blogs___en"
  }, {
    path: "/en/cars",
    component: _9c5e70ba,
    name: "cars___en"
  }, {
    path: "/en/cruises",
    component: _a88d29e0,
    name: "cruises___en"
  }, {
    path: "/en/flights",
    component: _e3e2a6d6,
    name: "flights___en"
  }, {
    path: "/en/giftcard",
    component: _1fd4a704,
    name: "giftcard___en"
  }, {
    path: "/en/holidays",
    component: _067f281f,
    name: "holidays___en"
  }, {
    path: "/en/hotels",
    component: _491998fa,
    name: "hotels___en"
  }, {
    path: "/en/mice",
    component: _60a864c2,
    name: "mice___en"
  }, {
    path: "/en/visa",
    component: _78fc0645,
    name: "visa___en"
  }, {
    path: "/es/blogs",
    component: _716e603a,
    name: "blogs___es"
  }, {
    path: "/es/cars",
    component: _9c5e70ba,
    name: "cars___es"
  }, {
    path: "/es/cruises",
    component: _a88d29e0,
    name: "cruises___es"
  }, {
    path: "/es/flights",
    component: _e3e2a6d6,
    name: "flights___es"
  }, {
    path: "/es/giftcard",
    component: _1fd4a704,
    name: "giftcard___es"
  }, {
    path: "/es/holidays",
    component: _067f281f,
    name: "holidays___es"
  }, {
    path: "/es/hotels",
    component: _491998fa,
    name: "hotels___es"
  }, {
    path: "/es/mice",
    component: _60a864c2,
    name: "mice___es"
  }, {
    path: "/es/visa",
    component: _78fc0645,
    name: "visa___es"
  }, {
    path: "/en/about/contact",
    component: _31ec7e6d,
    name: "about-contact___en"
  }, {
    path: "/en/about/privacy-policy",
    component: _2758564c,
    name: "about-privacy-policy___en"
  }, {
    path: "/en/about/refunds-policy",
    component: _d23a9af2,
    name: "about-refunds-policy___en"
  }, {
    path: "/en/about/terms-of-use",
    component: _bb61dfcc,
    name: "about-terms-of-use___en"
  }, {
    path: "/en/account/bookings",
    component: _3e5fe8c0,
    name: "account-bookings___en"
  }, {
    path: "/en/account/hv-credits",
    component: _aaa2f984,
    name: "account-hv-credits___en"
  }, {
    path: "/en/account/login",
    component: _4d702356,
    name: "account-login___en"
  }, {
    path: "/en/account/manage-payment-method",
    component: _1b51c346,
    name: "account-manage-payment-method___en"
  }, {
    path: "/en/account/manage-travellers",
    component: _5d750be9,
    name: "account-manage-travellers___en"
  }, {
    path: "/en/account/profile",
    component: _a5bd0754,
    name: "account-profile___en"
  }, {
    path: "/en/account/promo-codes",
    component: _06e60e95,
    name: "account-promo-codes___en"
  }, {
    path: "/en/account/register",
    component: _4af12dc6,
    name: "account-register___en"
  }, {
    path: "/en/account/reviews",
    component: _16b74470,
    name: "account-reviews___en"
  }, {
    path: "/en/account/wallet",
    component: _5e74bedc,
    name: "account-wallet___en"
  }, {
    path: "/en/account/wishlist",
    component: _c1c75830,
    name: "account-wishlist___en"
  }, {
    path: "/en/flights/listing",
    component: _574e3687,
    name: "flights-listing___en"
  }, {
    path: "/en/holidays/listing",
    component: _f5a66558,
    name: "holidays-listing___en"
  }, {
    path: "/en/holidays/weekend-gateways",
    component: _06a4111b,
    name: "holidays-weekend-gateways___en"
  }, {
    path: "/es/about/contact",
    component: _31ec7e6d,
    name: "about-contact___es"
  }, {
    path: "/es/about/privacy-policy",
    component: _2758564c,
    name: "about-privacy-policy___es"
  }, {
    path: "/es/about/refunds-policy",
    component: _d23a9af2,
    name: "about-refunds-policy___es"
  }, {
    path: "/es/about/terms-of-use",
    component: _bb61dfcc,
    name: "about-terms-of-use___es"
  }, {
    path: "/es/account/bookings",
    component: _3e5fe8c0,
    name: "account-bookings___es"
  }, {
    path: "/es/account/hv-credits",
    component: _aaa2f984,
    name: "account-hv-credits___es"
  }, {
    path: "/es/account/login",
    component: _4d702356,
    name: "account-login___es"
  }, {
    path: "/es/account/manage-payment-method",
    component: _1b51c346,
    name: "account-manage-payment-method___es"
  }, {
    path: "/es/account/manage-travellers",
    component: _5d750be9,
    name: "account-manage-travellers___es"
  }, {
    path: "/es/account/profile",
    component: _a5bd0754,
    name: "account-profile___es"
  }, {
    path: "/es/account/promo-codes",
    component: _06e60e95,
    name: "account-promo-codes___es"
  }, {
    path: "/es/account/register",
    component: _4af12dc6,
    name: "account-register___es"
  }, {
    path: "/es/account/reviews",
    component: _16b74470,
    name: "account-reviews___es"
  }, {
    path: "/es/account/wallet",
    component: _5e74bedc,
    name: "account-wallet___es"
  }, {
    path: "/es/account/wishlist",
    component: _c1c75830,
    name: "account-wishlist___es"
  }, {
    path: "/es/flights/listing",
    component: _574e3687,
    name: "flights-listing___es"
  }, {
    path: "/es/holidays/listing",
    component: _f5a66558,
    name: "holidays-listing___es"
  }, {
    path: "/es/holidays/weekend-gateways",
    component: _06a4111b,
    name: "holidays-weekend-gateways___es"
  }, {
    path: "/en/account/bookings/:id",
    component: _eba713f0,
    name: "account-bookings-id___en"
  }, {
    path: "/en/holidays/listing/:id",
    component: _1a7614bc,
    name: "holidays-listing-id___en"
  }, {
    path: "/es/account/bookings/:id",
    component: _eba713f0,
    name: "account-bookings-id___es"
  }, {
    path: "/es/holidays/listing/:id",
    component: _1a7614bc,
    name: "holidays-listing-id___es"
  }, {
    path: "/en/blogs/:id",
    component: _0d0121ea,
    name: "blogs-id___en"
  }, {
    path: "/en/giftcard/:id",
    component: _37a89a6c,
    name: "giftcard-id___en"
  }, {
    path: "/es/blogs/:id",
    component: _0d0121ea,
    name: "blogs-id___es"
  }, {
    path: "/es/giftcard/:id",
    component: _37a89a6c,
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
