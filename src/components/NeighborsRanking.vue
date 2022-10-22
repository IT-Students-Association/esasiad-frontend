<template>
  <div class="flex flex-col gap-10 mt-5">
    <div class="flex translate-x-28">
      <div
        class="flex flex-col items-center justify-center box !p-2 w-1/3 z-50"
      >
        <h2 class="font-medium text-lg">1.</h2>
        <h2 class="font-medium text-base text-center">Anna Stefanek</h2>
        <div class="flex justify-evenly w-2/3">
          <p class="text-base text-main2">21344</p>
          <p class="text-base text-black text-opacity-50">200</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center box !p-2 w-1/3 z-40 -translate-x-5 translate-y-20"
      >
        <h2 class="font-medium text-lg">2.</h2>
        <h2 class="font-medium text-base text-center">Renata Kapusta</h2>
        <div class="flex justify-evenly w-2/3">
          <p class="text-base text-main2">17213</p>
          <p class="text-base text-black text-opacity-50">179</p>
        </div>
      </div>
      <div
        class="flex flex-col items-center justify-center box !p-2 w-1/3 z-30 -translate-x-96 translate-y-40"
      >
        <h2 class="font-medium text-lg">3.</h2>
        <h2 class="font-medium text-base text-center">Barbara Przekorzystna</h2>
        <div class="flex justify-evenly w-2/3">
          <p class="text-base text-main2">12021</p>
          <p class="text-base text-black text-opacity-50">100</p>
        </div>
      </div>
    </div>
    <table
      class="mt-40 table-auto gap-5 border-separate border-spacing-2 box !p-3"
    >
      <thead>
        <tr>
          <th class="font-medium">Miejsce</th>
          <th class="font-medium">Imię i nazwisko</th>
          <th class="text-main2">Punkty</th>
          <th class="text-black text-opacity-50">Pomagani sąsiedzi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4.</td>
          <td>Anna Potopowa</td>
          <td class="text-main2">400</td>
          <td class="text-black text-opacity-50">100</td>
        </tr>
        <tr>
          <td>5.</td>
          <td>Anna Achmistrowicz-Wachmistrowicz</td>
          <td class="text-main2">400</td>
          <td class="text-black text-opacity-50">100</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NeighborsRanking",
});
</script>

<style lang="scss" scoped>
td {
  @apply text-center w-1/4;
}
</style>
