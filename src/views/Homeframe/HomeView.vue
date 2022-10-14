<template>
  <div class="h-screen relative w-screen background-gradient overflow-x-hidden">
    <div
      class="font-overpass view h-[60vh] flex flex-col justify-center w-1/3 mt-16"
    >
      <h1
        class="z-10 text-[#000000] opacity-50 font-bold text-[2.8125em] text-center w-screen sm:w-full sm:text-[3.75em] sm:text-left 2xl:text-[4em] 3xl:w-2/3"
      >
        Zbuduj z nami nowoczesne sąsiedztwa.
      </h1>
      <p class="z-10 text-base text-main2">Lorem ipsum sit dolor amit.</p>
      <p class="z-10 text-base text-main2">
        Dołącz do nas i zmieniaj z nami obraz osiedla 21 wieku. Lorem ipsum
        dolor sit amet, consectetur...
      </p>
      <button
        class="cursor-pointer z-10 bg-main2 py-4 px-7 w-1/5 rounded-xl text-white text-base font-medium mt-3"
        onclick="alert('natka')"
      >
        Rozpocznij
      </button>
    </div>
    <div class="absolute z-0 -top-80 left-0 right-0 w-screen h-[235vh]">
      <img
        src="@/assets/images/ludki_line.png"
        alt=""
        class="absolute z-20 w-[45%] top-[20%] left-[55%] right-0"
      />
    </div>
    <div
      class="font-overpass flex justify-center items-center absolute -top-80 left-0 right-0 -z-0 w-screen h-[235vh] polygon bg-[#F7F7F7]"
    >
      <img
        src="@/assets/images/ludki_full.png"
        alt=""
        class="absolute z-20 w-[45%] top-[20%] left-[55%] right-0"
      />
      <div class="flex flex-wrap justify-center w-2/3 mt-[50vh]">
        <div class="w-1/3 p-10">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-base text-main2 font-bold">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
        </div>

        <div class="w-1/3 p-10">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-base text-main2 font-bold">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
        </div>
        <div class="w-1/3 p-10">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-base text-main2 font-bold">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
        </div>
        <div class="w-1/3 p-10">
          <img
            src="@/assets/icons/help.png"
            alt="ikonka pomoc"
            class="z-10 p-3 w-[3vw] h-[3vw] bg-[#D9D9D9] rounded-xl"
          />
          <p class="text-base text-main2 font-bold">
            DZIWUM AD DZIWUM AD DZIWUM AD DZIWUM
          </p>
        </div>
      </div>
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
