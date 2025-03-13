// const BASE_URL = "https://join-privat-default-rtdb.europe-west1.firebasedatabase.app/";
const BASE_URL1 = "http://127.0.0.1:8000/auth/login/";

/**
 * Fetches and returns JSON data from a specified URL.
 *
 * @param {string} path - The path to the JSON file.
 */
async function loadData(path = "") {
  let response = await fetch(BASE_URL1 + path);
  let responseAsJson = await response.json();
  return responseAsJson;
}
