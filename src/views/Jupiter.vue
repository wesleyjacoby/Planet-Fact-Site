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
      planetName: "Jupiter",
      className: "planet-jupiter",
      color: "hsla(2, 68%, 53%, 1)",
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
        return this.planets[4].images.planet;
      } else if (this.structureActive) {
        return this.planets[4].images.internal;
      } else {
        return [this.planets[4].images.geology, this.planets[4].images.planet];
      }
    },

    activeContent() {
      if (this.overviewActive) {
        return [
          this.planets[4].overview.content,
          this.planets[4].overview.source,
        ];
      } else if (this.structureActive) {
        return [
          this.planets[4].structure.content,
          this.planets[4].structure.source,
        ];
      } else {
        return [
          this.planets[4].geology.content,
          this.planets[4].geology.source,
        ];
      }
    },

    activeStats() {
      return [
        this.planets[4].rotation,
        this.planets[4].revolution,
        this.planets[4].radius,
        this.planets[4].temperature,
      ];
    },
  },
};
</script>

<style>
</style>