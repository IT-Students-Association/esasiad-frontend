import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  auth: boolean;
  admin: boolean;
  isPwa: boolean;
}

const isPwa = window.matchMedia("(display-mode: standalone)").matches;

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    auth: false,
    admin: false,
    isPwa: isPwa,
  },
  getters: {
    isAuthenticated: (state) => {
      return state.auth;
    },
  },
  mutations: {
    setAuth: (state, auth) => {
      state.auth = auth;
    },
  },
  actions: {
    login({ commit }, formData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (formData.email == "test@test.pl" && formData.password == "admin") {
            commit("setAuth", true);
            resolve(true);
          } else {
            reject();
          }
        }, 1000);
      });
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
