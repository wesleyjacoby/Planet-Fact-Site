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
  margin: 3rem auto;
}

.planet-geology {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem auto;
}

.planet-mercury {
  width: 6.9375rem;
  height: 6.9375rem;
}

.planet-venus {
  width: 9.625rem;
  height: 9.625rem;
}

.planet-earth {
  width: 10.8125rem;
  height: 10.8125rem;
}

.planet-mars {
  width: 8.0625rem;
  height: 8.0625rem;
}

.planet-jupiter {
  width: 14rem;
  height: 14rem;
}

.planet-saturn {
  width: 16rem;
  height: 16rem;
}

.planet-uranus {
  width: 11rem;
  height: 11rem;
}

.planet-neptune {
  width: 10.8125rem;
  height: 10.8125rem;
}

.geology {
  display: none;
}

/* -- MEDIA QUERIES -- */

@media screen and (min-width: 48rem) {
  .planet-mercury {
    width: 11.5rem;
    height: 11.5rem;
  }

  .planet-venus {
    width: 15.8125rem;
    height: 15.8125rem;
  }

  .planet-earth {
    width: 17.8125rem;
    height: 17.8125rem;
  }

  .planet-mars {
    width: 13.3125rem;
    height: 13.3125rem;
  }

  .planet-jupiter {
    width: 23.0625rem;
    height: 23.0625rem;
  }

  .planet-saturn {
    width: 26.375rem;
    height: 26.375rem;
  }

  .planet-uranus {
    width: 18.125rem;
    height: 18.125rem;
  }

  .planet-neptune {
    width: 17.8125rem;
    height: 17.8125rem;
  }
}

@media screen and (min-width: 64rem) {
  .planet-image {
    margin: 0rem;
  }

  .image-container {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .planet-mercury {
    width: 18.125rem;
    height: 18.125rem;
  }

  .planet-venus {
    width: 25rem;
    height: 25rem;
  }

  .planet-earth {
    width: 28.125rem;
    height: 28.125rem;
  }

  .planet-mars {
    width: 21rem;
    height: 21rem;
  }

  .planet-jupiter {
    width: 36.375rem;
    height: 36.375rem;
  }

  .planet-saturn {
    width: 41.625rem;
    height: 41.625rem;
  }

  .planet-uranus {
    width: 28.625rem;
    height: 28.625rem;
  }

  .planet-neptune {
    width: 28.125rem;
    height: 28.125rem;
  }

  .geology {
    position: absolute;
    display: block;
    width: 10.1875rem;
    height: 12.4375rem;
    transform: translateY(90%);
  }

  .saturn-geology {
    width: 10.1875rem;
    height: 12.4375rem;
    transform: translateY(85%);
  }
}
</style>