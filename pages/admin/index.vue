<template>
    <div>
       <p style="text-align:center">По клику на картинку происходит редактирование!</p>
       <PostsList :posts="getPosts" :admin="true"/>
    </div>
     
</template>

<script>
export default {
  layout: 'admin',
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
