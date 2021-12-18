import axios from 'axios'

const KEY = 'AIzaSyBvh52H-yNDgrEKPH0taF9itDFszeQ_fYQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    }
})