<template>

<li class="dropdown">

   <a v-for="locale in availableLocales" :key="locale.code" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
    <span class="_desk-h">Language</span>

    <img class="navbar-flag" :src="`${locale.icon}`" alt="Image Alternative text" title="Image Title"> {{ locale.name }}
    </a>

    <!-- load language list -->
    <langlist />   
</li>

</template>

<script>

export default {

      computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
        }
}

}

</script>

<style>

</style>