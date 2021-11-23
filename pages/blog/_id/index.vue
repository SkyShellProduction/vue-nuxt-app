<template>
    <div class="wrapper-content wrapper-content--fixed">
        <Post :post="post"/>
        <client-only>
            <Comments :comments="comments"/>     
            <NewComment :postId="$route.params.id"/>
        </client-only>
   </div>
</template>
<script>
import Post from '@/components/blog/Post.vue';
import NewComment from '@/components/comments/NewComment.vue';
import Comments from '@/components/comments/Comments.vue';
import axios from 'axios';
export default {
  components: { Post, NewComment, Comments },
    head () {
      return {
         title: this.post.title,
         meta: [
            {hid: 'og:title', name: 'og:title', content: this.post.title},
            {hid: 'description', name: 'description', content: this.post.descr},
            {hid: 'og:description', name: 'og:description', content: this.post.descr},
            {hid: 'og:type', name: 'og:type', content: 'article'},
            {hid: 'og:image', name: 'og:image', content: `site.com/${this.post.img}`},
         ]
      }
    },
    async asyncData(context) {
        let [post, comments] = await Promise.all([
            axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
            axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/comments.json`)
        ])
        let commentsSorted = Object.values(comments.data).filter(item => item.postId == context.params.id && item.publish)
        return {
            post: post.data,
            comments: commentsSorted
        }
    },
}
</script>
<style lang="scss">
    .post{
        max-width: 900px;
        margin: 0 auto;
        &-header{
            text-align: center;
            margin-bottom: 30px;
            img{
                max-width: 400px;
                margin-bottom: 16px;
            }
            p{
                color: #999;
            }
        }
        &-body{
            text-align: left;
        }
    }

</style>