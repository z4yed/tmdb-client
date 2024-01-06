<template>
  <div>
    <Navbar />
  </div>
  <div>
    <Button text="Play Now" imageSource="play.png" />
    <Button text="Watch Trailer" imageSource="play.png" />
    <Button text="Add Watchlist" imageSource="bookmark.png" />
    <Button text="Continue Watching" imageSource="play.png" />
    <Button text="Download" imageSource="download.png" />
    <Button text="Share" imageSource="share.png" />
    <Button text="Like" imageSource="heart.svg" />
  </div>
</template>

<script>
import { Button } from "@/components/molecules";
import { Navbar } from "@/components/organisms";

export default {
  components: {
    Button,
    Navbar,
  },
  setup() {
    return {
      Button,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");

body {
  background: $color-black-solid;
  color: $color-white-solid;
}
</style>
