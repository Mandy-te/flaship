import axios from "axios";

const api = axios.create({
	  baseURL: import.meta.env.VITE_API_URL, // API URL soti nan .env
	  });

	  export default api;
})
