import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID de669458b5837bacb9765a660efcbd8e02609e1e7d1edd6ba88fd37cabe04b77'
    }
})