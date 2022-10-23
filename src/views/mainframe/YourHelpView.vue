<template>
  <div class="flex flex-col w-full pt-3">
    <h2 class="text-center font-medium">Zaakceptowane prośby</h2>
    <div class="flex flex-col gap-5 mt-2">
      <div class="flex flex-col bg-error bg-opacity-20 p-2 rounded-xl">
        <div class="flex justify-between items-start">
          <div>
            <p class="!text-sm text-error">Niezrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
          </div>
          <button class="text-main">Skanuj kod QR</button>
        </div>
        <p class="!text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>
      <div class="flex flex-col bg-error bg-opacity-20 p-2 rounded-xl">
        <div class="flex justify-between items-start">
          <div>
            <p class="!text-sm text-error">Niezrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
          </div>
          <button class="text-main">Skanuj kod QR</button>
        </div>
        <p class="!text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>
    </div>
    <h2 class="text-center font-medium mt-5">Twoje prośby</h2>
    <div class="flex flex-col gap-5 mt-2">
      <div class="flex flex-col bg-white p-2 rounded-xl">
        <div class="flex justify-between items-start">
          <div>
            <p class="!text-sm text-main2">Zrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
          </div>
          <button class="text-main hidden">Skanuj kod QR</button>
        </div>
        <p class="!text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>
      <div class="flex flex-col bg-error bg-opacity-20 p-2 rounded-xl">
        <div class="flex justify-between items-start">
          <div>
            <p class="!text-sm text-error">Niezrealizowane</p>
            <div class="flex items-center">
              <img
                src="@/assets/icons/user.svg"
                class="h-8 w-auto"
                alt="user"
              />
              <p class="!text-sm font-semibold">Jan Kowalski</p>
            </div>
          </div>
          <button class="text-error">Generuj kod QR</button>
        </div>
        <p class="!text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "YourHelpView",
  mounted() {
    document.title = "e-Sąsiad | Twoja pomoc";
  },
});
</script>
