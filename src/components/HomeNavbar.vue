<template>
  <nav
    class="fixed w-screen pt-3 flex justify-around items-center z-20 navbar-blur"
  >
    <h2 class="font-overpass text-main text-xl font-semibold">e-Sąsiad</h2>
    <div class="flex w-1/6 justify-around">
      <router-link to="/aboutus">
        <p class="font-overpass text-main text-lg font-medium">O nas</p>
      </router-link>
      <router-link to="/contact">
        <p class="font-overpass text-main text-lg font-medium">Kontakt</p>
      </router-link>
    </div>
    <div class="flex w-1/5 justify-around invisible sm:visible">
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
