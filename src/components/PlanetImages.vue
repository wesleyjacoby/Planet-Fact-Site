<template>
  <div class="image-container">
    <div v-if="surfaceActive" class="planet-geology">
      <img :src="activeImage[1]" :alt="className" :class="className" />
      <img
        :src="activeImage[0]"
        class="geology"
        :class="{ 'saturn-geology': planetName === 'Saturn' }"
      />
    </div>

    <div v-else class="planet-image" :class="className">
      <img :src="activeImage" :alt="className" />
    </div>
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
  margin: 48px auto;
}

.planet-geology {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 48px auto;
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
  display: none;
}

/* -- MEDIA QUERIES -- */

@media screen and (min-width: 768px) {
  .planet-mercury {
    width: 184px;
    height: 184px;
  }

  .planet-venus {
    width: 253px;
    height: 253px;
  }

  .planet-earth {
    width: 285px;
    height: 285px;
  }

  .planet-mars {
    width: 213px;
    height: 213px;
  }

  .planet-jupiter {
    width: 369px;
    height: 369px;
  }

  .planet-saturn {
    width: 422px;
    height: 422px;
  }

  .planet-uranus {
    width: 290px;
    height: 290px;
  }

  .planet-neptune {
    width: 285px;
    height: 285px;
  }
}

@media screen and (min-width: 1024px) {
  .planet-image {
    margin: 0px;
  }

  .image-container {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .planet-mercury {
    width: 290px;
    height: 290px;
  }

  .planet-venus {
    width: 400px;
    height: 400px;
  }

  .planet-earth {
    width: 450px;
    height: 450px;
  }

  .planet-mars {
    width: 336px;
    height: 336px;
  }

  .planet-jupiter {
    width: 582px;
    height: 582px;
  }

  .planet-saturn {
    width: 666px;
    height: 666px;
  }

  .planet-uranus {
    width: 458px;
    height: 458px;
  }

  .planet-neptune {
    width: 450px;
    height: 450px;
  }

  .geology {
    position: absolute;
    display: block;
    width: 163px;
    height: 199px;
    transform: translateY(90%);
  }

  .saturn-geology {
    width: 163px;
    height: 199px;
    transform: translateY(85%);
  }
}
</style>