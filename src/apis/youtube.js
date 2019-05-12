import axios from 'axios'

const KEY = "AIzaSyCoQ1RBiESqbzHgQwHbcYKt30Mm1loQLw8"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})