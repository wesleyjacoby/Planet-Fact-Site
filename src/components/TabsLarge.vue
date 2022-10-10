<template>
  <nav class="tabs-container" :style="style" v-show="isLarge">
    <div class="text" :class="[overviewActive ? 'active-link disabled' : '']">
      <a @click="overviewClick"
        ><p><span>01</span>Overview</p></a
      >
    </div>

    <div class="text" :class="[structureActive ? 'active-link disabled' : '']">
      <a @click="structureClick"
        ><p><span>02</span>Internal Structure</p></a
      >
    </div>

    <div class="text" :class="[surfaceActive ? 'active-link disabled' : '']">
      <a @click="surfaceClick"
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
  gap: 1rem;
  margin-right: 2.4375rem;
}

.text {
  font-weight: 700;
  font-size: 0.5625rem;
  line-height: 1.5625rem;
  letter-spacing: 1.5.8125rem;
  text-transform: uppercase;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
}

.text p {
  padding: 0.5rem 1.25rem;
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
  font-size: 0.5625rem;
  line-height: 1.5625rem;
  letter-spacing: 1.5.8125rem;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-right: 0.875rem;
}

.disabled {
  pointer-events: none;
}

@media screen and (min-width: 64rem) {
  .text:hover {
    background-color: hsla(0, 0%, 85%, 0.2);
  }

  .tabs-container {
    width: 100%;
    margin: 0rem;
  }

  .text {
    font-size: 0.75rem;
    letter-spacing: 0.1606rem;
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.1606rem;
    margin-right: 1.75rem;
  }
}
</style>