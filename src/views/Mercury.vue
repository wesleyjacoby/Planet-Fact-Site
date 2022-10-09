<template>
  <main>
    <Tabs
      :isLarge="isLarge"
      :style="color"
      @overview-tab="updateActive"
      @structure-tab="updateActive"
      @surface-tab="updateActive"
    />
    <div class="large-container">
      <PlanetImages
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
    </div>
    <PlanetStats :activeStats="activeStats" />
  </main>
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
main {
  margin: 0 auto;
  max-width: 1250px;
}

.text-tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media screen and (min-width: 1024px) {
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .large-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 126px;
    margin-bottom: 87px;
  }

  .text-tabs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 30%;
  }
}
</style>