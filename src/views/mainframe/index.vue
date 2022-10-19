<template>
  <MainNavbar />
  <router-view />
  <div class="sidebar bg-[#F7F7F7] w-72">hahahahaahahahahhahhhhh</div>
  <div class="sidebar bg-[#F7F7F7] right-0 w-80"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/MainNavbar.vue"; // tu zmienić na MainNavbar po zrobieniu navbara

export default defineComponent({
  name: "MainframeController",
  components: {
    MainNavbar,
  },
});
</script>

<style lang="sass" scoped></style>
