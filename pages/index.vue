<template>
   <div class="wrapper-content wrapper-content--fixed">
      <Promo/>
      <Intro title="My last posts:"/>
      <PostsList :posts="getPosts" />
      <Contacts />
   </div>
</template>

<script>
import Promo from '@/components/Promo.vue';
import Contacts from '@/components/Contacts.vue';
export default {
  components: {
    Promo,
    Contacts
  },
   head () {
      return {
         title: 'My SSR blog with NUXT.JS',
         meta: [
            {hid: 'og:title', name: 'og:title', content: 'My SSR blog with NUXT.JS'},
            {hid: 'description', name: 'description', content: 'My SSR blog with NUXT.JS'},
            {hid: 'og:description', name: 'og:description', content: 'My SSR blog with NUXT.JS'},
            {hid: 'og:type', name: 'og:type', content: 'site'},
         ]
      }
   },
   computed: {
      getPosts () {
         return this.$store.getters.getPosts;
      }
   },
   async fetch() {
      await this.$store.dispatch('setPosts');
   },

}
</script>
