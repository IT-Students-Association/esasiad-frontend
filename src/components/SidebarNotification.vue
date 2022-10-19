<template>
  <div class="flex flex-col mt-3 w-full">
    <div class="flex justify-start gap-1">
      <img src="@/assets/icons/user.svg" class="w-10 h-auto" alt="user" />
      <div class="flex flex-col font-regular">
        <p>Imię nazwisko</p>
        <p>Do [nazwa osiedla]</p>
      </div>
    </div>
    <p class="font-light">Tutaj będzie początek tytułu...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarNotification",
});
</script>
