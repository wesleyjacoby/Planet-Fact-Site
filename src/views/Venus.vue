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
      planetName: "Venus",
      className: "planet-venus",
      color: "hsla(33, 82%, 61%, 1)",
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
        return this.planets[1].images.planet;
      } else if (this.structureActive) {
        return this.planets[1].images.internal;
      } else {
        return [this.planets[1].images.geology, this.planets[1].images.planet];
      }
    },
  },
};
</script>

<style>
</style>