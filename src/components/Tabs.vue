<template>
  <nav class="tabs-container" :style="style">
    <div class="text">
      <a
        href="#"
        @click="overviewClick"
        :class="[overviewActive ? 'active-link' : '']"
        ><p>Overview</p></a
      >
    </div>

    <div class="text">
      <a
        href="#"
        @click="structureClick"
        :class="[structureActive ? 'active-link' : '']"
        ><p>Structure</p></a
      >
    </div>

    <div class="text">
      <a
        href="#"
        @click="surfaceClick"
        :class="[surfaceActive ? 'active-link' : '']"
        ><p>Surface</p></a
      >
    </div>
  </nav>

  <hr />
</template>

<script>
export default {
  props: ["style"],

  data() {
    return {
      overviewActive: true,
      structureActive: false,
      surfaceActive: false,
    };
  },

  methods: {
    overviewClick() {
      this.overviewActive = true;
      this.structureActive = false;
      this.surfaceActive = false;
    },

    structureClick() {
      this.overviewActive = false;
      this.structureActive = true;
      this.surfaceActive = false;
    },

    surfaceClick() {
      this.overviewActive = false;
      this.structureActive = false;
      this.surfaceActive = true;
    },
  },
};
</script>

<style>
.tabs-container {
  display: flex;
  justify-content: space-around;
}

.text {
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
}

.text p {
  padding: 20px 0px;
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
  text-underline-offset: 20px;
}

.text a.active-link {
  opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 20px;
}
</style>