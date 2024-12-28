import axios from "axios";

const instance = axios.create({
  // From this File we will fetch the data from api
  baseURL: "https://fakestoreapi.com",
});

export default instance;
