<template>
  <div
    class="mt-3 flex flex-col justify-evenly transition-all w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mb-5"
  >
    <div class="box">
      <div class="header flex gap-2 box-padding">
        <input
          class="w-full text-base"
          type="text"
          @change="search"
          placeholder="Szukaj na forum"
        />
        <div
          class="flex items-center justify-center bg-accent2 bg-opacity-80 p-2 rounded-2xl"
        >
          <img
            src="@/assets/icons/search.svg"
            class="h-7 w-auto"
            alt="search"
          />
        </div>
      </div>
      <div class="mt-3 box-padding">
        <p>Przejdź do forum:</p>
        <div class="flex flex-col">
          <!-- tu będą się generować osiedla w których jest user -->
          <p>Osiedle nad Dolinką, Warszawa</p>
          <p>Osiedle na Wiśniowej 56, Warszawa</p>
          <p>Osiedle na Wspólnej 21, Warszawa</p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="header flex box-padding">
        <h2>O Tobie</h2>
      </div>
      <p
        class="mt-2 ml-auto mr-auto w-2/3 pt-2 pb-1 bg-accent2 text-center rounded-xl font-light"
      >
        {{ rank }} | {{ user.points }} pkt
      </p>
      <div class="flex items-center justify-center box-padding">
        <img
          src="@/assets/icons/user.svg"
          class="mt-2 h-32 w-auto"
          alt="user"
        />
        <div>
          <div class="mt-3 w-full text-center">
            <p class="font-light">{{ user.email }}</p>
            <p>{{ user.name }}</p>
          </div>
          <div class="mt-3 w-full text-center">
            <p class="font-light">Tak trzymaj!</p>
            <p>
              {{ user.name.split(" ")[0] }}, jesteś 79. w rankingu osiedlowym
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="header flex box-padding">
        <h2>Zobacz co Cię ominęło</h2>
      </div>
      <div class="box-padding flex flex-col items-center">
        <SidebarNotification />
        <SidebarNotification />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarNotification from "@/components/SidebarNotification.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "AppSidebar",
  components: { SidebarNotification },
  data() {
    const store = useStore();
    const user = store.state.user;
    return {
      user,
      rank: store.getters.getRank(user.points),
    };
  },
  methods: {
    search() {
      console.log("search");
    },
  },
});
</script>
<style lang="scss">
p {
  @apply text-sm;
}

h2,
input {
  @apply text-base font-normal  placeholder:font-normal;
}

.box-padding {
  @apply px-5;
}

.header {
  @apply bg-opacity-40 bg-grey rounded-t-2xl py-2;
}

.header h2 {
  @apply pt-1;
}

.header h2,
.header input {
  @apply text-black opacity-60;
}
</style>
