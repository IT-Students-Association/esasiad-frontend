<template>
  <div class="flex flex-col mx-auto my-10">
    <h2 class="text-lg text-main font-semibold">Ranking Sąsiadów</h2>
    <div class="flex gap-5 mt-7">
      <label>
        <input
          type="radio"
          id="n1"
          name="filter"
          value="1"
          class="peer"
          checked
          hidden
        />
        <div class="labeled2">Ogólny</div>
      </label>
      <label>
        <input
          type="radio"
          id="n1"
          name="filter"
          value="1"
          class="peer"
          hidden
        />
        <div class="labeled2">na Wspólnej 21/37</div>
      </label>
      <label>
        <input
          type="radio"
          id="n2"
          name="filter"
          value="2"
          class="peer"
          hidden
        />
        <div class="labeled2">na Wiśniowej 56</div>
      </label>
      <label>
        <input
          type="radio"
          id="n2"
          name="filter"
          value="2"
          class="peer"
          hidden
        />
        <div class="labeled2">“Pod mosteczkiem”</div>
      </label>
    </div>
    <div class="flex justify-between gap-5">
      <NeighborsRanking />
      <div class="flex flex-col gap-5 w-1/3">
        <div class="box px-5 py-4">
          <h2 class="text-lg">Dziękujemy, że jesteś</h2>
          <p class="text-sm">Sąsiedzi którzy otrzymali od Ciebie pomoc:</p>
          <ul class="text-sm">
            <li>W tym tygodniu: 3</li>
            <li>Ogólnie: 100</li>
          </ul>
        </div>
        <div class="box px-5 py-4">
          <h2 class="text-lg">Mkniesz do przodu</h2>
          <p class="text-sm">
            Grażyna, brakuje Ci 6969 punktów do uzyskania tytułu
            <span class="text-main2">Sąsiad z doświadczeniem</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NeighborsRanking from "@/components/NeighborsRanking.vue";

export default defineComponent({
  name: "RankingView",
  components: { NeighborsRanking },
  mounted() {
    document.title = "e-Sąsiad | Ranking";
  },
});
</script>

<style lang="scss" scoped>
.labeled2 {
  @apply text-main2 transition-all translate-y-0 peer-checked:-translate-y-7 peer-checked:text-base;
}
</style>
