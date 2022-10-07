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
  width: 111px;
  height: 111px;
}

.planet-venus {
  width: 154px;
  height: 154px;
}

.planet-earth {
  width: 173px;
  height: 173px;
}

.planet-mars {
  width: 129px;
  height: 129px;
}

.planet-jupiter {
  width: 224px;
  height: 224px;
}

.planet-saturn {
  width: 256px;
  height: 256px;
}

.planet-uranus {
  width: 176px;
  height: 176px;
}

.planet-neptune {
  width: 173px;
  height: 173px;
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