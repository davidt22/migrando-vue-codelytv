const comments_data = [
    {
        id: HELPERS.guid(),
        username: "david",
        date: moment("2018-01-25").valueOf(),
        comment: "Comentario "
    },
    {
        id: HELPERS.guid(),
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg",
        username: "paco",
        date: moment("2018-03-25").valueOf(),
        comment: "Comentario "
    },
    {
        id: HELPERS.guid(),
        username: "luis",
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m104.jpg",
        date: moment("2018-05-25").valueOf(),
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
                id: HELPERS.guid(),
                username: username,
                comment: comment,
                date: moment().valueOf()
            })
        }
    }
});