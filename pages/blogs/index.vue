<template>
  <div>
    <div class="theme-hero-area theme-hero-area-half">
      <div class="theme-hero-area-bg-wrap">
        <div
          class="theme-hero-area-bg"
          style="
            background-image: url('https://www.happyvoyaging.com/themes/mmpt21/assets/img/activity-adult-beach-beautiful-378152_1500x800.jpeg');
          "
        ></div>
        <div class="theme-hero-area-mask theme-hero-area-mask-half"></div>
        <div class="theme-hero-area-inner-shadow"></div>
      </div>
      <div class="theme-hero-area-body">
        <div class="container">
          <div class="theme-page-header theme-page-header-lg theme-page-header-abs">
            <h1 class="theme-page-header-title">Travel Inspirations</h1>
            <p class="theme-page-header-subtitle">Lastest news in travel industry</p>
          </div>
        </div>
      </div>
    </div>
    <div class="theme-page-section theme-page-section-xl theme-page-section-gray">
      <div class="container">
        <div class="row row-col-gap" data-gutter="20">
          <div v-for="blog in posts" :key="blog.id" class="col-md-3">
            <div class="theme-blog-item _br-4 theme-blog-item-full">
              <nuxt-link
                :to="{ path: `/${$i18n.locale}/blogs/${blog.id}` }"
                class="theme-blog-item-link"
              ></nuxt-link>
              <!-- <nuxt-link :to="`/blogs/${blog.id}-${blog.slug}`" class="theme-blog-item-link"></nuxt-link> -->
              <div class="banner _h-45vh banner- banner-animate banner-animate-zoom-in banner-animate-slow">
                <div class="banner-bg" :style="`background-image:url('${blog.thumbnail}');`"></div>
                <div class="banner-caption banner-caption-bottom banner-caption-grad">
                  <p class="theme-blog-item-time">{{ blog.day }}</p>
                  <h5 class="theme-blog-item-title">{{ blog.title }}</h5>
                  <p class="theme-blog-item-desc">{{ blog.description.substring(0, 65) + '....' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <infinite-loading v-if="posts.length" spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'Posts',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      posts: [],
      page: 1,
    }
  },
  computed: {
    url() {
      return 'https://www.happyvoyaging.com/api/blog/list'
    },
  },
  async created() {
    await this.fetchData()
  },
  methods: {
    async fetchData() {
      const res = await axios.get(this.url)
      this.posts = res.data.response.posts
    },
    infiniteScroll($state) {
      setTimeout(() => {
        this.page++
        axios
          .get(this.url)
          .then((res) => {
            if (res.data.response.posts.length > 1) {
              res.data.response.posts.forEach((item) => this.posts.push(item))
              // console.log(response)
              $state.loaded()
            } else {
              $state.complete()
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }, 1000)
    },
  },
}
</script>
