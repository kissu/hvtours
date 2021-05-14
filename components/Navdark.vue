<template>

    <nav class="navbar navbar-default navbar-theme navbar-theme-abs navbar-theme-border" id="main-nav">
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
              <img src="https://www.happyvoyaging.com/uploads/global/logo.png" alt="Happy Voyaging" title="Happy Voyaging"/>
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

              
              <li class="navbar-nav-item-user dropdown">
                <a class="dropdown-toggle" href="/account/login" role="button" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-user-circle-o navbar-nav-item-user-icon"></i>{{ $t('menu.myaccount') }}
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

}

}
</script>

<style>


</style>