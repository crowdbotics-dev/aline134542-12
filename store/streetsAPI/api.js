import axios from "axios"
const streetsAPI = axios.create({
  baseURL: "https://localhost.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function streetsapi_get_streets_list(payload) {
  return streetsAPI.get(`/streets`, { params: { city: payload.city } })
}
export const apiService = { streetsapi_get_streets_list }
