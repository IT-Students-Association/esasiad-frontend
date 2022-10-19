<template>
  <MainNavbar></MainNavbar>
  <div
    class="h-screen relative w-screen background-mainframe overflow-x-hidden"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/MainNavbar.vue";

export default defineComponent({
  name: "HomeView",
  components: { MainNavbar },
});
</script>
