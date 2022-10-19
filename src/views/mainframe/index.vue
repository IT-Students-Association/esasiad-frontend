<template>
  <MainNavbar />
  <div
    class="flex items-end w-screen h-screen relative w-screen background-mainframe overflow-x-hidden"
  >
    <div class="flex flex-wrap w-full frame mx-16">
      <AppSidebar />
      <div class="overflow-y-scroll">
        <router-view />
      </div>
    </div>
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

<style lang="scss" scoped>
.frame {
  height: calc(100vh - 6rem);
}
</style>
