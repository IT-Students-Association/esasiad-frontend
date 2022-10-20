<template>
  <div
    class="flex bg-white !py-5 px-5 rounded-3xl flex-col w-full sm:max-w-[33%] box"
  >
    <p class="text-right font-light">e-Sąsiad HQ, 1 godzinę temu</p>
    <div class="flex items-center gap-1">
      <img src="@/assets/icons/user.svg" class="w-12 h-auto" alt="user" />
      <div>
        <p>Mateusz Pasek</p>
        <p class="font-light">Potężny Sąsiad | 9999pkt</p>
      </div>
    </div>
    <h2 class="text-lg font-semibold">
      Testowa prośba o pomoc od Administracji serwisu e-Sąsiad
    </h2>
    <button
      class="flex lg:w-7/12 2xl:w--1/2 justify-evenly items-center bg-main2 text-white text-center rounded-lg px-4 py-2 mt-2"
    >
      <img src="@/assets/icons/like.svg" class="w-6 h-auto" alt="like" />
      Zgłoś chęć pomocy
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelpWantedPost",
});
</script>
