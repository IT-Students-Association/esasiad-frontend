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
</style>
