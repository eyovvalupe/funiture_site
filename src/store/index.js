import { _userinfo } from "@/api/api";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    token: "",
    userInfo: {},
    language: localStorage.getItem('language') || 'en',
    cartItems: JSON.parse(localStorage.getItem('watchList') || '[]')
  },
  mutations: {
    setToken(state, data) {
      state.token = data;
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setLanguage(state, lang) {
      state.language = lang;
      localStorage.setItem('language', lang);
    },
    updateCartItems(state, items) {
      state.cartItems = items;
      localStorage.setItem('watchList', JSON.stringify(items));
    }
  },
  actions: {
      reset({commit}) {
          commit('setToken', '');
          commit('setUserInfo', '');
      },
      updateUserInfo({ commit }) {
        // 更新个人信息
        return new Promise((resolve) => {
          _userinfo()
            .then((res) => {
              console.log("--用户信息", res.data);
              if (res.code == 200 && res.data) {
                commit("setUserInfo", res.data || {});
                resolve(res.data);
              } else {
                resolve(false);
              }
            })
            .catch(() => resolve(false));
        });
      },
  },
  plugins: [
    createPersistedState({
      key: 'furniture',
      paths: ['token', 'userInfo'],
      storage: window.localStorage,
    })
  ]
});
