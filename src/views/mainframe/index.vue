<template>
  <MainNavbar />
  <AppSidebar class="z-50" />
  <div
    class="flex justify-end w-screen h-screen relative w-screen background-mainframe overflow-x-hidden overflow-y-hidden"
  >
    <router-view class="float-right w-3/4 mt-28 mr-5" />
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
.frame {
  height: calc(100vh - 5.5rem);
}

.box {
  @apply bg-white rounded-2xl pb-3;
  box-shadow: 0 190px 76px rgba(0, 0, 0, 0.01), 0 107px 64px rgba(0, 0, 0, 0.05),
    0 47px 47px rgba(0, 0, 0, 0.09), 0 12px 26px rgba(0, 0, 0, 0.1),
    0 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
}

.labeled {
  @apply text-main2 peer-checked:text-main transition-all translate-y-0 peer-checked:-translate-y-7 peer-checked:text-lg;
}
</style>
