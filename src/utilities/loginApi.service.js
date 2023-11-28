import axios from "axios";
const rootUrl = import.meta.env.VITE_APP_BASE_API_URL;

export class LoginApiService {
  static async postData(url, data) {
    const response = await axios.post(`${rootUrl}/${url}`, data);
    return response;
  }

  static async getData(url) {
    const response = await axios.get(`${rootUrl}/${url}`);
    return response;
  }
}
