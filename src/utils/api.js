import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = getToken();

async function getToken() {
  const token = import.meta.env.VITE_APP_TMDB_TOKEN;
  if (!token) {
    throw new Error("API-токен не найден. Пожалуйста, предоставьте действительный токен.");
  }
  return token;
}

export async function fetchDataFromApi(url, params) {
  try {
    const headers = {
      Authorization: `Bearer ${await TMDB_TOKEN}`,
    };

    const { data } = await axios.get(`${BASE_URL}${url}`, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
