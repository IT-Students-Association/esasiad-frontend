<template>
  <MainNavbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/HomeNavbar.vue"; // tu zmienić na MainNavbar po zrobieniu navbara

export default defineComponent({
  name: "MainframeController",
  components: {
    MainNavbar,
  },
});
</script>
