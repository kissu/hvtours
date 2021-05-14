<template>

    <nav class="navbar navbar-default navbar-inverse navbar-theme navbar-theme-abs navbar-theme-transparent mynav navbar-theme-border" id="main-nav">
      <div class="container-fluid">
        <div class="navbar-inner nav">
          <div class="navbar-header">
            <button class="navbar-toggle collapsed" data-target="#navbar-main" data-toggle="collapse" type="button" area-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img src="/logo.png" alt="Logo"/>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-main">
            <ul class="nav navbar-nav">
              <!--<li class="active dropdown">
                <a class="dropdown-toggle" href="/" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
              </li>-->
              <li class="dropdown">
                <a class="dropdown-toggle" href="/holidays" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.holidays') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/hotels" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.hotels') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/flights" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.flights') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/cars" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.taxi') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/cruise" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.cruises') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/charter" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.charters') }}</a>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" href="/visa" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('menu.visa') }}</a>
              </li>

            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span class="_desk-h">Currency</span>
                  <b>USD</b>
                </a>
                      <ul class="dropdown-meganav-select-list-currency dropdown-menu">
                        <li>
                          <a href="#">
                            <span>€</span>Euro
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>£</span>Pound sterling
                          </a>
                        </li>
                        <li class="active">
                          <a href="#">
                            <span>US$</span>U.S. dollar
                          </a>
                        </li>
                      </ul>

              </li>
              
                
              <LangSwitcher />  

              
              <li v-if="$auth.loggedIn" class="navbar-nav-item-user dropdown">
                <a class="dropdown-toggle" href="/account/login" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user-circle-o navbar-nav-item-user-icon"></i>{{ $t('menu.myaccount') }}
                </a>
                  <ul class="dropdown-menu">
                  <li>
                    <a href="/account/bookings">Bookings</a>
                  </li>
                  <li>
                    <a href="/account/promo-codes">Promo Codes</a>
                  </li>
                  <li>
                    <a href="/account/hv-credits">HV Credits</a>
                  </li>
                  <li>
                    <a href="/account/wishlist">Wishlist</a>
                  </li>
                  <li>
                    <a href="/account/reviews">Reviews</a>
                  </li>
                  <li>
                    <a href="" @click.prevent="logOut">Log Out</a>
                  </li>
                </ul>
              </li>
              <li v-else class="navbar-nav-item-user dropdown">
                  <a class="dropdown-toggle" href="/account/login" role="button" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-user-circle-o navbar-nav-item-user-icon"></i>{{ $t('menu.login') }}
                  </a>
 
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  
</template>

<script>
import Langlist from './langlist.vue'
export default {
  components: { Langlist },

  computed: {
  availableLocales () {
    return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
  },

  selectedlocales () {
    return this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
  }

},

methods: {
    logOut() {
      this.$store.dispatch("logOut");
      //this.$router.push("/");
      window.location.href = '/';
    }
  },

}
</script>

<style>

.mynav {
    background: linear-gradient( 
-45deg
 , #00587e, #0093d2);
    z-index: 3;
}


</style>