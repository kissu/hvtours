<template>
  
      <div class="theme-page-section theme-page-section theme-page-section-light">
      <div class="container">
        <div class="theme-page-section-header _mb-20 theme-page-section-header-dark text-left">
          <h5 class="theme-page-section-title text-left">{{ $t('headings.explorepoproute') }}</h5>
        </div>
        <div class="tabbable">
          <ul class="nav nav-tabs nav-line nav-left nav-dark nav-lg nav-mob-inline" role="tablist">
            <li class="active" role="presentation">
              <a aria-controls="TravelRoute-1" role="tab" data-toggle="tab" href="#TravelRoute-1">Our Recommendation</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-2" role="tab" data-toggle="tab" href="#TravelRoute-2">Honeymoon</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-3" role="tab" data-toggle="tab" href="#TravelRoute-3">World Wonders</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-4" role="tab" data-toggle="tab" href="#TravelRoute-4">Adventure</a>
            </li>
            <li role="presentation">
              <a aria-controls="TravelRoute-5" role="tab" data-toggle="tab" href="#TravelRoute-5">Beaches</a>
            </li>
          </ul>
          <div class="tab-content _pt-20">
            <div class="tab-pane active" id="TravelRoute-1" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">
 
                 <tourcardcarousel />

              </div>
            </div>
            <div class="tab-pane" id="TravelRoute-2" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

            

              </div>
            </div>
            <div class="tab-pane" id="TravelRoute-3" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

                         

              </div>
            </div>
            <div class="tab-pane" id="TravelRoute-4" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">

             

              </div>
            </div>
            <div class="tab-pane" id="TravelRoute-5" role="tab-panel">
              <div class="theme-inline-slider row" data-gutter="10">
                  
           

              </div>
            </div>
          </div> 
        </div>
      </div>
      </div>           

</template>

<script>
export default {

}
</script>

<style>

</style>