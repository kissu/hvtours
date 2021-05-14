<template>
  
  <div id="blogapp" class="theme-page-section _pb-60 theme-page-section-lg">
      
      <div class="container">

          <div class="theme-page-section-header _ta-l">
              <h5 class="theme-page-section-title">{{ $t('headings.travelinspirations') }}</h5> 
              <p class="theme-page-section-subtitle">Our latest travel tips, hacks and insights</p> 
              <a href="/blogs" class="theme-page-section-header-link theme-page-section-header-link-rb">+ More Stories</a>
           </div> 

           <div data-gutter="10" class="row row-col-gap">
               <div v-for="blog in blogs.response.posts" :key="blog.id" class="col-md-3">
                   <div class="theme-blog-item _br-4 theme-blog-item-full">
                       <a :href="`/blogs/${blog.id}-${blog.slug}`" class="theme-blog-item-link"></a>
                     <!--  <nuxt-link :to="`/blogs/${blog.id}-${blog.slug}`" class="theme-blog-item-link"></nuxt-link> -->
                       <div class="banner _h-45vh banner- banner-animate banner-animate-zoom-in banner-animate-slow">
                           <div class="banner-bg" v-bind:style="`background-image:url('${blog.thumbnail}');`"></div> 
                           <div class="banner-caption banner-caption-bottom banner-caption-grad">
                               <p class="theme-blog-item-time">{{ blog.day }}</p> 
                               <h5 class="theme-blog-item-title">{{ blog.title }}</h5>
                                <p class="theme-blog-item-desc">{{ blog.description.substring(0,65)+"...." }}</p>
                            </div>
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
                blogs: []
            }
        },
        async fetch() {
            const response = await fetch('https://www.happyvoyaging.com/api/blog/list?limit=4')
            this.blogs = await response.json()
        }
    }
</script>

<style scoped>

._br-4 {
    border-radius: 5px !important;
}

</style>