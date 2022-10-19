<template>
  <nav
    class="fixed w-screen py-5 flex justify-center bg-[#F7F7F7] z-50 left-0 right-0"
  >
    <div class="flex w-[90%] justify-between items-center">
      <h2 class="text-main text-xl font-semibold">e-Sąsiad</h2>
      <div class="flex sm:w-1/3 justify-evenly">
        <router-link to="/app" id="community">
          <p>Społeczność</p>
        </router-link>
        <router-link to="/app/help" id="help">
          <p>Pomoc</p>
        </router-link>
        <router-link to="/app/fault" id="fault">
          <p>Zgłoś usterkę</p>
        </router-link>
        <router-link to="/app/ranking" id="ranking">
          <p>Ranking</p>
        </router-link>
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

<style lang="scss" scoped>
p {
  @apply text-base;
}

a:not(.router-link-exact-active) {
  @apply hover:font-medium transition-all;
}

.router-link-exact-active {
  @apply font-semibold text-main2 transition-all;
}
</style>
