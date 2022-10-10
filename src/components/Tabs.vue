<template>
  <nav class="tabs-container" :style="style" v-show="!isLarge">
    <div class="text">
      <a @click="overviewClick" :class="[overviewActive ? 'active-link' : '']"
        ><p>Overview</p></a
      >
    </div>

    <div class="text">
      <a @click="structureClick" :class="[structureActive ? 'active-link' : '']"
        ><p>Structure</p></a
      >
    </div>

    <div class="text">
      <a @click="surfaceClick" :class="[surfaceActive ? 'active-link' : '']"
        ><p>Surface</p></a
      >
    </div>
  </nav>

  <hr />
</template>

<script>
export default {
  props: ["style", "isLarge"],

  data() {
    return {
      overviewActive: true,
      structureActive: false,
      surfaceActive: false,
    };
  },

  emits: ["overview-tab", "structure-tab", "surface-tab"],

  methods: {
    overviewClick() {
      this.overviewActive = true;
      this.structureActive = false;
      this.surfaceActive = false;

      this.$emit(
        "overview-tab",
        this.overviewActive,
        this.structureActive,
        this.surfaceActive
      );
    },

    structureClick() {
      this.overviewActive = false;
      this.structureActive = true;
      this.surfaceActive = false;

      this.$emit(
        "structure-tab",
        this.overviewActive,
        this.structureActive,
        this.surfaceActive
      );
    },

    surfaceClick() {
      this.overviewActive = false;
      this.structureActive = false;
      this.surfaceActive = true;

      this.$emit(
        "surface-tab",
        this.overviewActive,
        this.structureActive,
        this.surfaceActive
      );
    },
  },
};
</script>

<style scoped>
.tabs-container {
  display: flex;
  justify-content: space-around;
}

.text {
  font-weight: 400;
  font-size: 0.5625rem;
  line-height: 0.625rem;
  letter-spacing: 0.1206rem;
  text-transform: uppercase;
}

.text p {
  padding: 1.25rem 0rem;
}

.text a {
  mix-blend-mode: normal;
  opacity: 0.5;
  color: var(--white);
}

.text:hover {
  cursor: pointer;
  opacity: 1;
}

.text a:hover {
  opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 1.25rem;
}

.text a.active-link {
  opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 1.25rem;
}

@media screen and (min-width: 48rem) {
  hr {
    display: none;
  }
}
</style>