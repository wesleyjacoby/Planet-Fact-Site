<template>
  <Tabs :style="color" />
  <div class="planet-image">
    <img
      :src="planetMercury"
      alt="Planet Mercury"
      class="overview mercury-planet"
    />
    <img :src="planetMercuryInternal" alt="Planet Mercury Internal Structure" />
  </div>
</template>

<script>
import Tabs from "/src/components/Tabs.vue";
import planetMercury from "/src/assets/images/planet-mercury.svg";
import planetMercuryInternal from "/src/assets/images/planet-mercury-internal.svg";

export default {
  components: { Tabs },

  data() {
    return {
      planetMercury: planetMercury,
      planetMercuryInternal: planetMercuryInternal,
      color: "hsla(194, 48%, 50%, 1)",
    };
  },
};
</script>

<style>
h1 {
  color: var(--white);
}

.planet-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 96px 0px;
}

.overview.mercury-planet {
  width: 30%;
}
</style>