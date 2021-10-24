import axios from "axios";

/**
 * @mixin
 * @module api/get-people
 * @description API connector
 * @return {results} res.data Response data payload
 */
const getPosts = () => {
    return axios.get('https://randomuser.me/api/?results=12',)
        .then(res => {
            return res.data.results.map((item) => ({
                name: item.name.first + ' ' + item.name.last,
                email: item.email,
                imageUrl: item.picture.large //large, medium, thumbnail
            }))
        }).catch(error => {
            console.log(error);
        })
}
export default getPosts