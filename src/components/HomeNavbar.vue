<template>
  <nav
    class="fixed w-[90vw] mx-auto pt-3 flex justify-between items-center z-50 navbar-blur left-0 right-0"
  >
    <h2 class="text-main text-xl font-semibold">e-Sąsiad</h2>
    <div class="flex sm:w-1/5 justify-between">
      <button
        class="text-s sm:text-lg font-normal px-7 sm:pt-3 py-2 rounded-3xl bg-none sm:bg-orange cursor-pointer"
        @click="showModalRegister"
      >
        dołącz
      </button>
      <button
        class="text-s sm:text-lg font-normal px-7 sm:pt-3 py-2 rounded-3xl bg-none sm:bg-orange cursor-pointer"
        @click="showModalLogin"
      >
        zaloguj
      </button>
    </div>
  </nav>
  <!-- Modals -->
  <Modal v-model="isShowLogin" :close="closeModalLogin">
    <div
      class="bg-opacity-70 bg-[#000000] w-screen h-screen flex justify-center items-center"
    >
      <div class="form bg-[#F7F7F7] p-10">
        <h2 class="text-center text-2xl text-main">Zaloguj się</h2>
        <form class="flex flex-col gap-1">
          <div class="flex w-full items-center justify-center">
            <label for="email" class="mr-4 text-lg">Email</label>
            <input id="email" class="input" type="email" />
          </div>
          <div class="flex w-full items-center justify-center">
            <label for="password" class="mr-4 text-lg">Hasło</label>
            <div class="input">
              <input
                id="password"
                type="password"
                autocomplete="current-password"
              />
              <img
                class="hidden w-5"
                id="eye-open"
                src="@/assets/icons/eye-open.svg"
                alt="eye open - password visible"
                @click="changePasswordVisibility()"
              />
              <img
                class="w-5"
                id="eye-closed"
                src="@/assets/icons/eye-closed.svg"
                alt="eye closed - password not visible"
                @click="changePasswordVisibility()"
              />
            </div>
          </div>
        </form>
        <button @click="closeModalLogin">close</button>
      </div>
    </div>
  </Modal>
  <Modal v-model="isShowRegister" :close="closeModalRegister">
    <div
      class="bg-opacity-70 bg-[#000000] w-screen h-screen flex justify-center items-center"
    >
      <div class="form bg-[#F7F7F7] p-10 w-4/12">
        <h2 class="text-center text-2xl text-main">Zarejestruj się</h2>
        <form class="flex flex-col items-end gap-2">
          <div class="flex w-full items-center justify-end">
            <label for="name" class="mr-4 text-lg">Imię i nazwisko</label>
            <input id="name" class="input" type="text" />
          </div>
          <div class="flex w-full items-center justify-end">
            <label for="email" class="mr-4 text-lg">Email</label>
            <input id="email" class="input" type="email" />
          </div>
          <div class="flex w-full items-center justify-end">
            <label for="password" class="mr-4 text-lg">Hasło</label>
            <div class="input flex justify-around">
              <input
                class="w-full"
                id="password"
                type="password"
                autocomplete="new-password"
              />
              <img
                class="hidden w-5"
                id="eye-open"
                src="@/assets/icons/eye-open.svg"
                alt="eye open - password visible"
                @click="changePasswordVisibility()"
              />
              <img
                class="w-5"
                id="eye-closed"
                src="@/assets/icons/eye-closed.svg"
                alt="eye closed - password not visible"
                @click="changePasswordVisibility()"
              />
            </div>
          </div>
        </form>
        <button @click="closeModalRegister">close</button>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavbarComponent",
  components: {},
  setup() {
    const isShowLogin = ref(false);
    const isShowRegister = ref(false);
    function showModalLogin() {
      isShowLogin.value = true;
      isShowRegister.value = false;
    }
    function showModalRegister() {
      isShowRegister.value = true;
      isShowLogin.value = false;
    }
    function closeModalLogin() {
      isShowLogin.value = false;
    }
    function closeModalRegister() {
      isShowRegister.value = false;
    }
    return {
      isShowLogin,
      isShowRegister,
      showModalLogin,
      showModalRegister,
      closeModalLogin,
      closeModalRegister,
    };
  },
  methods: {
    changePasswordVisibility() {
      const password = document.getElementById("password") as HTMLInputElement;
      const eyeOpen = document.getElementById("eye-open") as HTMLImageElement;
      const eyeClosed = document.getElementById(
        "eye-closed"
      ) as HTMLImageElement;
      if (password?.type === "password") {
        password.type = "text";
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
      } else {
        password.type = "password";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  @apply h-6 bg-purewhite px-4 py-2 border-2 border-solid border-main rounded-md shadow-sm focus:outline-none focus:ring-8 focus:ring-accent2;
}
</style>
