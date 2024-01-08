<template>
  <div class="cast">
    <div class="cast__profile">
      <img :src="profile_photo_path" alt="404" />
    </div>
    <div class="cast__details">
      <div class="cast__details__name-real">{{ cast.name }}</div>
      <div class="cast__details__name-nick">{{ cast.character }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cast: {
      type: Object,
      required: true,
    },
  },
  setup({ cast }) {
    const profile_photo_path = `${process.env.VUE_APP_TMDB_FILES_BASE_PATH}${cast.profile_path}`;

    return {
      profile_photo_path,
    };
  },
};
</script>

<style lang="scss">
.cast {
  display: flex;
  justify-content: center;
  align-items: center;
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
