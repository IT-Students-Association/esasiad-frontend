<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/HomeNavbar.vue";

export default defineComponent({
  name: "HomeframeView",
  components: { Navbar },
});
</script>

<style lang="scss"></style>
