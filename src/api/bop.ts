import axios from "axios";
import { useAuthStore } from "../store/auth";
import { REST_API } from "../constants/constants";


const api = axios.create({
    baseURL: REST_API,
});


api.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    config.headers = {
        Authorization: `Bearer ${token}`
    }
    return config;
});

export default api;