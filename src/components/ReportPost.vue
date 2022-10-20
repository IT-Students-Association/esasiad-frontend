<template>
  <div
    class="flex flex-col gap-3 box bg-white !py-5 px-5 rounded-3xl max-w-[40%]"
  >
    <div class="line">
      <h2 class="title">Gdzie?</h2>
      <p>{{ post.location }}</p>
    </div>
    <div class="line">
      <h2 class="title">Co?</h2>
      <div class="text">
        <p class="!text-main2 !text-opacity-70">{{ post.category }}</p>
        <p>{{ post.title }}</p>
      </div>
    </div>
    <div class="line">
      <h2 class="title">Opis</h2>
      <p>{{ post.description }}</p>
    </div>
    <div class="flex justify-evenly">
      <button>Ta usterka istnieje</button>
      <p class="!text-error text-opacity-80">Usterka nie istnieje</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReportPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.line {
  @apply flex gap-5 items-start;
}

h2 {
  @apply w-1/6;
}

.line p,
.text {
  @apply w-3/4 text-sm text-black text-opacity-50;
}
</style>
