<template>
  <h1>TMDB Client by Zayed Hassan</h1>

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

export default {
  components: {
    Button,
  },
  setup() {
    return {
      Button,
    };
  },
};
</script>

<style lang="scss">
body {
  background: $color-black-solid;
  color: white;
}
</style>
