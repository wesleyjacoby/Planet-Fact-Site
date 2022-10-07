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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  margin-right: 40px;
}

.text {
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
  color: var(--white);
}

.text:hover {
  cursor: pointer;
}

.text:hover {
  background-color: v-bind(style);
}

.text.active-link {
  background-color: v-bind(style);
}

span {
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-right: 14px;
}
</style>