<template>
  <nav
    class="fixed w-screen py-5 flex justify-center bg-[#F7F7F7] z-50 left-0 right-0"
  >
    <div class="flex w-[90%] justify-between items-center">
      <h2 class="text-main text-xl font-semibold">e-Sąsiad</h2>
      <div class="flex sm:w-1/3 justify-evenly">
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
        <img src="@/assets/icons/settings.png" class="nav-icons" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainNavbar",
};
</script>

<style lang="sass" scoped></style>
