<template>
  <nav
    class="fixed w-full mx-auto pt-10 pb-10 flex items-center bg-[#F7F7F7] z-50 left-0 right-0"
  >
    <h2 class="text-main text-x ml-20 font-semibold">e-Sąsiad</h2>
    <div class="flex mx-auto sm:w-1/3 justify-evenly">
      <p>Społeczność</p>
      <router-link to="/help">
        <p>Pomoc</p>
      </router-link>
      <p>Zgłoś usterkę</p>
      <p>Ranking</p>
    </div>
    <div class="flex sm:w-2/12">
      <img src="@/assets/icons/notifs.png" class="nav-icons" />
      <img src="@/assets/icons/helper.png" class="nav-icons" />
      <img src="@/assets/icons/settings.png" class="nav-icons px-5" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>

<style lang="sass" scoped></style>
