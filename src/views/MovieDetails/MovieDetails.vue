<template>
  <div class="details_header">
    <Navbar />
    <Hero :isDetailsPage="true" />
  </div>
  <div class="details_content">
    <div class="details_content__story">
      <h2 class="">Story Line</h2>
      <p>
        The Last of Us is an American post-apocalyptic drama television series
        created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013
        video game developed by Naughty Dog, the series is set in 2023, twenty
        years into a pandemic caused by a mass fungal infection, which causes
        its hosts to transform into zombie-like creatures and collapses society.
        The series follows Joel (Pedro Pascal), a smuggler tasked with escorting
        the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic
        United States....
        <span class="more"> More </span>
      </p>
    </div>
    <TopCasts />
    <Recommendation />
  </div>
</template>
<script>
import { Navbar, Hero } from "@/components/organisms";
import { TopCasts, Recommendation } from "@/components/templates";
export default {
  components: {
    Navbar,
    Hero,
    TopCasts,
    Recommendation,
  },
};
</script>

<style lang="scss">
.details_header {
  position: relative;
  min-height: 648px;
}

.details_content {
  color: $color-white-solid;
  background: $color-black-solid;
  padding-left: 75px;

  &__story {
    padding: 0 75px;
    h2 {
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 26px; /* 144.444% */
      letter-spacing: 0.09px;
    }

    p {
      margin-top: 16px;
      color: $color-gray;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    .more {
      color: $color-green;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
