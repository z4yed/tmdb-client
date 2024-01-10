<template>
  <div class="nav" :class="isMenuOpen ? 'mobile-menu-open' : ''">
    <div class="nav__left" :class="isMenuOpen ? 'bg-solid' : 'bg-transparent'">
      <router-link to="/"> TheMovieCentral </router-link>
    </div>
    <div class="nav__actions">
      <div class="nav__links">
        <ul>
          <li>
            <router-link to="/" title="Home"> Home </router-link>
          </li>
          <li>
            <router-link to="/" title="Discover"> Discover </router-link>
          </li>
          <li>
            <router-link to="/" title="Movie Release">
              Movie Release
            </router-link>
          </li>

          <li>
            <router-link to="/" title="Forum"> Forum </router-link>
          </li>
          <li>
            <router-link to="/" title="Your Favourite">
              Your Favourite
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav__right">
        <div class="nav__right-search">
          <img src="../../../assets/images/icons/search.png" alt="" />
        </div>
        <div class="nav__right-notification">
          <img src="../../../assets/images/icons/bell.png" alt="" />
        </div>
        <div class="nav__right-profile" v-if="isLoggedIn">
          <img
            :src="authUser.picture"
            class="nav__right-profile__photo"
            alt="pic"
            @mouseenter="setShowProfileSection"
          />
          <img
            src="../../../assets/images/icons/arrow_down.png"
            class="nav__right-profile__arrow"
            alt=""
            @mouseenter="setShowProfileSection"
          />
        </div>
        <div
          class="nav__right-login"
          v-if="!isLoggedIn"
          :class="highlightLogin ? 'nav__right-login__highlight' : ''"
        >
          <GoogleLogin :callback="handleGoogleLogin" />
        </div>
        <div
          class="nav__right-profile__details"
          v-if="isLoggedIn && showProfileDetails"
          @mouseleave="hideProfileSection"
        >
          <h3 class="name">Md. Zayed Hassan</h3>
          <p class="email">zayed.cs3@gmail.com</p>
          <button class="logout" @click="handleLogout">Logout</button>
        </div>
      </div>
    </div>

    <div class="nav__hamburger">
      <svg viewBox="0 0 100 80" width="40" height="40" v-if="!isMenuOpen">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      <svg viewBox="0 0 24 24" width="40" height="40" v-if="isMenuOpen">
        <line x1="18" y1="6" x2="6" y2="18" stroke="white" stroke-width="2" />
        <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="2" />
      </svg>

      <input
        type="checkbox"
        class="nav__hamburger-status"
        @change="toggleCheckStatus"
      />
    </div>
  </div>
</template>

<script>
import { decodeCredential } from "vue3-google-login";
import { googleLogout } from "vue3-google-login";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";

export default {
  setup() {
    const store = useStore();
    const showProfileDetails = ref(false);
    const isMenuOpen = ref(true);

    const isLoggedIn = computed(() => {
      return store.getters.isLoggedIn;
    });

    const toggleCheckStatus = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const highlightLogin = computed(() => {
      return store.state.highlightLogin;
    });

    watch(
      () => store.state.highlightLogin,
      function (current) {
        if (current) {
          store.dispatch("hideLoginHighlight");
        }
      }
    );

    const authUser = computed(() => {
      return store.state.user;
    });

    const setShowProfileSection = () => {
      showProfileDetails.value = true;
    };

    const hideProfileSection = () => {
      showProfileDetails.value = false;
    };

    const handleGoogleLogin = (response) => {
      const userData = decodeCredential(response.credential);
      if (userData.email_verified) {
        const authUserData = {
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
        };

        store.commit("login", authUserData);
        localStorage.setItem("authUserData", JSON.stringify(authUserData));
      }
    };

    const handleLogout = () => {
      store.commit("logout");
      localStorage.removeItem("authUserData");
      googleLogout();
    };

    return {
      handleGoogleLogin,
      isLoggedIn,
      authUser,
      showProfileDetails,
      setShowProfileSection,
      hideProfileSection,
      handleLogout,
      highlightLogin,
      toggleCheckStatus,
      isMenuOpen,
    };
  },
};
</script>

<style lang="scss">
$root: ".nav";
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 36px 75px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  &__left {
    a {
      font-feature-settings: "clig" off, "liga" off;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px;
      cursor: pointer;
    }
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    #{$root}__links {
      ul {
        display: flex;
        gap: 32px;
        align-items: center;

        li {
          a {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;

            &::before {
              display: block;
              content: attr(title);
              font-weight: bold;
              height: 0;
              overflow: hidden;
              visibility: hidden;
            }

            &:hover {
              cursor: pointer;
              font-weight: bold;
            }
          }
        }
      }
    }

    #{$root}__right {
      display: flex;
      gap: 23px;
      position: relative;

      > div {
        display: flex;
        align-items: center;
      }

      &-profile {
        display: flex;
        align-items: center;
        gap: 6px;

        &__photo {
          cursor: pointer;
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        &__arrow {
          cursor: pointer;
        }
      }

      &-login {
        padding: 2px;
        &__highlight {
          position: relative;
          border: 2px solid #ff1e00;
          border-radius: 8px;
        }
      }

      &-profile__details {
        position: absolute;
        background: $color-gray;
        padding: 10px 20px;
        border-radius: 16px;

        display: flex;
        flex-direction: column;
        top: 37px;
        right: 5px;

        .name {
          color: $color-black-solid;

          font-size: 18px;
          font-style: normal;
          font-weight: 700;
          line-height: 26px; /* 144.444% */
          letter-spacing: 0.09px;
        }

        .email {
          color: $color-black-solid;

          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
        }

        .logout {
          margin-top: 10px;
          width: 100%;
          border: 0;
          color: $color-black-solid;
          font-weight: bold;
          padding: 6px;
          cursor: pointer;
        }
      }
    }
  }

  &__hamburger {
    display: none;
    position: relative;
    svg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      padding: 5px;
      fill: white;
      pointer-events: none;
    }

    &-status {
      height: 40px;
      width: 40px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
    }
  }

  @include respond-to("<medium") {
    position: relative;
    padding: 0;

    display: flex;
    flex-direction: column;

    &__left {
      padding: 30px 20px;
      height: 90px;
      width: 100vw;
      a {
        font-size: 24px;
        cursor: pointer;
      }
    }

    &__actions {
      width: 100vw;

      #{$root}__links,
      #{$root}__right {
        display: none;
      }
    }

    #{$root}__hamburger {
      display: block;
      position: absolute;
      right: 60px;
      top: 30px;
    }
  }
}

.mobile-menu-open {
  position: relative;
  flex-direction: column;

  #{$root}__actions {
    position: absolute;
    min-height: 70vh;
    width: 100vw;
    background: $color-black-700;

    top: 90px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 0;

    #{$root}__links {
      display: block;
      width: 100%;

      ul {
        flex-direction: column;
      }
    }

    #{$root}__right {
      position: relative;
      display: flex;
    }
  }
}
</style>
