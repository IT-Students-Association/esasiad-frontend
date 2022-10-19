<template>
  <MainNavbar />
  <div
    class="w-screen h-screen relative w-screen background-mainframe overflow-x-hidden"
  >
    <AppSidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/MainNavbar.vue";
import AppSidebar from "@/components/AppSidebar.vue";

export default defineComponent({
  name: "MainframeController",
  components: {
    AppSidebar,
    MainNavbar,
  },
});
</script>

<style lang="sass" scoped></style>
