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
  margin-bottom: 28px;
}

.planet-name {
  font-family: "Antonio", sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 52px;
  text-transform: uppercase;
  color: var(--white);
}

.description {
  font-size: 11px;
  line-height: 22px;
  color: var(--white);
  margin: 16px 24px 32px 24px;
}

.source {
  display: flex;
  justify-content: center;
  align-items: center;
}

.source-text {
  font-size: 12px;
  line-height: 25px;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
}

a.wiki {
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-decoration-line: underline;
  margin-right: 4px;
}

@media screen and (min-width: 768px) {
  .text-container {
    width: 50%;
    margin-left: 39px;
    margin-right: 69px;
    text-align: left;
  }

  .planet-name {
    font-size: 48px;
    line-height: 62px;
  }

  .description {
    font-size: 11px;
    line-height: 22px;
    color: var(--white);
    margin: 24px 0px 32px 0px;
  }

  .source {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .text-container {
    width: 100%;
    margin: 0px 0px 39px 0px;
  }

  .planet-name {
    font-size: 80px;
    line-height: 104px;
  }

  .description {
    font-size: 14px;
    line-height: 25px;
    margin: 24px 0px 24px 0px;
  }

  .source-text {
    font-size: 14px;
  }

  a.wiki {
    font-size: 14px;
    margin-right: 8px;
  }
}
</style>