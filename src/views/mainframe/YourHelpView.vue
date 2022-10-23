<template>
  <h1>Your help</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YourHelpView",
  mounted() {
    document.title = "e-Sąsiad | Twoja pomoc";
  },
});
</script>
