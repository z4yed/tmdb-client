<template>
  <div class="nav">
    <div class="nav__left">
      <router-link to="/"> TheMovieCentral </router-link>
    </div>
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
        <input type="hidden" />
        <img src="../../../assets/images/icons/search.png" alt="" />
      </div>
      <div class="nav__right-notification">
        <img src="../../../assets/images/icons/bell.png" alt="" />
      </div>
      <div class="nav__right-profile">
        <img src="../../../assets/images/icons/profile.png" alt="" />
        <img src="../../../assets/images/icons/arrow_down.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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

  &__links {
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

  &__right {
    display: flex;
    gap: 23px;

    &-profile {
      display: flex;
      align-items: center;
      gap: 6px;

      img {
        cursor: pointer;
      }
    }
  }
}
</style>
