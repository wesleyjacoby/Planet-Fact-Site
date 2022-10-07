<template>
  <nav class="tabs-container" :style="style" v-show="isLarge">
    <div class="text">
      <a @click="overviewClick" :class="[overviewActive ? 'active-link' : '']"
        ><p><span>01</span>Overview</p></a
      >
    </div>

    <div class="text">
      <a @click="structureClick" :class="[structureActive ? 'active-link' : '']"
        ><p><span>02</span>Internal Structure</p></a
      >
    </div>

    <div class="text">
      <a @click="surfaceClick" :class="[surfaceActive ? 'active-link' : '']"
        ><p><span>03</span>Geology Surface</p></a
      >
    </div>
  </nav>
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
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  margin-right: 40px;
}

.text {
  width: 281px;
  font-weight: 700;
  font-size: 9px;
  line-height: 25px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
}

.text p {
  padding: 8px 20px;
}

.text a {
  /* mix-blend-mode: normal;
  opacity: 0.5; */
  color: var(--white);
}

.text:hover {
  cursor: pointer;
  /* opacity: 1; */
}

.text:hover {
  background-color: v-bind(style);
  /* opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 20px; */
}

.text.active-link {
  background-color: v-bind(style);
  /* opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 20px; */
}

span {
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-right: 14px;
}
</style>