const comments_data = [
    {
        id: 1,
        username: "admin",
        date: "Today, 2:30",
        comment: "Comentario "
    },
    {
        id: 2,
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg",
        username: "admin",
        date: "Today, 3:30",
        comment: "Comentario "
    },
    {
        id: 3,
        username: "admin",
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m104.jpg",
        date: "Today, 4:30",
        comment: "Comentario "
    },
];

new Vue({
    el: "#comments_block",
    data: {
        comments: comments_data
    },
    methods: {
        addComment: function ({username, comment}) {
            comments_data.push({
                id: comments_data.length + 1,
                username: username,
                comment: comment,
                date: "Today ..."
            })
        }
    }
});