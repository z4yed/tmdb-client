import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_TMDB_API_BASE_URL,
});

const makeApiCall = async (
  url,
  method = "get",
  payload = null,
  headers = {}
) => {
  try {
    const response = await apiClient({
      url,
      method,
      data: payload,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Fetch Error Occurred:", error);
    throw error;
  }
};

export default makeApiCall;
