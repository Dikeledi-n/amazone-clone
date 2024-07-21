// axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/fir-e8f6e/us-central1/api", // Adjust the URL to match your backend server
});

export default instance;
