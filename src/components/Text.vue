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
</style>