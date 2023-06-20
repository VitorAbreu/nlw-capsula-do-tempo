import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.16.116:3333'
})