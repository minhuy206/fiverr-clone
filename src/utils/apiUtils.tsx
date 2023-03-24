import axios from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c";

const api = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api/",
});

interface Config {
  headers: any;
}

api.interceptors.request.use((config: Config) => {
  config.headers = {
    ...config.headers,
    tokenCybersoft: TOKEN_CYBERSOFT,
    token: localStorage.getItem("USER")
      ? `${JSON.parse(localStorage.getItem("USER") || "").token}`
      : "",
  };
  return config;
});

export default api;
