import CommentsItem from './CommentsItem.js'

const templateCommentsList = `
<div>
    <h3 class="mb-4">Comments</h3>
    <comments-item
        v-for="comment in comments"
        :key="comment.id" 
        :username="comment.username"
        :avatar="comment.avatar"
        :date="comment.date"
        :comment="comment.comment"
    ></comments-item>
</div>
`;

export default Vue.component('comments-list', {
    props: ['comments'],
    components: {
        CommentsItem
    },
    computed: {
        orderedComments: function () {
            return _.orderBy(this.comments, 'date', 'desc')
        }
    },
    template: templateCommentsList
});