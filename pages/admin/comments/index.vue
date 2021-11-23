<template>
    <div>
        <client-only>
        <CommentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
            <tbody slot="tbody" v-if="comments">
                <tr v-for="comment in comments" :key="comment.id">
                    <td><span>{{comment.name}}</span></td>
                    <td><span>{{comment.text}}</span></td>
                    <td>
                        <span :class="['status', comment.publish ? 'true' : 'false']">{{comment.publish ? 'publish' : 'hidden'}}</span>
                    </td>
                     <td><span @click="changeComment(comment)">Change Status</span></td>
                     <td><span @click="deleteComment(comment.id)">Delete</span></td>
                </tr>
            </tbody>
        </CommentTable>
        </client-only>
    </div>
</template>
<script>
import NewPostForm from '@/components/admin/NewPostForm.vue';
import CommentTable from '@/components/admin/CommentTable.vue';
import axios from 'axios';
export default {
    components: {
        NewPostForm,
        CommentTable
    },
    layout: 'admin',
    data () {
      return {
          comments: []
       }
    },
    mounted () {
       this.loadComments()
    },
    methods: {
        loadComments () {
            axios.get(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/comments.json`)
            .then(res => {
                let commentsRes = [];
                Object.keys(res.data).forEach(item => {
                    const comment = res.data[item];
                    commentsRes.push({...comment, id: item})
                })
                this.comments = commentsRes;
            })
        },
        changeComment (comment) {
           comment.publish = !comment.publish;  
           axios.put(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/comments/${comment.id}.json`, comment)
        },
        deleteComment (id) {
           axios.delete(`https://blog-nuxt-5df02-default-rtdb.firebaseio.com/comments/${id}.json`)
           .then(() => {
              this.loadComments();
           })
        },
    }

}
</script>