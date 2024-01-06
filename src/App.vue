<template>
  <div>
    <Navbar />
  </div>
  <div class="components">
    <div class="buttons">
      <Button text="Play Now" imageSource="play.png" />
      <Button text="Watch Trailer" imageSource="play.png" />
      <Button text="Add Watchlist" imageSource="bookmark.png" />
      <Button text="Continue Watching" imageSource="play.png" />
      <Button text="Download" imageSource="download.png" />
      <Button text="Share" imageSource="share.png" />
      <Button text="Like" imageSource="heart.svg" />
    </div>

    <div>
      <PopularMovie />
    </div>
  </div>
</template>

<script>
import { Button, MovieGenre } from "@/components/molecules";
import { Navbar, PopularMovie, Ratings } from "@/components/organisms";

export default {
  components: {
    Button,
    Navbar,
    PopularMovie,
    MovieGenre,
    Ratings,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

body {
  background: $color-black-solid;
  color: $color-white-solid;
}

.components {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
