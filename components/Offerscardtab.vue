<template>
  
      <div class="theme-page-section theme-page-section theme-page-section-light">
      <div class="container">
        <div class="theme-page-section-header _mb-20 theme-page-section-header-dark text-left">
          <h5 class="theme-page-section-title text-left">{{ $t('headings.exclusivedeals') }}</h5>
        </div>
        <div class="tabbable">
          <ul class="nav nav-tabs nav-line nav-left nav-dark nav-lg nav-mob-inline" role="tablist">
            <li class="active" role="presentation">
              <a aria-controls="TravelRoute-1" role="tab" data-toggle="tab" href="#Deals-1">Holidays</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-2" role="tab" data-toggle="tab" href="#Deals-2">Cars</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-3" role="tab" data-toggle="tab" href="#Deals-3">Cruises</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-4" role="tab" data-toggle="tab" href="#Deals-4">Flights</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-5" role="tab" data-toggle="tab" href="#Deals-5">Hotels</a>
            </li>
          </ul>
          <div class="tab-content _pt-20">
            <div class="tab-pane active" id="Deals-1" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">
 
                <no-ssr> 
                  <carousel :autoplay="true" :dots="false" :nav="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

                    <div v-for="touroffer in offers.off_tours" :key="touroffer.id" class="theme-inline-slider-item">
                        <div class="banner _h-33vh _br-5 banner-">
                            <div class="banner-bg" v-bind:style="`background-image:url('${touroffer.thumbnail}');`">
                            </div> 
                            <div class="banner-mask banner-mask-half"></div> 
                            <a href="#" class="banner-link"></a> 
                            <div class="banner-caption _ta-c banner-caption-bottom">
                                <h5 class="banner-title _tt-uc">{{ touroffer.title }}</h5> 
                                <p class="banner-subtitle">Top deals from most visited cities</p>
                            </div>
                          </div>
                      </div>

                  </carousel>
                </no-ssr>    

              </div>
            </div>
            <div class="tab-pane" id="Deals-2" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

                <no-ssr> 
                  <carousel :autoplay="true" :dots="false" :nav="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

                    <div v-for="caroffer in offers.off_cars" :key="caroffer.id" class="theme-inline-slider-item">
                        <div class="banner _h-33vh _br-5 banner-">
                            <div class="banner-bg" v-bind:style="`background-image:url('${caroffer.thumbnail}');`">
                            </div> 
                            <div class="banner-mask banner-mask-half"></div> 
                            <a href="#" class="banner-link"></a> 
                            <div class="banner-caption _ta-c banner-caption-bottom">
                                <h5 class="banner-title _tt-uc">{{ caroffer.title }}</h5> 
                                <p class="banner-subtitle">Top deals from most visited cities</p>
                            </div>
                          </div>
                      </div>

                  </carousel>
                </no-ssr>  

              </div>
            </div>
            <div class="tab-pane" id="Deals-3" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

                <no-ssr> 
                  <carousel :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

                    <div v-for="cruiseoffer in offers.off_cars" :key="cruiseoffer.id" class="theme-inline-slider-item">
                        <div class="banner _h-33vh _br-5 banner-">
                            <div class="banner-bg" v-bind:style="`background-image:url('${cruiseoffer.thumbnail}');`">
                            </div> 
                            <div class="banner-mask banner-mask-half"></div> 
                            <a href="#" class="banner-link"></a> 
                            <div class="banner-caption _ta-c banner-caption-bottom">
                                <h5 class="banner-title _tt-uc">{{ cruiseoffer.title }}</h5> 
                                <p class="banner-subtitle">Top deals from most visited cities</p>
                            </div>
                          </div>
                      </div>

                  </carousel>
                </no-ssr>        

              </div>
            </div>
            <div class="tab-pane" id="Deals-4" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

                <no-ssr> 
                  <carousel :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

                    <div v-for="flightoffer in offers.off_flights" :key="flightoffer.id" class="theme-inline-slider-item">
                        <div class="banner _h-33vh _br-5 banner-">
                            <div class="banner-bg" v-bind:style="`background-image:url('${flightoffer.thumbnail}');`">
                            </div> 
                            <div class="banner-mask banner-mask-half"></div> 
                            <a href="#" class="banner-link"></a> 
                            <div class="banner-caption _ta-c banner-caption-bottom">
                                <h5 class="banner-title _tt-uc">{{ flightoffer.title }}</h5> 
                                <p class="banner-subtitle">Top deals from most visited cities</p>
                            </div>
                          </div>
                      </div>

                  </carousel>
                </no-ssr> 

              </div>
            </div>
            <div class="tab-pane" id="Deals-5" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">
                  
                <no-ssr> 
                  <carousel :autoplay="false" :loop="false" :nav="false" :dots="false" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">

                    <div v-for="hoteloffer in offers.off_hotels" :key="hoteloffer.id" class="theme-inline-slider-item">
                        <div class="banner _h-33vh _br-5 banner-">
                            <div class="banner-bg" v-bind:style="`background-image:url('${hoteloffer.thumbnail}');`">
                            </div> 
                            <div class="banner-mask banner-mask-half"></div> 
                            <a href="#" class="banner-link"></a> 
                            <div class="banner-caption _ta-c banner-caption-bottom">
                                <h5 class="banner-title _tt-uc">{{ hoteloffer.title }}</h5> 
                                <p class="banner-subtitle">Top deals from most visited cities</p>
                            </div>
                          </div>
                      </div>

                  </carousel>
                </no-ssr> 

              </div>
            </div>
          </div> 
        </div>
      </div>
      </div>           

</template>

<script>

export default {
        data(){
            return {
                offers: []
            }
        },
        async fetch() {
            this.offers = await fetch('https://www.happyvoyaging.com/api/offers/listcustom?category[]=tours&category[]=flight&category[]=cars&category[]=cruise&category[]=rail&category[]=hotel').then((res) => res.json())
        }
    }
</script>

<style scoped>



</style>