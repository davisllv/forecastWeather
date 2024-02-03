import axios from "axios"

const api = axios.create({
    method: "GET",
    baseURL: "https://api.hgbrasil.com/weather",
    params: {
        format: "json-cors",
        key: "00b8a5a2"
    }
})
export default api