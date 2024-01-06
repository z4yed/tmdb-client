<template>
  <div class="nav">
    <div class="nav__left">
      <h2>TheMovieCentral</h2>
    </div>
    <div class="nav__links">
      <ul>
        <li>Home</li>
        <li>Discover</li>
        <li>Movie Release</li>
        <li>Forum</li>
        <li>Your Favourite</li>
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
  font-family: Rubik;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 36px 75px;

  &__left {
    h2 {
      font-feature-settings: "clig" off, "liga" off;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px;
    }
  }

  &__links {
    ul {
      display: flex;
      gap: 32px;
      align-items: center;

      li {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
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
