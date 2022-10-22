<template>
  <div
    class="flex flex-col justify-center items-center w-screen h-screen background-mainframe"
  >
    <img src="@/assets/images/login.png" alt="logo" class="h-1/2 w-auto" />
    <h2 class="font-semibold text-xl">
      Dziękujemy za rejestracje w serwisie e-Sąsiad
    </h2>
    <p class="text-base">Twoje konto jest już aktywowane</p>
    <router-link to="/" class="text-base text-main2"
      >Powrót na stronę główną</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ActivateView",
  async mounted() {
    const store = useStore();
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("code");
    console.log(token);
    // fetch
    const link = store.state.apiLink + "auth/activate";
    const response = await fetch(link, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    if (response.ok) {
      console.log("response ok");
    } else {
      console.log("HTTP-Error: " + response.status);
    }
  },
});
</script>
