<template>
  <HomeNavbar />
  <div class="h-screen relative w-screen background-gradient overflow-x-hidden">
    <div class="container-grid pt-60">
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-4">
          <h1
            class="text-[#000000] opacity-50 text-center w-screen w-full sm:text-left"
          >
            Zbuduj z nami nowoczesne sąsiedztwa.
          </h1>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-4 text-main2">
          <h2 class="">Lorem ipsum sit dolor amit.</h2>
          <h2 class="">
            Dołącz do nas i zmieniaj z nami obraz osiedla 21 wieku. Lorem ipsum
            dolor sit amet, consectetur...
          </h2>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-2">
          <button
            class="cursor-pointer bg-main2 py-4 w-full rounded-xl text-center text-white font-medium text-base"
            onclick="alert('natka')"
          >
            Rozpocznij
          </button>
        </div>
      </div>
      <div class="row z-20 mt-16">
        <div class="col-1" />
        <div class="col-10 flex">
          <div>
            <div class="flex items-center">
              <img
                class="w-20 h-20"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              />
              <h3 class="ml-4 text-main2">Lorem ipsum</h3>
            </div>
            <h2 class="">Kurwa</h2>
            <p>Lorem ipsum</p>
          </div>
          <img class="w-1/2 ml-16" src="@/assets/mockups/mockup1.png" />
        </div>
      </div>
      <div class="row z-20"></div>
    </div>
    <div class="home-image-div z-10 polygon bg-[#F7F7F7]">
      <img src="@/assets/images/ludki_full.png" alt="" class="home-image" />
    </div>
    <div class="home-image-div z-0">
      <img src="@/assets/images/ludki_line.png" alt="" class="home-image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeNavbar from "@/components/HomeNavbar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeNavbar,
  },
});
</script>

<style lang="sass" scoped></style>
