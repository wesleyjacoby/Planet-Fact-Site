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
</template>

<script>
import Tabs from "/src/components/Tabs.vue";
import PlanetImages from "/src/components/PlanetImages.vue";
import Text from "/src/components/Text";
import planetData from "/src/data/data.json";

export default {
  components: { Tabs, PlanetImages, Text },

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

    activeContent() {
      if (this.overviewActive) {
        return [
          this.planets[1].overview.content,
          this.planets[1].overview.source,
        ];
      } else if (this.structureActive) {
        return [
          this.planets[1].structure.content,
          this.planets[1].structure.source,
        ];
      } else {
        return [
          this.planets[1].geology.content,
          this.planets[1].geology.source,
        ];
      }
    },
  },
};
</script>

<style>
</style>