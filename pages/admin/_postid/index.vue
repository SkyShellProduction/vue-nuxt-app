<template>
    <div>
        <NewPostForm @submit="onSubmit" :postEdit="post"/>
    </div>
</template>
<script>
import NewPostForm from '@/components/admin/NewPostForm.vue';
import axios from 'axios';
export default {
    components: {
        NewPostForm
    },
    layout: 'admin',
    asyncData(context) {
        return axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts/${context.params.postid}.json`)
        .then(res => {
            return {
                post: {...res.data, id: context.params.postid}
            }
        })
        .catch(e => context.error(e))
    },
    methods: {
        onSubmit (post) {
            this.$store.dispatch('editPost', post)
            .then(()=>{
                this.$router.push('/admin');
            })
        }
    }

}
</script>