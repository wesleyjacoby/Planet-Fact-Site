<template>
  <main>
    <Tabs
      :isLarge="isLarge"
      :style="color"
      @overview-tab="updateActive"
      @structure-tab="updateActive"
      @surface-tab="updateActive"
    />
    <PlanetImages
      class="planet-image"
      :className="className"
      :activeImage="activeImage"
      :planetName="planetName"
      :surfaceActive="surfaceActive"
    />
    <div class="text-tabs">
      <Text :planetName="planetName" :activeContent="activeContent" />
      <TabsLarge
        :isLarge="isLarge"
        :style="color"
        @overview-tab="updateActive"
        @structure-tab="updateActive"
        @surface-tab="updateActive"
      />
    </div>
  </main>
  <PlanetStats :activeStats="activeStats" />
</template>

<script>
import Tabs from "/src/components/Tabs.vue";
import TabsLarge from "/src/components/TabsLarge.vue";
import PlanetImages from "/src/components/PlanetImages.vue";
import Text from "/src/components/Text";
import PlanetStats from "/src/components/PlanetStats.vue";
import planetData from "/src/data/data.json";

export default {
  components: { Tabs, TabsLarge, PlanetImages, Text, PlanetStats },

  data() {
    return {
      planetName: "Mercury",
      className: "planet-mercury",
      color: "hsla(194, 48%, 50%, 1)",
      overviewActive: true,
      structureActive: false,
      surfaceActive: false,
      planets: planetData,
      width: window.innerWidth,
      isLarge: false,
    };
  },

  mounted() {
    if (this.width > "768") {
      this.isLarge = true;
    }
    window.addEventListener("resize", this.onResize);
  },

  unmounted() {
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.width = window.innerWidth;
      console.log(this.width);
      if (this.width > "768") {
        this.isLarge = true;
      } else {
        this.isLarge = false;
      }
    },

    updateActive(overviewActive, structureActive, surfaceActive) {
      this.overviewActive = overviewActive;
      this.structureActive = structureActive;
      this.surfaceActive = surfaceActive;
    },
  },

  computed: {
    activeImage() {
      if (this.overviewActive) {
        return this.planets[0].images.planet;
      } else if (this.structureActive) {
        return this.planets[0].images.internal;
      } else {
        return [this.planets[0].images.geology, this.planets[0].images.planet];
      }
    },

    activeContent() {
      if (this.overviewActive) {
        return [
          this.planets[0].overview.content,
          this.planets[0].overview.source,
        ];
      } else if (this.structureActive) {
        return [
          this.planets[0].structure.content,
          this.planets[0].structure.source,
        ];
      } else {
        return [
          this.planets[0].geology.content,
          this.planets[0].geology.source,
        ];
      }
    },

    activeStats() {
      return [
        this.planets[0].rotation,
        this.planets[0].revolution,
        this.planets[0].radius,
        this.planets[0].temperature,
      ];
    },
  },
};
</script>

<style>
.text-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>