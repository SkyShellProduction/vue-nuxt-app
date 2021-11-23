<template>
   <div class="wrapper-content wrapper-content--fixed">
      <Intro title="My posts:"/>
      <PostsList :posts="getPosts" />
   </div>
</template>

<script>
export default {
   computed: {
      getPosts () {
         return this.$store.getters.getPosts;
      }
   },
   head () {
      return {
         title: 'My Blog Page',
         meta: [
            {hid: 'og:title', name: 'og:title', content: 'My SSR blog with NUXT.JS'},
            {hid: 'description', name: 'description', content: 'My SSR blog with NUXT.JS'},
            {hid: 'og:description', name: 'og:description', content: 'My SSR blog with NUXT.JS'},
            {hid: 'og:type', name: 'og:type', content: 'site'},
         ]
      }
   },
   async fetch() {
      await this.$store.dispatch('setPosts');
   },
}
</script>
