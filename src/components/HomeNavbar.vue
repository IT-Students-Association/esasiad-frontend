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
      <div
        class="bg-opacity-70 bg-[#000000] w-screen h-screen flex justify-center items-center"
      >
        <div class="form bg-[#F7F7F7] p-10 rounded-2xl w-2/3 sm:w-1/3">
          <div class="flex items-start w-full">
            <h2 class="text-center text-xl sm:text-2xl text-main mx-auto mb-5">
              Zaloguj się
            </h2>
            <button @click="closeModalLogin">
              <img
                class="w-8"
                src="@/assets/icons/cross-1.svg"
                alt="close icon"
              />
            </button>
          </div>
          <form class="flex flex-col items-center gap-2">
            <div
              class="flex flex-row-reverse w-full items-center justify-center"
            >
              <input
                id="email"
                class="peer input"
                type="email"
                placeholder=" "
              />
              <label for="email" class="mr-4 text-lg">Email</label>
            </div>
            <div
              class="flex flex-row-reverse w-full items-center justify-center"
            >
              <div class="input flex justify-around">
                <input
                  class="peer w-full"
                  id="password"
                  type="password"
                  autocomplete="new-password"
                  placeholder=" "
                />
                <label for="password" class="!mt-[1px] text-lg block sm:hidden"
                  >Hasło</label
                >
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
              <label for="password" class="mr-4 text-lg hidden sm:block"
                >Hasło</label
              >
            </div>
            <p
              @click="showModalRegister"
              class="cursor-pointer text-center text-main2"
            >
              Nie masz jeszcze konta? Zarejestruj się
            </p>
            <button @click="authLogin" class="submit">Zaloguj się</button>
          </form>
        </div>
      </div>
    </div>
  </Modal>
  <Modal v-model="isShowRegister" :close="closeModalRegister">
    <div
      class="bg-opacity-70 bg-[#000000] w-screen h-screen flex justify-center items-center"
    >
      <div class="form bg-[#F7F7F7] p-10 rounded-2xl w-2/3 sm:w-1/3">
        <div class="flex items-start w-full">
          <h2 class="text-center text-xl sm:text-2xl text-main mx-auto mb-5">
            Zarejestruj się
          </h2>
          <button @click="closeModalRegister">
            <img
              class="w-8"
              src="@/assets/icons/cross-1.svg"
              alt="close icon"
            />
          </button>
        </div>
        <form class="flex flex-col items-center gap-2">
          <div class="flex flex-row-reverse w-full items-center">
            <input id="name" class="peer input" type="text" placeholder=" " />
            <label for="name" class="mr-4 text-lg"> Imię i nazwisko </label>
          </div>
          <div class="flex flex-row-reverse w-full items-center">
            <input id="email" class="peer input" type="email" placeholder=" " />
            <label for="email" class="mr-4 text-lg"> Email </label>
          </div>
          <div class="flex w-full items-center justify-end">
            <label for="password" class="mr-4 text-lg hidden sm:block">
              Hasło
            </label>
            <div class="input flex justify-around">
              <input
                class="peer w-full"
                id="password"
                type="password"
                autocomplete="new-password"
                placeholder=" "
              />
              <label
                for="password"
                class="!mt-[1px] text-lg block sm:hidden peer-focus:!mt-1"
              >
                Hasło
              </label>
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
          <button @click="authRegister" class="submit">Dołącz</button>
        </form>
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
      isShowRegister.value = false;
      isShowLogin.value = true;
    }
    function showModalRegister() {
      isShowLogin.value = false;
      isShowRegister.value = true;
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
    authLogin() {
      alert("logowanie");
    },
    authRegister() {
      alert("rejestracja");
    },
  },
});
</script>

<style lang="scss" scoped>
.input {
  @apply h-6 mt-2 w-full sm:w-1/2 bg-white px-4 py-2 border-2 border-solid border-main rounded-md shadow-sm focus:outline-none invalid:border-error;
}

label {
  @apply mt-3 absolute sm:relative bg-white text-sm sm:text-lg -translate-y-5 sm:translate-y-0 bg-white transition-all left-20 sm:left-0  font-light sm:peer-focus:bg-none peer-invalid:text-error peer-focus:text-sm sm:peer-focus:text-lg peer-focus:-translate-y-5 sm:peer-focus:translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg;
}

button.submit {
  @apply w-full sm:w-1/3 h-7 pt-3 bg-main text-white text-base text-center py-2 rounded-md shadow-sm hover:bg-main2 hover:shadow-lg transition-all;
}
</style>
