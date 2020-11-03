import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8888",
    headers: {
        Accept: "application/json",
        "Contet-type": "application/json",
        //"Access-Control-Allow-Origin":"*",
    },
    withCredentials:false,
})