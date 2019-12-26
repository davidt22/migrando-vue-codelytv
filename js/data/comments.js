import {guid} from '../helpers/index.js'

export default [
    {
        id: guid(),
        username: "david",
        date: moment("2018-01-25").valueOf(),
        comment: "Comentario "
    },
    {
        id: guid(),
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m105.jpg",
        username: "paco",
        date: moment("2018-03-25").valueOf(),
        comment: "Comentario "
    },
    {
        id: guid(),
        username: "luis",
        avatar: "http://demos.themes.guide/bodeo/assets/images/users/m104.jpg",
        date: moment("2018-05-25").valueOf(),
        comment: "Comentario "
    },
];