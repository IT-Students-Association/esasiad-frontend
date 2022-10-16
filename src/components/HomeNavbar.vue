<template>
  <nav
    class="fixed w-[90vw] mx-auto pt-3 flex justify-between items-center z-50 navbar-blur left-0 right-0"
  >
    <h2 class="text-main text-xl font-semibold">e-Sąsiad</h2>
    <div class="flex sm:w-1/5 justify-between">
      <router-link to="/login">
        <p
          class="text-s sm:text-lg font-normal px-7 sm:pt-3 py-2 rounded-3xl bg-none sm:bg-orange"
        >
          dołącz
        </p>
      </router-link>
      <router-link to="/register">
        <p
          class="text-s sm:text-lg font-normal px-7 sm:pt-3 py-2 rounded-3xl bg-none sm:bg-orange"
        >
          zaloguj
        </p>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarComponent",
});
</script>

<style lang="sass" scoped></style>
