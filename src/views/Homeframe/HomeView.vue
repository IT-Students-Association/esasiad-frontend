<template>
  <div class="h-screen relative w-screen background-gradient overflow-x-hidden">
    <div class="container-grid pt-24">
      <div class="row z-20">
        <div class="col-4">
          <h1
            class="z-10 text-[#000000] opacity-50 font-bold text-center w-screen w-full sm:text-left"
          >
            Zbuduj z nami nowoczesne sąsiedztwa.
          </h1>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-4 text-main2">
          <p class="z-10 text-lg">Lorem ipsum sit dolor amit.</p>
          <p class="z-10 mt-2 text-lg">
            Dołącz do nas i zmieniaj z nami obraz osiedla 21 wieku. Lorem ipsum
            dolor sit amet, consectetur...
          </p>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-2">
          <button
            class="cursor-pointer bg-main2 py-4 w-full rounded-xl text-center text-white text-lg font-medium"
            onclick="alert('natka')"
          >
            Rozpocznij
          </button>
        </div>
      </div>
      <div class="row z-20 mt-16">
        <div class="col-4">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-lg text-main2 font-medium">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            sem...
          </p>
        </div>
        <div class="col-4">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-lg text-main2 font-medium">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            sem...
          </p>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-4">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-lg text-main2 font-medium">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            sem...
          </p>
        </div>
        <div class="col-4">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-lg text-main2 font-medium">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
          <p class="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            sem...
          </p>
        </div>
      </div>
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

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

<style lang="sass" scoped></style>
