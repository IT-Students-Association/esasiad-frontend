<template>
  <div
    class="flex flex-col mx-auto my-10 portrait:mt-24 portrait:mx-5 portrait:items-center"
  >
    <h2 class="text-lg text-main font-semibold portrait:hidden">
      Zgłoś usterkę
    </h2>
    <div
      class="flex w-3/4 box items-center justify-center gap-4 !p-2 landscape:hidden"
    >
      <h2 class="text-lg text-main font-semibold mt-1">Zgłoś usterkę</h2>
      <img
        src="@/assets/icons/add.svg"
        alt="add icon"
        class="h-12 bg-accent2 rounded-2xl"
      />
    </div>
    <div class="mt-3 bg-white box !py-5 px-5 rounded-3xl portrait:hidden">
      <div class="flex gap-5">
        <form class="flex flex-col gap-5 w-5/12" @submit.prevent="reportFault">
          <div class="flex flex-col">
            <label class="title" for="title">Tytuł</label>
            <input id="title" type="text" v-model="title" />
          </div>
          <div class="flex flex-col">
            <label class="title" for="categories">Kategorie</label>
            <div class="flex gap-2">
              <label>
                <input
                  type="radio"
                  id="vandalism"
                  name="categories"
                  value="vandalism"
                  class="peer"
                  checked
                  hidden
                />
                <div class="category-label !text-s">Wandalizm</div>
              </label>
              <label>
                <input
                  type="radio"
                  id="lighting"
                  name="categories"
                  value="lighting"
                  class="peer"
                  checked
                  hidden
                />
                <div class="category-label !text-s">Oświetlenie</div>
              </label>
              <label>
                <input
                  type="radio"
                  id="trash"
                  name="categories"
                  value="trash"
                  class="peer"
                  checked
                  hidden
                />
                <div class="category-label !text-s">Odpady</div>
              </label>
              <label>
                <input
                  type="radio"
                  id="other"
                  name="categories"
                  value="other"
                  class="peer"
                  checked
                  hidden
                />
                <div class="category-label !text-s">Inne</div>
              </label>
            </div>
          </div>
          <div class="flex flex-col">
            <label class="title" for="description">Opis</label>
            <textarea id="description" v-model="description" />
          </div>
        </form>
        <div>
          <p>Tu będzie upo mapa</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-5">
      <h2 class="text-base text-main2 text-opacity-70 font-semibold">
        Pomóż nam zweryfikować usterki z okolicy
      </h2>
      <div
        class="mt-3 flex flex-wrap gap-5 portrait:flex-col portrait:items-center"
        v-for="post in posts"
        :key="post.id"
      >
        <ReportPost :post="post" />
      </div>
    </div>
  </div>
  <Modal v-model="isShowReport" :close="closeModalReport"> </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReportPost from "@/components/ReportPost.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ReportFaultView",
  components: { ReportPost },
  data() {
    const store = useStore();
    return {
      posts: store.state.reportPosts,
      description: "",
      title: "",
      isShowReport: false,
    };
  },
  mounted() {
    document.title = "e-Sąsiad | Zgłoś usterkę";
  },
  methods: {
    reportFault() {
      console.log("Zgłoszono usterkę");
    },
  },
});
</script>

<style lang="scss">
label.title,
.title {
  @apply text-base;
}

input,
textarea {
  @apply border-2 border-main2 rounded-md focus:outline-none;
}

input {
  @apply px-1 h-10;
}

textarea {
  @apply px-1 py-2 h-40 resize-none;
}

.category-label {
  @apply transition-all text-s pt-3 pb-2 px-2 bg-main2 bg-opacity-70 text-purewhite rounded-md cursor-pointer hover:bg-opacity-90 peer-checked:bg-opacity-100;
}
</style>
