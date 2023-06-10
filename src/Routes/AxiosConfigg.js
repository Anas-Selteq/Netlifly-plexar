import axios from "axios";

const BASE_URL_API = "http://172.187.153.193:8049/";
// const BASE_URL_API = "https://sop.zpexsolutions.com/";

const axiosConfig = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // "X-Requested-With": "XMLHttpRequest",
  },
});

axiosConfig.interceptors.response.use(function (response) {
  return response;
});

export default axiosConfig;
