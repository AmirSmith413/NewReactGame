import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '4599207a490a4b12a23ac972fd6d51e6'
    }
})

