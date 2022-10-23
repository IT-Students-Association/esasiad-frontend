<template>
  <div
    class="ml-5 h-screen fixed mt-3 flex flex-col justify-center transition-all w-1/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mb-5"
  >
    <div class="flex flex-col h-3/4 justify-evenly">
      <div class="box">
        <div class="header flex gap-2 box-padding">
          <input
            class="!w-full text-base search"
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
          <p class="font-semibold">Przejdź do forum:</p>
          <div class="flex flex-col">
            <!-- tu będą się generować osiedla w których jest user -->
            <p
              @click="showModalNeighborhoods"
              class="cursor-pointer text-main2"
            >
              Dodaj nowe osiedle
            </p>
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
              <p>{{ user.name }} {{ user.surname }}</p>
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
    <Modal v-model="isShowNeighborhoods" :close="closeModalNeighborhoods">
      <div
        class="flex justify-center items-center w-screen h-screen bg-black bg-opacity-50"
      >
        <div class="box p-5 w-3/4 sm:w-1/4">
          <div class="flex items-start w-full">
            <h2 class="text-center text-lg sm:text-xl text-main mx-auto mb-5">
              Dołącz do osiedla
            </h2>
            <button @click="closeModalNeighborhoods">
              <img
                class="w-8"
                src="@/assets/icons/cross-1.svg"
                alt="close icon"
              />
            </button>
          </div>
          <div class="flex flex-col gap-2">
            <p id="somewhere" class="hidden"></p>
            <form id="form-location" class="flex flex-col gap-2 hidden">
              <p id="error" class="hidden">
                Nie udało się uzyskać twojej lokalizacji, podaj adres osiedla
              </p>
              <input
                class="border rounded-lg p-2"
                type="text"
                id="street"
                placeholder="Ulica"
              />
              <input
                class="border rounded-lg p-2"
                type="text"
                id="street"
                placeholder="Miasto"
              />
              <input
                class="border rounded-lg p-2"
                type="text"
                id="street"
                placeholder="Kod pocztowy"
              />
            </form>
            <input
              @focus="locate"
              type="text"
              class="border rounded-lg p-2"
              placeholder="Wpisz nazwę osiedla"
            />
            <button class="bg-main2 text-white rounded-lg p-2">
              Stwórz i dołącz do osiedla
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SidebarNotification from "@/components/SidebarNotification.vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "AppSidebar",
  components: { SidebarNotification },
  setup() {
    const isShowNeighborhoods = ref(false);
    function showModalNeighborhoods() {
      isShowNeighborhoods.value = true;
    }
    function closeModalNeighborhoods() {
      isShowNeighborhoods.value = false;
    }
    return {
      isShowNeighborhoods,
      showModalNeighborhoods,
      closeModalNeighborhoods,
    };
  },
  data() {
    const store = useStore();
    const user = store.state.user;
    const rank = store.getters.getRank(user?.points);
    const location = undefined as any;
    const tried = false;
    return {
      location,
      user,
      rank,
      tried,
      address: "",
    };
  },
  methods: {
    locate() {
      const errorElem = document.getElementById(
        "error"
      ) as HTMLParagraphElement;
      const somewhereElem = document.getElementById(
        "somewhere"
      ) as HTMLParagraphElement;
      const form = document.getElementById("form-location");
      if (!this.tried) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.location = position.coords;
            somewhereElem.classList.remove("hidden");
            somewhereElem.innerHTML =
              "[funkcja nieukończona] Udało się! Twoja lokalizacja: <br />" +
              this.location.longitude +
              " " +
              this.location.latitude;
          },
          (error) => {
            form?.classList.remove("hidden");
            errorElem?.classList.remove("hidden");
          }
        );
      }
    },
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

input.search {
  all: unset;
}
</style>
