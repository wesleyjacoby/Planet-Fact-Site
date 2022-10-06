<template>
  <Tabs
    :style="color"
    @overview-tab="updateActive"
    @structure-tab="updateActive"
    @surface-tab="updateActive"
  />
  <PlanetImages
    :className="className"
    :activeImage="activeImage"
    :planetName="planetName"
    :surfaceActive="surfaceActive"
  />
</template>

<script>
import Tabs from "/src/components/Tabs.vue";
import PlanetImages from "/src/components/PlanetImages.vue";
import planetData from "/src/data/data.json";

export default {
  components: { Tabs, PlanetImages },

  data() {
    return {
      planetName: "Saturn",
      className: "planet-saturn",
      color: "hsla(17, 73%, 46%, 1)",
      overviewActive: true,
      structureActive: false,
      surfaceActive: false,
      planets: planetData,
    };
  },

  methods: {
    updateActive(overviewActive, structureActive, surfaceActive) {
      this.overviewActive = overviewActive;
      this.structureActive = structureActive;
      this.surfaceActive = surfaceActive;
    },
  },

  computed: {
    activeImage() {
      if (this.overviewActive) {
        return this.planets[5].images.planet;
      } else if (this.structureActive) {
        return this.planets[5].images.internal;
      } else {
        return [this.planets[5].images.geology, this.planets[5].images.planet];
      }
    },
  },
};
</script>

<style>
</style>