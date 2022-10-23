<template>
  <MainNavbar />
  <AppSidebar class="z-50 portrait:hidden" />
  <div
    class="flex justify-end w-full min-h-screen relative background-mainframe overflow-x-hidden"
  >
    <router-view
      class="w-1/2 lg:w-1/2 xl:w-2/3 2xl:w-3/4 mt-32 portrait:w-full portrait:mx-5 portrait:mt-20"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "@/components/MainNavbar.vue";
import AppSidebar from "@/components/AppSidebar.vue";

export default defineComponent({
  name: "MainframeController",
  components: {
    AppSidebar,
    MainNavbar,
  },
});
</script>

<style lang="scss">
.box {
  @apply bg-white rounded-2xl pb-3;
  box-shadow: 0 190px 76px rgba(0, 0, 0, 0.01), 0 107px 64px rgba(0, 0, 0, 0.05),
    0 47px 47px rgba(0, 0, 0, 0.09), 0 12px 26px rgba(0, 0, 0, 0.1),
    0 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
}

.labeled {
  @apply text-main2 peer-checked:text-main transition-all translate-y-0 peer-checked:-translate-y-7 peer-checked:text-lg portrait:peer-checked:translate-y-0 portrait:peer-checked:text-[1.1rem];
}

.button {
  @apply bg-main2 text-white text-center rounded-lg px-4 py-2;
}

.input {
  @apply h-6 mt-2 w-[80%] bg-white px-4 py-2 border-2 border-solid border-main rounded-md shadow-sm focus:outline-none;
}

Modal label {
  @apply mt-3 absolute sm:relative bg-white text-sm sm:text-lg -translate-y-5 sm:translate-y-0 bg-white transition-all left-20 sm:left-0  font-light sm:peer-focus:bg-none peer-focus:text-sm sm:peer-focus:text-lg peer-focus:-translate-y-5 sm:peer-focus:translate-y-0 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg;
}
</style>
