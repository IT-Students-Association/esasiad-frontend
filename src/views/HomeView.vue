<template>
  <HomeNavbar />
  <div class="h-screen relative w-screen background-gradient overflow-x-hidden">
    <div class="container-grid pt-28 sm:pt-60">
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-4">
          <h1 class="transparent-black text-center sm:text-left">
            Zbuduj z nami nowoczesne sąsiedztwa.
          </h1>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-4 transparent-black">
          <h2>Poznaj aplikację e-Sąsiad</h2>
          <h2 class="mt-3">
            Dzięki naszej aplikacji internetowej komunikacja, współpraca i inne
            aspekty lokalnych społeczności stają się jeszcze prostsze.
          </h2>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-1" />
        <div class="col-2">
          <button
            class="cursor-pointer bg-main2 py-4 px-2 w-full rounded-xl text-center text-white font-medium text-base"
          >
            <a href="#info">Dowiedz się więcej</a>
          </button>
        </div>
      </div>
      <div class="row z-20 mt-16" id="info">
        <div class="col-1" />
        <div
          class="col-10 flex flex-col sm:flex-row justify-between items-center"
        >
          <div>
            <div class="flex items-center justify-center sm:justify-start mb-3">
              <img
                class="w-16"
                src="@/assets/icons/help.png"
                alt="people helping each other icon"
              />
              <h3 class="ml-4 mt-2 text-main2">Użytkowo</h3>
            </div>
            <h2 class="text-main2">Nowa definicja pomocy sąsiedzkiej.</h2>
            <p>
              Potrzebujesz szybkiej pomocy? Chcesz coś oddać lub odsprzedać? A
              może po prostu chcesz mieć szybki dostęp do aktualnych wydarzeń na
              twoim osiedlu lub ulicy? Aplikacja e-Sąsiad umożliwia właśnie to!
              Użytkownicy mają dostęp do forum, na którym każdy z mieszkańców
              ich dzielnicy, osiedla lub bloku może dzielić się aktualnymi
              informacjami lokalnymi oraz dyskutować na ważne dla ich
              społeczności tematy. Przygotowaliśmy również cyfrową przestrzeń,
              która znacząco usprawnia szybką pomoc sąsiedzką, o której
              dokładniej dowiedzieć się możesz
              <a href="#help-nfc" class="text-main2">tutaj.</a>
            </p>
          </div>
          <img
            class="w-10/12 sm:w-5/12 ml-16"
            src="@/assets/mockups/mockup1.png"
            alt="app mockup"
          />
        </div>
      </div>
      <div class="row z-20 mt-40 sm:mt-96">
        <div class="col-1" />
        <div
          class="col-10 flex flex-col sm:flex-row justify-between items-center"
        >
          <img
            class="w-full sm:w-1/3 mr-0 sm:mr-16"
            src="@/assets/images/neighbors.png"
            alt="app mockup"
          />
          <div>
            <div class="flex items-center justify-center sm:justify-end mb-3">
              <h3 class="mr-4 mt-2 transparent-black">Społecznie</h3>
              <img
                class="w-16"
                src="@/assets/icons/forum.png"
                alt="forum of people icon"
              />
            </div>
            <h2 class="transparent-black text-center sm:text-right">
              Poznaj swoich sąsiadów.
            </h2>
            <p class="text-center sm:text-right">
              Forum sąsiedzkie daje wszystkim członkom sąsiedztwa możliwość
              integracji i zaangażowania w lokalne aktywności. Pozwala ono
              również publikować informacje z pierwszej ręki oraz dyskutować na
              tematy ważne dla waszej społeczności. [jak forum będzie zrobione
              to dopiszę więcej o jakihś technikaliach czy coś]
            </p>
          </div>
        </div>
      </div>
      <div id="help-nfc" class="row z-20 mt-64">
        <div class="col-1" />
        <div
          class="col-10 flex flex-col sm:flex-row justify-between items-center"
        >
          <div>
            <div class="flex items-center justify-center sm:justify-start mb-3">
              <img
                class="w-16"
                src="@/assets/icons/help.png"
                alt="people helping each other icon"
              />
              <h3 class="ml-4 mt-2 text-main2">Korzystnie</h3>
            </div>
            <h2 class="text-main2">Rywalizuj ze swoimi sąsiadami.</h2>
            <p>
              Funkcja pomocy sąsiedzkiej ma na celu ułatwienie oraz
              spopularyzowanie prostych, miłych, sąsiedzkich gestów. W zakładce
              "Pomoc" możesz zapoznać się z prośbami z twojej okolicy, zgłosić
              chęć ich realizacji i w zamian za dobry uczynek - otrzymać punkty
              [pomocy?]. Dla posiadaczy funkcji NFC w smartfonie proces ten jest
              niesłychanie prosty - wystarczy przyłożyć swój smartfon do tego
              osoby proszącej o pomoc i Voilà! Oczywiście osoby nieposiadające
              tej funkcji również otrzymają zasłużone punkty - można to zrobić
              skanując specjalny kod QR otrzymany od osoby potrzebującej pomocy.
              Jakby tego było mało, w zakładce ,,ranking" można znaleźć listę
              najbardziej pomocnych sąsiadów, zarówno z twojej okolicy, jak i
              wszystkich na e-Sąsiedzie! Na co jeszcze czekasz? Już teraz
              sprawdź kto z twoich współmieszkańców potrzebuje szybkiej pomocy!
            </p>
          </div>
          <img
            class="w-8/12 sm:w-5/12 ml-16"
            src="@/assets/mockups/mockup2.png"
            alt="app mockup"
          />
        </div>
      </div>
      <div class="row z-20 mt-16">
        <div class="col-2" />
        <div class="col-8">
          <h1 class="transparent-black text-center">
            Twórcy. Z doświadczeniem.
          </h1>
        </div>
      </div>
      <div class="row z-20">
        <div class="col-3" />
        <div class="col-6 flex justify-center">
          <img
            class="w-9/12"
            src="@/assets/images/creators.png"
            alt="creators of the app"
          />
        </div>
      </div>
      <div class="row z-20">
        <div class="col-2" />
        <div class="col-8 flex justify-center">
          <p>
            Jesteśmy małym zespołem deweloperskim z Zespołu Szkół Licealnych i
            Technicznych Nr. 1 w Warszawie. Pomysł uczestnictwa w konkursie Hack
            Heroes narodził się w szkolnym kole ITSA, które łączy uczniów
            zafascynowanych informatyką oraz innymi nowoczesnymi technologiami.
            Tworzymy mocno zgrany i zintegrowany zespół, w którym praca to
            przyjemność a wspólne projekty - kolejne drogi w kierunku ulepszania
            świata.
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
    <div
      class="polygon2 bg-[#F7F7F7] absolute top-[290%] sm:top-[220%] left-0 right-0 w-screen h-[250vh] sm:h-[200vh]"
    ></div>
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
  mounted() {
    document.title = "e-Sąsiad | Strona Główna";
  },
});
</script>

<style lang="scss" scoped>
* {
  scroll-behavior: smooth;
}

.home-image {
  @apply absolute z-20 w-[40vw] md:top-[20%] xl:top-[20%] 2xl:top-[10%] left-[55%] right-0 invisible md:visible;
}

.home-image-div {
  @apply absolute -top-10 left-0 right-0 w-screen h-[200vh];
}

h1,
h2,
h3,
p {
  @apply text-center sm:text-left;
}

h1 {
  @apply font-semibold text-[2.8125em] xl:text-[3.75em] 2xl:text-[4em];
}

h2 {
  @apply font-semibold text-center sm:text-left text-lg;
}

h3 {
  @apply font-medium text-base;
}

p {
  @apply text-base;
}

p.title {
  @apply text-lg;
}
</style>
