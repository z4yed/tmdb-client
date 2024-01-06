<template>
  <div class="cast">
    <div class="cast__profile">
      <img
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <div class="cast__details">
      <div class="cast__details__name-real">Joel Pedro</div>
      <div class="cast__details__name-nick">Angelo Gomez</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cast {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  gap: 12px;

  &__profile {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  &__details {
    &__name-real {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: 0.08px;
    }

    &__name-nick {
      color: $color-gray;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px; /* 183.333% */
      letter-spacing: 0.06px;
    }
  }
}
</style>
