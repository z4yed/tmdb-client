<template>
  <div class="footer">
    <ul class="footer__left">
      <li>
        <a href="">Privacy Policy</a>
      </li>
      <li>
        <a href="Terms and conditions"> Terms and conditions</a>
      </li>
      <li>
        <a href="Language">Language</a>
      </li>
    </ul>
    <div class="footer__social">
      <a href="">
        <img src="../../../assets/images/icons/social/Instagram.png" alt="" />
      </a>
      <a href="">
        <img src="../../../assets/images/icons/social/Facebook.png" alt="" />
      </a>

      <a href="">
        <img src="../../../assets/images/icons/social/Twitter.png" alt="" />
      </a>
      <a href="">
        <img src="../../../assets/images/icons/social/Google.png" alt="" />
      </a>
    </div>
    <div class="footer__copyright">&copy; 2023</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 88px 75px 42px;

  &__left {
    display: flex;
    align-items: center;
    gap: 26px;

    li a {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      opacity: 0.7;
    }
  }

  &__social {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  &__copyright {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    opacity: 0.7;
  }
}
</style>
