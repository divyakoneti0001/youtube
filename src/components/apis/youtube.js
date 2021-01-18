import axios from 'axios';

const KEY = {add your key}
export default axios.create({

    baseURL : 'https://youtube.googleapis.com/youtube/v3',
    params :{
        part : 'snippet',
        type : 'video',
        maxResults : 40,
        key : KEY,
        




    }

})









