import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID bc2a7c24c3eabacbe6554246829d90be1b6b3e11cf271559f643a53f626e602e"
  }
});
