<template>
    <section class="not-found">
        <div class="container">
           <div class="not-found-wrapper">
                <p>Page Not Found</p>
                <nuxt-link to="/">Back to main page</nuxt-link>
           </div>
        </div>
    </section>
</template>
<style lang="scss">
    .not-found-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80vh;
    }
</style>