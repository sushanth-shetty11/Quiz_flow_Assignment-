const API_ENDPOINT = 'https://api.jsonserve.com/Uw5CrX'; // Your original API URL
const PROXY_URL = 'http://localhost:8080/'; // CORS proxy server URL

export const fetchQuizData = async () => {
  try {
    const response = await axios.get(PROXY_URL + API_ENDPOINT);
    return response.data; // Assuming the API returns { questions: [...] }
  } catch (error) {
    throw new Error('Failed to fetch quiz. Please try again later.');
  }
};
