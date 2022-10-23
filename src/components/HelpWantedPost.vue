<template>
  <div
    class="flex bg-white !py-5 px-5 rounded-3xl flex-col w-full sm:max-w-[33%] box"
  >
    <p class="text-right font-light">{{ post.location }}</p>
    <div class="flex items-center gap-1">
      <img src="@/assets/icons/user.svg" class="w-12 h-auto" alt="user" />
      <div>
        <p>{{ post.user.name }}</p>
        <p class="font-light">{{ rank }} | {{ post.user.points }}pkt</p>
      </div>
    </div>
    <h2 class="text-lg mt-1">
      {{ post.title }}
    </h2>
    <button
      class="flex lg:w-7/12 2xl:w-1/2 justify-evenly items-center button mt-2"
    >
      <img src="@/assets/icons/like.svg" class="w-6 h-auto" alt="like" />
      Zgłoś chęć pomocy
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "HelpWantedPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    const store = useStore();
    const rank = store.getters.getRank(this.post.user.points);
    return {
      rank,
    };
  },
});
</script>
