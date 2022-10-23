import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import router from "@/router";
import { MinifyUser, User } from "@/schemas";
import createPersistedState from "vuex-persistedstate";

export interface CommunityPost {
  user: MinifyUser;
  id: number;
  title: string;
  content: string;
  location: string;
  date: string;
  likesCount: number;
  commentsCount: number;
}

export interface HelpPost {
  user: MinifyUser;
  id: number;
  location: string;
  date: string;
  title: string;
}

export interface ReportPost {
  id: number;
  location: string;
  category: string;
  title: string;
  description: string;
}

const testowePosty: Array<CommunityPost> = [
  {
    user: {
      name: "Joanna ",
      surname: "Kowalska",
      points: 999,
    },
    id: 1,
    title: "Testowy post",
    content:
      "To jest testowy post zrobiony przez całkowicie żywego i prawdziwego użytkownika tej cudownej platformy jaką jest eSasiad. Kocham eSasiad! Oddam za niego życie!",
    location: "Testowe Osiedle",
    date: "1666293549", //unix timestamp
    likesCount: 20,
    commentsCount: 2,
  },
  {
    user: {
      name: "Joanna ",
      surname: "Kowalska",
      points: 999,
    },
    id: 2,
    title: "Testowy post",
    content:
      "To jest kolejny testowy post zrobiony przez całkowicie żywego i prawdziwego użytkownika tej cudownej platformy jaką jest eSasiad. Kocham eSasiad! Oddam za niego życie!",
    location: "Testowe Osiedle",
    date: "1666293650", //unix timestamp
    likesCount: 20,
    commentsCount: 2,
  },
];

const testoweHelpPosty: Array<HelpPost> = [
  {
    user: {
      name: "Joanna ",
      surname: "Kowalska",
      points: 999,
    },
    id: 1,
    location: "Testowe Osiedle",
    date: "1666293549", //unix timestamp
    title:
      "Mam bardzo prawdziwy problem - nie mogę przestać być na eSasiadzie! To jest takie świetne miejsce, że nie mogę się z niego wyrwać!",
  },
];

const testoweReportPosty: Array<ReportPost> = [
  {
    id: 1,
    location: "Testowe Osiedle",
    category: "Testowa Kategoria",
    title: "Testowy tytuł",
    description: "Bardzo ważny opis",
  },
];

const PointsTreshholds: Record<number, number> = {
  0: 100,
  1: 500,
  2: 1000,
  3: 2000,
};

const PointsTreshholdNames: Record<number, string> = {
  0: "Początkujący Sąsiad",
  1: "Zaawansowany Sąsiad",
  2: "Sąsiad z wykształceniem",
  3: "Potężny Sąsiad",
};

export interface State {
  apiLink: string;
  auth: boolean;
  admin: boolean;
  isPwa: boolean;
  user: User | null;
  communityPosts: Array<CommunityPost>;
  helpPosts: Array<HelpPost>;
  reportPosts: Array<ReportPost>;
  pointsThreshold: Record<number, number>;
  pointsThresholdNames: Record<number, string>;
}

const isPwa = window.matchMedia("(display-mode: standalone)").matches;

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    apiLink: "https://api.e-sasiad.pl/api/",
    auth: false,
    admin: false,
    isPwa: isPwa,
    user: null,
    communityPosts: testowePosty,
    helpPosts: testoweHelpPosty,
    reportPosts: testoweReportPosty,
    pointsThreshold: PointsTreshholds,
    pointsThresholdNames: PointsTreshholdNames,
  },
  getters: {
    isAuthenticated: (state) => {
      return state.auth;
    },
    getRank: (state) => (points: number) => {
      let rank = 0;
      for (let i = 0; i < Object.keys(state.pointsThreshold).length; i++) {
        if (points > state.pointsThreshold[i]) {
          rank = i;
        }
      }
      return state.pointsThresholdNames[rank];
    },
  },
  mutations: {
    setAuth: (state, auth) => {
      state.auth = auth;
    },
    setUser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      const link = this.state.apiLink + "user/me";
      const response = await fetch(link, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token") as string,
        },
      });
      if (response.ok) {
        console.log("response ok");
        const data: User = await response.json();
        console.log(data);
        commit("setUser", data);
      } else {
        console.log("HTTP-Error: " + response.status);
        alert("Twoja sesja wygasła. Zaloguj się ponownie.");
        await router.push("/");
      }
    },
    async login({ commit }, formData) {
      const link = this.state.apiLink + "auth/login";
      const response = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("response ok");
        const data = await response.json();
        console.log(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("auth", "true");
        await store.dispatch("fetchUser");
        await router.push("/app");
      } else {
        console.log("HTTP-Error: " + response.status);
        if (response.status == 401 || response.status == 409) {
          alert("Niepoprawny login lub hasło");
        }
      }
    },
    async register({ commit }, formData) {
      const link = this.state.apiLink + "auth/register";
      const response = await fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("response ok");
        return true;
      } else {
        console.log("HTTP-Error: " + response.status);
        if (response.status == 401) {
          alert("Użytkownik o podanym adresie email już istnieje");
        }
        return false;
      }
    },
  },
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
