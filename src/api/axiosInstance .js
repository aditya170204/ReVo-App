import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: " https://revo-reality-api.onrender.com/api/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Set up a request interceptor to add the token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhlNmE4ZDMwOTQ1ZWM5ZjY2ZTAzOGMiLCJuYW1lIjoiS2FzaGlmIiwicm9sZSI6InN1cF9hZG1pbiIsIm9yZ2FuaXphdGlvbklkIjoiNjY4ZTZhOGMzMDk0NWVjOWY2NmUwMzhhIiwiaWF0IjoxNzM4NzQwOTQ1fQ.w4K_SifjbR3RxNeW2zzW9iPQdj1Voc2bD38vfgDaVQo`; // Function to retrieve the token from wherever you store it (e.g., AsyncStorage, context, etc.)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
