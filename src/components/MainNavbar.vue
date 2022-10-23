<template>
  <nav
    class="fixed w-screen py-5 flex justify-center bg-[#F7F7F7] z-50 left-0 right-0"
  >
    <div
      class="flex w-[90%] justify-between items-center portrait:flex-row-reverse"
    >
      <h2 class="text-main text-xl font-semibold">e-Sąsiad</h2>
      <div class="flex gap-5 justify-evenly portrait:hidden">
        <router-link to="/app" id="community">
          <p>Społeczność</p>
        </router-link>
        <router-link to="/app/help" id="help">
          <p>Pomoc</p>
        </router-link>
        <router-link to="/app/fault" id="fault">
          <p>Zgłoś usterkę</p>
        </router-link>
        <router-link to="/app/ranking" id="ranking">
          <p>Ranking</p>
        </router-link>
      </div>
      <div class="flex sm:w-2/12 portrait:hidden">
        <img src="@/assets/icons/notifs.png" class="nav-icons" alt="" />
        <img
          src="@/assets/icons/helper.png"
          class="nav-icons"
          @click="showModalHelp"
          alt=""
        />
        <img src="@/assets/icons/settings.png" class="nav-icons" alt="" />
      </div>
      <div class="flex landscape:hidden">
        <div @click="showMenu" class="tham tham-e-squeeze tham-w-8">
          <div class="tham-box">
            <div class="tham-inner" />
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div
    id="burger-menu"
    class="fixed z-40 h-screen w-screen top-0 left-0 -translate-x-[100%] bg-white bg-opacity-50 backdrop-blur-xl transition-all landscape:hidden"
  >
    <div class="flex flex-col items-center justify-center gap-5 h-screen">
      <div class="flex items-center gap-3 box !p-3">
        <img src="@/assets/icons/user.svg" class="h-16 w-auto" alt="user" />
        <div class="flex flex-col">
          <p class="font-semibold">{{ user.name }} {{ user.surname }}</p>
          <p class="">{{ user.email }}</p>
          <p>{{ rank }}</p>
        </div>
      </div>
      <div class="flex box items-center gap-3 !py-3 px-4 w-3/4">
        <img
          alt="search icon"
          src="@/assets/icons/search.svg"
          class="w-12 h-auto"
        />
        <input
          type="text"
          class="w-3/4 text-base search"
          placeholder="Szukaj na forum"
        />
        <button>Szukaj</button>
      </div>
      <div class="flex flex-col box !p-3">
        <p>Przejdź do osiedla:</p>
        <!-- tu będą się generować osiedla w których jest user -->
        <p class="text-main2">Dodaj nowe osiedle</p>
        <p class="!text-s">Osiedle na Wiśniowej 56, Warszawa</p>
        <p class="!text-s">Osiedle na Wspólnej 21, Warszawa</p>
      </div>
      <div class="flex justify-evenly w-full">
        <div class="flex flex-col items-center justify-around box !p-3">
          <p class="">Twoje punkty:</p>
          <p class="">{{ user.points }} pkt</p>
          <router-link to="/app/yourhelp" class="bg-main2 p-2 rounded-lg">
            <p class="text-white">Twoja pomoc</p>
          </router-link>
        </div>
        <div class="flex flex-col box !p-3">
          <router-link to="/app" id="community">
            <p>Społeczność</p>
          </router-link>
          <router-link to="/app/help" id="help">
            <p>Pomoc</p>
          </router-link>
          <router-link to="/app/fault" id="fault">
            <p>Zgłoś usterkę</p>
          </router-link>
          <router-link to="/app/ranking" id="ranking">
            <p>Ranking</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <Modal v-model="isShowHelp" :close="closeModalHelp" class="outline-0">
    <div class="w-screen h-screen">
      <div
        id="help-menu"
        class="p-10 w-2/12 bg-white float-right transition-all translate-x-96 rounded-bl-2xl mt-16"
      >
        <button class="float-right" @click="closeModalHelp">
          <img class="w-8" src="@/assets/icons/cross-1.svg" alt="close icon" />
        </button>
        <h2>Zaakceptowane prośby</h2>
        <div class="flex flex-col gap-5 mt-2">
          <div class="flex flex-col bg-error bg-opacity-20 p-2 rounded-xl">
            <p class="!text-sm text-error">Niezrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
            <p class="!text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
          </div>
          <div class="flex flex-col bg-error bg-opacity-20 p-2 rounded-xl">
            <p class="!text-sm text-error">Niezrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
            <p class="!text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "MainNavbar",
  watch: {
    $route() {
      this.showMenu();
    },
  },
  data() {
    const store = useStore();
    return {
      store,
      user: store.state.user,
      rank: store.getters.getRank(store.state.user?.points),
    };
  },
  setup() {
    const isShowHelp = ref(false);
    function showModalHelp() {
      isShowHelp.value = true;
      setTimeout(() => {
        const helpMenu = document.getElementById("help-menu");
        helpMenu?.classList.remove("translate-x-96");
      }, 100);
    }
    function closeModalHelp() {
      const helpMenu = document.getElementById("help-menu");
      helpMenu?.classList.add("translate-x-96");
      setTimeout(() => {
        isShowHelp.value = false;
      }, 100);
    }
    return {
      isShowHelp,
      showModalHelp,
      closeModalHelp,
    };
  },
  methods: {
    showMenu() {
      const burgerMenu = document.querySelector(".tham");
      const menu = document.getElementById("burger-menu");
      menu?.classList.toggle("translate-x-0");
      burgerMenu?.classList.toggle("tham-active");
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  @apply text-base;
}

a:not(.router-link-exact-active) {
  @apply hover:font-medium transition-all;
}

.router-link-exact-active {
  @apply font-semibold text-main2 transition-all;
}

.nav-icons {
  @apply z-20 w-5 h-auto ml-auto cursor-pointer;
}
</style>
