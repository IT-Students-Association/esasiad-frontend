<template>
  <div class="float-right flex flex-col mx-10 portrait:pb-10">
    <div class="flex gap-5 portrait:mt-5">
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
      <button
        class="flex items-center button ml-auto portrait:hidden"
        @click="showModalHelp"
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
      class="flex items-center button mx-auto mt-2 landscape:hidden"
      @click="showModalHelp"
    >
      <img
        src="@/assets/icons/add.svg"
        class="w-8 stroke-white"
        alt="add icon"
      />
      Dodaj post
    </button>
    <div
      class="flex flex-wrap gap-10 portrait:mt-5"
      v-for="post in posts"
      :key="post.id"
    >
      <HelpPost :post="post" />
      <HelpPost :post="post" />
    </div>
    <Modal v-model="isShowHelp" :close="closeModalHelp">
      <div
        class="flex justify-center items-center w-screen h-screen bg-black bg-opacity-50"
      >
        <div class="box p-5 w-3/4 sm:w-1/4">
          <div class="flex items-start w-full">
            <h2 class="text-center text-xl sm:text-2xl text-main mx-auto mb-5">
              Prośba o pomoc
            </h2>
            <button @click="closeModalHelp">
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
import HelpPost from "@/components/HelpWantedPost.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "HelpView",
  components: { HelpPost },
  data() {
    const store = useStore();
    return {
      posts: store.state.helpPosts,
    };
  },
  mounted() {
    document.title = "e-Sąsiad | Pomoc";
  },
  setup() {
    const isShowHelp = ref(false);
    function showModalHelp() {
      isShowHelp.value = true;
    }
    function closeModalHelp() {
      isShowHelp.value = false;
    }
    return {
      isShowHelp,
      showModalHelp,
      closeModalHelp,
    };
  },
});
</script>

<style lang="scss" scoped></style>
