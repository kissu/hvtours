<template>
<div>

<div class="theme-hero-area">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg-pattern theme-hero-area-bg-pattern-ultra-light"></div>
        <div class="theme-hero-area-grad-mask theme-hero-area-grad-mask-i"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="theme-page-section _pt-150 _pb350 _pv-mob-50">
        </div>
      </div>
    </div>

    <div class="container carouselonback">
       
       <no-ssr> 
    <carousel :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:1,nav:false},600:{items:1,nav:false,height:500}}">

      <div class="theme-inline-slider-item">
          <div class="banner _h-60vh _br-5 banner-">
              <div class="banner-bg" style="background-image: url('https://happyvoyaging.com/uploads/images/slider/1r9f3crx2xa80g4ooc.jpg');">
              </div> 
              <div class="banner-mask banner-mask-half"></div> 
              <a href="#" class="banner-link"></a> 
            </div>
        </div>

        <div class="theme-inline-slider-item">
          <div class="banner _h-60vh _br-5 banner-">
              <div class="banner-bg" style="background-image: url('https://happyvoyaging.com/uploads/images/slider/6m2w02ycs408gkogks.jpg');">
              </div> 
              <div class="banner-mask banner-mask-half"></div> 
              <a href="#" class="banner-link"></a> 
 
            </div>
        </div>

        <div class="theme-inline-slider-item">
          <div class="banner _h-60vh _br-5 banner-">
              
              <div class="banner-bg" style="background-image: url('https://happyvoyaging.com/uploads/images/slider/1is0d63rwdokgck0kc.jpg');">
              </div> 
              <div class="banner-mask banner-mask-half"></div> 
              <a href="#" class="banner-link"></a> 
            </div>
        </div>

    </carousel>
    </no-ssr>

     </div>     

</div>  
</template>

<script>
export default {

}
</script>

<style scoped>

._h-100vh {
    height: 95vh !important;
}

.theme-hero-area-grad-mask {
    background: -webkit-linear-gradient(
135deg
, #00587e, #0093d2);
    background: -moz-linear-gradient(135deg, #00587e, #0093d2);
    background: -o-linear-gradient(135deg, #00587e, #0093d2);
    background: -ms-linear-gradient(135deg, #00587e, #0093d2);
    background: linear-gradient(
-45deg
, #00587e, #0093d2);
    z-index: 3;
}

.carouselonback{
  margin-top: -350px;
  min-height: 500px;
}

._pb350{
  padding-bottom: 350px!important;
}

</style>