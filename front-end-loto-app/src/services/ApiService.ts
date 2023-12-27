import axios from "axios";

const baseURL = "http://localhost:7777";

const ApiService = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (er) {
    if (axios.isAxiosError(er)) {
      if (er.response) {
        if (er.response.status === 403) {
          localStorage.removeItem("persist:root");
          window.location.href = "/"; // Joga o usuario para a tela de login
        }
      }
    }

    return Promise.reject(er);
  }
);

export { ApiService };
