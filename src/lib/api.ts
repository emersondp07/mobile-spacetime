import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.20.170.67:3334'
})