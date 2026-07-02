import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-4kie.onrender.com/",
});

export default api;