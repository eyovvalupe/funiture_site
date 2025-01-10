import http from "./request";
import axios from "axios";
import { BASE_URL } from "@/config";

const baseURL = BASE_URL;

export const _register = (data = {}) => {
  return http.post(`/api/user/register`, data, {
    custom: { auth: false, toast: false, retry: false },
  });
};

export const _login = (data = {}) => {
  return http.post(`/api/user/login`, data, {
    custom: { auth: false, toast: false, retry: false },
  });
};

export const _logout = (data = {}) => {
  return http.get(`/api/user/logout`, data, {
    custom: { auth: true, toast: false, retry: true },
  });
};

export const _userinfo = (data = {}) => {
  return http.get(`/api/user/infor`, data, {
    custom: { auth: true, toast: false, retry: true },
  });
};
