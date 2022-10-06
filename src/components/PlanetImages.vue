<template>
  <div v-if="surfaceActive" class="planet-geology">
    <img :src="activeImage[1]" :alt="className" :class="className" />
    <img
      :src="activeImage[0]"
      class="geology"
      :class="{ 'saturn-geology': planetName === 'Saturn' }"
    />
  </div>

  <div v-else class="planet-image">
    <img :src="activeImage" :alt="className" :class="className" />
  </div>
</template>

<script>
export default {
  props: ["planetName", "className", "activeImage", "surfaceActive"],

  data() {
    return {};
  },
};
</script>

<style scoped>
.planet-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 96px 0px;
}

.planet-geology {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 96px 0px;
}

.planet-mercury {
  width: 30%;
}

.planet-venus {
  width: 41%;
}

.planet-earth {
  width: 46%;
}

.planet-mars {
  width: 35%;
}

.planet-jupiter {
  width: 60%;
}

.planet-saturn {
  width: 68%;
}

.planet-uranus {
  width: 47%;
}

.planet-neptune {
  width: 46%;
}

.geology {
  width: 30%;
  transform: translateY(-35%);
}

.saturn-geology {
  width: 30%;
  transform: translateY(-75%);
}
</style>