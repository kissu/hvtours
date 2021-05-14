export default {
    head: {
      title: 'Happy Voyaging',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:"stylesheet", type:"text/css", href:'/css/bootstrap.css' },
        { rel:"stylesheet", type:"text/css", href:'/css/font-awesome.css' },
        { rel:"stylesheet", type:"text/css", href:'/css/lineicons.css' },
        { rel:"stylesheet", type:"text/css", href:'/css/styles.css' },
        { rel:"stylesheet", type:"text/css", href:'/css/weather-icons.css' },
      ],
      script: [
        { src: '/js/jquery.js', body: true },
        { src: '/js/moment.js', body: true },
        { src: '/js/bootstrap.js', body: true },
        { src: '/js/blur-area.js', body: true },
        { src: '/js/icheck.js', body: true },
        { src: '/js/magnific-popup.js', body: true },
        { src: '/js/ion-range-slider.js', body: true },
        { src: '/js/sticky-kit.js', body: true },
        { src: '/js/smooth-scroll.js', body: true },
        { src: '/js/fotorama.js', body: true },
        { src: '/js/typeahead.js', body: true },
        { src: '/js/quantity-selector.js', body: true },
        { src: '/js/countdown.js', body: true },
        { src: '/js/window-scroll-action.js', body: true },
        { src: '/js/custom.js', body: true }
      ]
    },

  

    css: [
      // CSS file in the project
       
    ],

    plugins: [
      {src: 'plugins/owl.js', ssr: false},
      {src: '~/plugins/axios'}, 
    ],


    buildModules: [
      // With options
      '@nuxtjs/vuetify',
    ],

    
  

    components: true,
    components: {
      dirs: [
        '~/components',
        '~/components/holidays',
        '~/components/car',
        '~/components/cruises',
        '~/components/flights',
        '~/components/hotels',
        '~/components/payments',
        '~/components/rail',
        '~/components/visa',
        '~/components/offers',
        '~/components/blog',
        '~/components/account',
      ]
    },

    modules: [
      '@nuxtjs/dotenv',
      '@nuxtjs/proxy',
      '@nuxtjs/auth',
      '@nuxt/http',
      ['nuxt-lazy-load', {
        images: true,
        videos: true,
        audios: true,
        iframes: true,
        native: false,
        polyfill: true,
        directiveOnly: false,
        loadingClass: 'isLoading',
        loadedClass: 'isLoaded',
        appendClass: 'lazyLoad',
        
        observerConfig: {
          // See IntersectionObserver documentation
        }
      }],
      '@nuxtjs/axios',
      ['nuxt-i18n', {
        locales: [
          {
            name: 'Espaneol',
            code: 'es',
            iso: 'es',
            file: 'es.js',
            icon: 'https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/SP.png',
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-IN',
            file: 'en.js',
            icon: 'https://www.happyvoyaging.com/themes/mmpt21/assets/img/flag_codes/US.png',
          }

        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'lang',
          alwaysRedirect: true,
          fallbackLocale: 'en'
        },
        vuex: {
          moduleName: 'i18n',
          mutations: {
            setLocale: 'I18N_SET_LOCALE',
            setMessages: false
          },
          preserveState: false
        },
        onLanguageSwitched: (previous, current) => {
          if (process.client) {
            const DATE = new Date();
            DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000);
            document.cookie = 'lang=' + current + '; path=/; expires=' + DATE.toUTCString();
          }
        }              
      }]
    ],


  axios: {
    baseURL: process.env.API_URL,
  },
    

  auth: {
    redirect: {
      login: '/account/login',
      logout: '/',
      callback: '/account/login',
      home: '/account/bookings'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth2/login",
            method: "post",
            propertyName: "data.token",
          },
          logout: false,
          user: false,
        },
        tokenType: '',
        tokenName: 'x-auth',
        autoFetchUser: false
      },
      google: {
        client_id:
          "105186153791-kcl1kb6a52162sddvhe1l7onhl3d5m15.apps.googleusercontent.com"
      },
    },
  },

  loading: true,
  loading: { color: '#ff6c2d', height: '7px'},

  }