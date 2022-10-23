<template>
  <div class="mt-10 flex flex-col mx-10">
    <div class="flex gap-5 portrait:mt-5 portrait:text-center">
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
      <button
        class="flex items-center button ml-auto portrait:hidden"
        @click="showModalPost"
      >
        <img
          src="@/assets/icons/add.svg"
          class="w-8 stroke-white"
          alt="add icon"
        />
        Dodaj post
      </button>
    </div>
    <button
      class="flex items-center button mx-auto landscape:hidden"
      @click="showModalPost"
    >
      <img
        src="@/assets/icons/add.svg"
        class="w-8 stroke-white"
        alt="add icon"
      />
      Dodaj post
    </button>
    <div class="flex flex-col mt-5 gap-10" v-for="post in posts" :key="post.id">
      <CommunityPost :post="post" />
    </div>
    <Modal v-model="isShowPost" :close="closeModalPost">
      <div
        class="flex justify-center items-center w-screen h-screen bg-black bg-opacity-50"
      >
        <div class="box p-5 w-3/4 sm:w-1/4">
          <div class="flex items-start w-full">
            <h2 class="text-center text-xl sm:text-2xl text-main mx-auto mb-5">
              Stwórz post
            </h2>
            <button @click="closeModalPost">
              <img
                class="w-8"
                src="@/assets/icons/cross-1.svg"
                alt="close icon"
              />
            </button>
          </div>
          <form class="flex flex-col items-center gap-2" @submit.prevent="">
            <div class="flex flex-col-reverse w-full items-center">
              <select
                id="neighborhood"
                class="peer input"
                type="text"
                v-model="neighborhood"
                required
              >
                <option value="n1">na Wiśniowej 56</option>
                <option value="n2">na Wiśniowej 7</option>
                <option value="n3">na Wiśniowej 32</option>
              </select>
              <label for="title" class="mr-4 text-lg">Osiedle</label>
            </div>

            <div class="flex flex-col-reverse w-full items-center">
              <input
                id="title"
                class="peer input"
                type="text"
                placeholder=" "
                v-model="title"
                required
              />
              <label for="title" class="mr-4 text-lg"> Tytuł </label>
            </div>
            <div class="flex flex-col-reverse w-full items-center">
              <textarea
                id="content"
                class="peer input !h-32"
                type="text"
                placeholder=" "
                v-model="content"
                required
              />
              <label for="title" class="mr-4 text-lg"> Treść </label>
            </div>
            <button type="submit" class="button w-1/3 h-8">Potwierdź</button>
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CommunityPost from "@/components/CommunityPost.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "HomeView",
  components: { CommunityPost },
  data() {
    const store = useStore();
    return {
      posts: store.state.communityPosts,
    };
  },
  mounted() {
    document.title = "e-Sąsiad | Społeczność";
  },
  setup() {
    const isShowPost = ref(false);
    function showModalPost() {
      isShowPost.value = true;
    }
    function closeModalPost() {
      isShowPost.value = false;
    }
    return {
      isShowPost,
      showModalPost,
      closeModalPost,
    };
  },
});
</script>

<style lang="scss" scoped></style>
