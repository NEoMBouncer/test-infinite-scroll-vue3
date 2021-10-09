import axios from "axios";

// const getPosts = (number) => {
//     return axios.get('https://randomuser.me/api/?results=9',)
//         .then(res => {
//             return res.data.results.map((item) => ({
//                 name: item.name.first + ' ' + item.name.last,
//                 email: item.email,
//                 imageUrl: item.picture.large //large, medium, thumbnail
//             }))
//         }).catch(error => {
//             console.log(error);
//         })
// }
// export default getPosts

var names = ['Matt Maribojoc', 'Lebron James', 'Bill Gates', 'Childish Gambino'] // used to generate posts for this tutorial

const getPosts = (number) => {
    // generate a number of posts
    // in a real setting, this would be a database call or algorithm

    let ret = []

    for (var i = 0; i < number; i++) {
        ret.push({
            name: names[i % names.length],
            email: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'
        })
    }

    return ret
}

export default getPosts