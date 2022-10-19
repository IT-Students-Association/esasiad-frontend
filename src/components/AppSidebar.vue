<template>
  <div class="flex flex-col justify-between w-1/5 mb-5">
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
      <div class="flex flex-col items-center justify-center box-padding">
        <img
          src="@/assets/icons/user.svg"
          class="mt-2 h-40 w-auto"
          alt="user"
        />
        <p
          class="w-10/12 pt-3 pb-2 bg-accent2 text-center rounded-xl font-light"
        >
          Początkujący Sąsiad | 40 pkt
        </p>
        <div class="mt-3 w-full text-center">
          <p class="!text-base font-light">user@user.pl</p>
          <h2>Użytkownik Iksiński</h2>
        </div>
        <div class="mt-3 w-full text-center">
          <p class="!text-base font-light">Tak trzymaj!</p>
          <h2>Użytkownik, jesteś 79. w rankingu osiedlowym</h2>
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

export default defineComponent({
  name: "AppSidebar",
  components: { SidebarNotification },
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

.box {
  @apply bg-white rounded-2xl pb-3;
  box-shadow: 0 190px 76px rgba(0, 0, 0, 0.01), 0 107px 64px rgba(0, 0, 0, 0.05),
    0 47px 47px rgba(0, 0, 0, 0.09), 0 12px 26px rgba(0, 0, 0, 0.1),
    0 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
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
