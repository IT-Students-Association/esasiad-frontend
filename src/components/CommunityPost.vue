<template>
  <div class="flex gap-5 bg-white !py-5 px-5 rounded-3xl box">
    <div class="rounded-2xl h-full w-auto">
      <img
        src="@/assets/images/placeholder.png"
        class="rounded-2xl h-full w-full object-cover"
        alt="placeholder"
      />
    </div>
    <div class="flex flex-col w-3/4">
      <div class="flex justify-between w-full">
        <div class="flex items-center gap-1">
          <img src="@/assets/icons/user.svg" class="w-12 h-auto" alt="user" />
          <div>
            <p>{{ post.user.name }}</p>
            <p class="font-light">{{ rank }} | {{ post.user.points }}pkt</p>
          </div>
        </div>
        <p class="font-light">{{ post.location }}</p>
      </div>
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold">
          {{ post.title }}
        </h2>
        <p class="font-normal">
          {{ post.content }}
        </p>
      </div>
      <div class="flex gap-5">
        <div class="flex items-center gap-2">
          <img src="@/assets/icons/like.svg" class="w-6 h-auto" alt="like" />
          <p class="mt-1 font-light">Polubienia: {{ post.likesCount }}</p>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="@/assets/icons/messages.svg"
            class="w-6 h-auto"
            alt="comments"
          />
          <p class="mt-1 font-light">Komentarze: {{ post.commentsCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "CommunityPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    const store = useStore();
    const rank = store.getters.getRank(this.post.user.points);
    console.log(rank);
    return {
      rank,
    };
  },
});
</script>
