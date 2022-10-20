<template>
  <div class="my-10 flex flex-col mx-10">
    <div class="flex gap-5">
      <label>
        <input
          type="radio"
          id="recent"
          name="filter"
          value="recent"
          class="peer"
          checked
          hidden
        />
        <div class="labeled">Najnowsze prośby</div>
      </label>
      <label>
        <input
          type="radio"
          id="nearby"
          name="filter"
          value="nearby"
          class="peer"
          hidden
        />
        <div class="labeled">Prośby z okolicy</div>
      </label>
    </div>
    <div class="flex justify-around flex-wrap gap-10">
      <HelpPost />
      <HelpPost />
      <HelpPost />
      <HelpPost />
      <HelpPost />
      <HelpPost />
      <HelpPost />
      <HelpPost />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelpPost from "@/components/HelpWantedPost.vue";

export default defineComponent({
  name: "HelpView",
  mounted() {
    document.title = "e-Sąsiad | Pomoc";
  },
  components: { HelpPost },
});
</script>

<style lang="scss" scoped></style>
