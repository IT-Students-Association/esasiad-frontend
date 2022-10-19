<template>
  <h1>Haha</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  mounted() {
    document.title = "e-Sąsiad | Społeczność";
  },
});
</script>
