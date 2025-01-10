import { BASE_URL } from "@/config";
import store from "@/store";
import axios from "axios";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  transformRequest: [
    function (data, headers) {
      if (headers["Content-Type"] == "multipart/form-data") return data;
      return JSON.stringify(data);
    },
  ],
});

instance.interceptors.request.use(
    function (config) {
      config.sslVerify = false;
      // config.headers["deviceId"] = store.state.deviceId;
      const token = store.state.token;
      if (token) {
        config.headers.Authorization = token;
      }
      if (config?.custom?.auth && !token) {
        console.error("--失效api", config.url);
        throw {
          message: "当前 token 已失效，请重新登录",
        };
        return;
      }
      config.headers.lang = "EN";
      config.headers["Content-Type"] = "application/json";
      if (config && config.custom && config.custom["Content-Type"]) {
        config.headers["Content-Type"] = config.custom["Content-Type"];
      }
      if (config && config.custom && config.custom["responseType"]) {
        config.headers["responseType"] = config.custom["responseType"];
      }
      // console.log(`--- 请求 ${config.url}  ---`, config.data);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // 添加响应拦截器
//   instance.interceptors.response.use(
//     function (response) {
//       let res = response.data || {};
//       const custom = response.config?.custom;
//       if (res.code != 200) {
//         if (res.code == 401) {
//           if (location.href.includes("/login")) {
//             return;
//           } else {
//             store.dispatch("reset");
//             return;
//           }
//         }
//         if(res.message == 'fund_password_wrong'){
//           res.message = t('trade.stock_opening_trade_pw_err')
//         }
//         if (custom.toast) {
//           setTimeout(() => {
//             message("error", res.message || "服务端异常");
//           }, 600);
//         }
//         return Promise.reject(res);
//       }
//       return res || {};
//     },
//     function (error) {
//       if (error?.config?.custom?.retry) {
//         if (!error.config) return Promise.reject(error);
//         error.config._retryTimes = error.config._retryTimes
//           ? error.config._retryTimes + 1
//           : 1;
//         if (error.config._retryTimes > 3) return Promise.reject(error); // 重试3次
//         try {
//           error.config.data = JSON.parse(error.config.data);
//         } catch { }
//         return instance(error.config);
//       } else {
//         message("error", error.message || "网络异常,请重试");
//         return Promise.reject(error);
//       }
//     }
//   );
  
  export default instance;