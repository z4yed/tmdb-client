<template>
  <router-view />
  <div class="app_footer">
    <Footer />
  </div>
</template>

<script>
import { Footer } from "@/components/organisms";
import { useStore } from "vuex";
import { onMounted, watch } from "vue";

export default {
  components: {
    Footer,
  },
  setup() {
    const store = useStore();
    store.dispatch("setGenres");

    watch(
      () => store.state.user,
      function (current) {
        if (current) {
          store.dispatch("setFavorites");
          store.dispatch("setWatchList");
        }
      }
    );

    if (localStorage.getItem("authUserData")) {
      const authUser = JSON.parse(localStorage.getItem("authUserData"));

      if (authUser.name && authUser.email && authUser.picture) {
        store.commit("login", authUser);
      }
    }

    return {
      store,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
@import "vue3-toastify/dist/index.css";

.app_footer {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;

  @include respond-to("<medium") {
    color: $color-white-solid;
    background: $color-black-solid;
    padding-left: 20px;
  }
}
</style>
