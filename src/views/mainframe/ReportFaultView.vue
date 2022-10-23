<template>
  <div
    class="flex flex-col mx-5 my-10 portrait:mt-24 portrait:mx-5 portrait:items-center"
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
        @click="showModalReport"
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
            <div class="flex gap-2 flex-wrap transition-all">
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
          <button
            class="bg-accent2 w-1/4 text-black font-semibold pt-3 pb-2 px-4 rounded-xl"
          >
            Zgłoś
          </button>
        </form>
        <div>
          <p>
            Tu będzie mapa, na której będzie wybierało się gdzie jest problem
          </p>
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
    <Modal v-model="isShowReport" :close="closeModalReport">
      <div
        class="bg-opacity-70 bg-[#000000] w-screen h-screen flex justify-center items-center"
      >
        <div class="mt-3 bg-white box !py-5 px-5 mx-5 rounded-3xl">
          <button @click="closeModalReport">
            <img
              class="w-8"
              src="@/assets/icons/cross-1.svg"
              alt="close icon"
            />
          </button>
          <form
            class="flex flex-col gap-5 w-full mt-5"
            @submit.prevent="reportFault"
          >
            <div>
              <p>
                Tu będzie mapa, na której będzie wybierało się gdzie jest
                problem
              </p>
            </div>
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
            <div class="flex justify-end">
              <button
                class="bg-accent2 text-black font-semibold pt-3 pb-2 px-4 rounded-xl"
              >
                Zgłoś
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    };
  },
  setup() {
    const inputs = document.querySelectorAll("input");
    const isShowReport = ref(false);
    function showModalReport() {
      isShowReport.value = true;
    }
    function closeModalReport() {
      isShowReport.value = false;
      inputs.forEach((input) => {
        input.value = "";
      });
    }
    return {
      isShowReport,
      showModalReport,
      closeModalReport,
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
