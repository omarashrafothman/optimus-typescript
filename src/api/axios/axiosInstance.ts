import axios from "axios";


const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

//  request interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
//  response interceptor

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Axios Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
