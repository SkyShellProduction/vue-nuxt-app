<template>
    <div>
        <NewPostForm @submit="onSubmit"/>
    </div>
</template>
<script>
import NewPostForm from '@/components/admin/NewPostForm.vue';
export default {
    components: {
        NewPostForm
    },
    layout: 'admin',
    methods: {
        onSubmit (post) {
            // console.log('post added', post);
            this.$store.dispatch('addPost', post)
            .then(()=>{
                this.$router.push('/admin');
            })
        }
    }

}
</script>