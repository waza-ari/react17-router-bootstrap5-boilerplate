import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
let headers = {}

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`
}

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: headers
});

export default axiosInstance