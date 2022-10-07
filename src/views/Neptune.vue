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
  <Text :planetName="planetName" :activeContent="activeContent" />
  <PlanetStats :activeStats="activeStats" />
</template>

<script>
import Tabs from "/src/components/Tabs.vue";
import PlanetImages from "/src/components/PlanetImages.vue";
import Text from "/src/components/Text";
import PlanetStats from "/src/components/PlanetStats.vue";
import planetData from "/src/data/data.json";

export default {
  components: { Tabs, PlanetImages, Text, PlanetStats },

  data() {
    return {
      planetName: "Neptune",
      className: "planet-neptune",
      color: "hsla(222, 87%, 56%, 1)",
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
        return this.planets[7].images.planet;
      } else if (this.structureActive) {
        return this.planets[7].images.internal;
      } else {
        return [this.planets[7].images.geology, this.planets[7].images.planet];
      }
    },

    activeContent() {
      if (this.overviewActive) {
        return [
          this.planets[7].overview.content,
          this.planets[7].overview.source,
        ];
      } else if (this.structureActive) {
        return [
          this.planets[7].structure.content,
          this.planets[7].structure.source,
        ];
      } else {
        return [
          this.planets[7].geology.content,
          this.planets[7].geology.source,
        ];
      }
    },

    activeStats() {
      return [
        this.planets[7].rotation,
        this.planets[7].revolution,
        this.planets[7].radius,
        this.planets[7].temperature,
      ];
    },
  },
};
</script>

<style>
</style>