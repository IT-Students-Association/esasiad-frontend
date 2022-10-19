<template>
  <div class="flex gap-5 bg-white !py-5 px-5 rounded-3xl box">
    <div class="rounded-2xl h-full w-auto">
      <img
        src="@/assets/images/placeholder.png"
        class="rounded-2xl h-full w-full object-cover"
        alt="placeholder"
      />
    </div>
    <div class="flex flex-col w-3/4">
      <div class="flex justify-between w-full">
        <div class="flex items-center gap-1">
          <img src="@/assets/icons/user.svg" class="w-12 h-auto" alt="user" />
          <div>
            <p>Mateusz Pasek</p>
            <p class="font-light">Potężny Sąsiad | 9999pkt</p>
          </div>
        </div>
        <p class="font-light">e-Sąsiad HQ, 1 godzinę temu</p>
      </div>
      <div class="flex flex-col">
        <h2 class="text-lg font-semibold">
          Testowa wiadomość Administracji serwisu e-Sąsiad
        </h2>
        <p class="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </p>
      </div>
      <div class="flex gap-5">
        <div class="flex items-center gap-2">
          <img src="@/assets/icons/like.svg" class="w-6 h-auto" alt="like" />
          <p class="mt-1 font-light">55k polubień</p>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="@/assets/icons/messages.svg"
            class="w-6 h-auto"
            alt="comments"
          />
          <p class="mt-1 font-light">2k komentarzy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommunityPost",
});
</script>
