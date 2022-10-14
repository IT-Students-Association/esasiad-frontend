import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface State {
  count: number;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
