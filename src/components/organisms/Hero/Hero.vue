<template>
  <div class="hero">
    <div class="hero__background">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero image"
        class="hero__background-img"
      />
    </div>
    <div class="hero__description" v-if="!isDetailsPage">
      <div class="hero__description-season">
        <span>Season 3</span>
      </div>
      <div class="hero__description-title">
        <h2>The Last of Us</h2>
      </div>
      <div class="hero__description-others">
        <span>2h40m • 2022 • Fantasy • Actions</span>
      </div>
      <div class="hero__description-details">
        <p>
          The third season of the American television series The Mandalorian
          stars Pedro Pascal as the title character, a bounty hunter traveling
          to Mandalore to redeem his past transgressions with his adopted son
          Grogu and being aided on their journey by fellow Mandalorian Bo-Katan
          Kryze.
        </p>
      </div>
      <div class="hero__description-actions">
        <Button imageSource="play.png" text="Play Now" />
        <Button imageSource="play.png" text="Watch Trailer" />
        <Button imageSource="bookmark.png" text="Add Watchlist" />
      </div>
    </div>

    <div class="hero__description" v-if="isDetailsPage">
      <div class="hero__description-season">
        <span>Season 3</span>
      </div>
      <div class="hero__description-title">
        <h2>The Last of Us</h2>
      </div>
      <div class="hero__description-others">
        <span>2h40m • 2022 • Fantasy • Actions</span>
      </div>
      <div class="hero__description-actions" v-if="!isDetailsPage">
        <Button imageSource="play.png" text="Play Now" />
        <Button imageSource="play.png" text="Watch Trailer" />
        <Button imageSource="bookmark.png" text="Add Watchlist" />
      </div>

      <div class="hero__description-actions__details" v-if="isDetailsPage">
        <div>
          <Button imageSource="play.png" text="Continue Watching" />
          <Button imageSource="bookmark.png" text="Add Watchlist" />
        </div>
        <div>
          <Button imageSource="download.png" text="Download" />
          <Button imageSource="share.png" text="Share" />
          <Button imageSource="heart.svg" text="Like" />
        </div>
      </div>
    </div>

    <div class="hero__overlay" @click="navigateToDetails(4)"></div>
  </div>
</template>

<script>
import { Button } from "../../molecules";
import { useRouter } from "vue-router";
export default {
  props: {
    movie: {
      type: Object,
      required: false,
    },
    isDetailsPage: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const navigateToDetails = (movieId) => {
      router.push({
        name: "MovieDetails",
        params: { id: movieId },
      });
    };

    return {
      router,
      navigateToDetails,
    };
  },
};
</script>

<style lang="scss">
.hero {
  max-width: 100vw;
  overflow: hidden;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;

  &__background {
    position: absolute;
    z-index: 1;

    &-img {
      width: 100vw;
      height: 648px;
      object-fit: cover;
    }
  }

  &__description {
    position: absolute;
    left: 75px;
    bottom: 64px;
    right: 0;
    z-index: 3;

    &-season {
      span {
        border-radius: 16px;
        background: $color-black-800;
        padding: 4px 16px;

        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 183.333% */
        letter-spacing: 0.06px;
      }
    }

    &-title {
      margin-top: 28px;
      h2 {
        font-feature-settings: "clig" off, "liga" off;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px; /* 125% */
      }
    }

    &-others {
      margin-top: 8px;
      span {
        color: $color-gray;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
      }
    }

    &-details {
      overflow: hidden;
      margin-top: 8px;

      p {
        text-overflow: ellipsis;
        max-width: 500px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }

    &-actions {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &-actions__details {
      padding-right: 75px;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        gap: 16px;
        align-items: center;
      }
    }
  }

  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 100%;
    cursor: pointer;

    background: linear-gradient(
      359deg,
      #0d0c0f 0.83%,
      rgba(13, 12, 15, 0.85) 28.55%,
      rgba(13, 12, 15, 0.26) 57.53%,
      rgba(13, 12, 15, 0.28) 70.66%,
      #0d0c0f 103.18%
    );
  }
}
</style>
