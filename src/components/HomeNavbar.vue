<template>
  <nav
    class="fixed w-[90vw] mx-auto pt-3 flex justify-between items-center z-50 navbar-blur left-0 right-0"
  >
    <h2 class="font-overpass text-main text-xl font-semibold">e-Sąsiad</h2>
    <div class="flex w-1/5 justify-between invisible sm:visible">
      <router-link to="/login">
        <p
          class="font-overpass text-lg font-normal px-6 py-3 rounded-3xl bg-orange"
        >
          dołącz
        </p>
      </router-link>
      <router-link to="/register">
        <p
          class="font-overpass text-lg font-normal px-6 py-3 rounded-3xl bg-orange"
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
