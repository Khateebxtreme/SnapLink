//will hold the custom axios instance which can also have request/response interceptors
import axios from "axios";

export default axios.create({
  baseURL : import.meta.env.VITE_BACKEND_URL,
})


//import.meta.VITE_BACKEND_URL