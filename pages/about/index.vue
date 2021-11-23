<template>
   <div class="wrapper-content wrapper-content--fixed">
      <section class="about">
          <div class="container">
              <h1 class="title">About my blog:</h1>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <Intro title="lorem is it" />
              <img src="@/assets/img/about.jpg" alt="">
              <!-- Если что-то не поддерживает ssr, можно использовать тэг no-ssr -->
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
      </section>
      
   </div>
</template>
<script>

export default {
     head () {
      return {
         title: 'About My SSR BLOG',
         meta: [
            {hid: 'og:title', name: 'og:title', content: 'About My SSR BLOG'},
            {hid: 'description', name: 'description', content: 'About My SSR BLOG'},
            {hid: 'og:description', name: 'og:description', content: 'About My SSR BLOG'},
            {hid: 'og:type', name: 'og:type', content: 'site'},
         ]
      }
   },
}
</script>
<style lang="scss">
    .about{
        text-align: center;
        p{
            margin-bottom: 10px;
        }
    }
</style>