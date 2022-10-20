<template>
  <div class="mt-10 flex flex-col mx-10">
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
        <div class="labeled">Najnowsze posty</div>
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
        <div class="labeled">Posty z okolicy</div>
      </label>
      <label>
        <input
          type="radio"
          id="important"
          name="filter"
          value="important"
          class="peer"
          hidden
        />
        <div class="labeled">Ważne (Administracja Osiedla)</div>
      </label>
    </div>
    <div class="flex flex-col mt-5 gap-10">
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
      <CommunityPost />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommunityPost from "@/components/CommunityPost.vue";

export default defineComponent({
  name: "HomeView",
  components: { CommunityPost },
  mounted() {
    document.title = "e-Sąsiad | Społeczność";
  },
});
</script>

<style lang="scss" scoped></style>
