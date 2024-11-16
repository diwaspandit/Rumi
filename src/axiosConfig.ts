import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://rumi-backend-wvba.onrender.com', // Replace with your base URL
    // withCredentials: true, // Enables sending cookies with requests
  });
  // Export the Axios instance for use in your application
export default axiosInstance;
