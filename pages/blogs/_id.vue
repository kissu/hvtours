<template>
  <div>

    <div class="theme-hero-area theme-hero-area-half">
      <div class="theme-hero-area-bg-wrap">
        <div class="theme-hero-area-bg" style="background-image:url('https://www.happyvoyaging.com/themes/mmpt21/assets/img/new-york-city-city-street-cars-501334_1500x800.jpeg');"></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-half"></div>
        <div class="theme-hero-area-inner-shadow"></div>
      </div>

      <div class="theme-hero-area-body">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 theme-page-header-abs">
              <div class="theme-page-header theme-page-header-lg">
                <h1 class="theme-page-header-title">{{blogs.response.title}}</h1>
                <p class="theme-page-header-subtitle">posted 5 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="theme-page-section _pb-30 theme-page-section-gray theme-page-section-xl">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="theme-blog-post">

                <div v-html="blogs.response.description" class="blogdesc"></div>
              
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="theme-page-section theme-page-section-xl">
      <div class="container">
        <div class="theme-page-section-header">
          <h5 class="theme-page-section-title">Further Reading</h5>
          <p class="theme-page-section-subtitle">In etiam magnis scelerisque blandit</p>
        </div>
        <div class="theme-inline-slider row" data-gutter="10">
            <no-ssr> 

            </no-ssr>     
        </div>
      </div>
    </div>

  </div>    
</template>

<script>
export default {
   ssr: false,
    data(){
            return {
                blogs: []
            }
        },
        async fetch() {
            const blogslug = this.$route.params.id
            const blogid = blogslug.split("-")[0]
            const response = await fetch('https://www.happyvoyaging.com/api/blog/detail?id='+blogid+'')
            this.blogs = await response.json()
        }

}
</script>

<style>

.blogdesc img {
    vertical-align: middle;
    min-width: -webkit-fill-available!important;
    max-width: -webkit-fill-available!important;
}

</style>