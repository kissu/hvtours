<template>
  
    <ul class="dropdown-meganav-select-list-lang dropdown-menu">
        <li v-for="locale in availableLocales" :key="locale.code">
        <a :href="switchLocalePath(locale.code)" @click="$i18n.setLocale(locale.code, reload=true)"><img :src="`${locale.icon}`" >{{ locale.name }}</a>
        </li> 
    </ul>
  

</template>

<script>
export default {

      computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
      }

}
</script>

<style>

</style>