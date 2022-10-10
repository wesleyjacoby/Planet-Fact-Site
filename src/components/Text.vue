<template>
  <div class="text-container">
    <div class="header">
      <h2 class="planet-name">{{ planetName }}</h2>
    </div>

    <article class="content">
      <p class="description">{{ activeContent[0] }}</p>
    </article>

    <div class="source">
      <p class="source-text">Source :&nbsp;</p>
      <a :href="activeContent[1]" target="_blank" class="wiki">Wikipedia</a>
      <img :src="source" alt="Source Image" />
    </div>
  </div>
</template>

<script>
import sourceImage from "/src/assets/images/icon-source.svg";

export default {
  props: ["planetName", "activeContent"],

  data() {
    return {
      source: sourceImage,
    };
  },
};
</script>

<style>
.text-container {
  text-align: center;
  margin-bottom: 1.75rem;
}

.planet-name {
  font-family: "Antonio", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 3.25rem;
  text-transform: uppercase;
  color: var(--white);
}

.description {
  font-size: 0.6875rem;
  line-height: 1.375rem;
  color: var(--white);
  margin: 1rem 1.5rem 2rem 1.5rem;
}

.source {
  display: flex;
  justify-content: center;
  align-items: center;
}

.source-text {
  font-size: 0.75rem;
  line-height: 1.5625rem;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
}

a.wiki {
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.5625rem;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-decoration-line: underline;
  margin-right: 0.25rem;
}

@media screen and (min-width: 48rem) {
  .text-container {
    width: 50%;
    margin-left: 2.4375rem;
    margin-right: 4.3125rem;
    text-align: left;
  }

  .planet-name {
    font-size: 3rem;
    line-height: 3.875rem;
  }

  .description {
    font-size: 0.6875rem;
    line-height: 1.375rem;
    color: var(--white);
    margin: 1.5rem 0rem 2rem 0rem;
  }

  .source {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

@media screen and (min-width: 64rem) {
  .text-container {
    width: 100%;
    margin: 0rem 0rem 2.4375rem 0rem;
  }

  .planet-name {
    font-size: 5rem;
    line-height: 6.5rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    margin: 1.5rem 0rem 1.5rem 0rem;
  }

  .source-text {
    font-size: 0.875rem;
  }

  a.wiki {
    font-size: 0.875rem;
    margin-right: 0.5rem;
  }
}
</style>