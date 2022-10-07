<template>
  <div class="mobile">
    <router-link
      :to="{ name: 'mercury' }"
      class="menu-items"
      @click="closeMenu"
    >
      <div class="menu-container first-option">
        <div class="circle-text-container">
          <div class="circle mercury"></div>
          <p>Mercury</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link :to="{ name: 'venus' }" class="menu-items" @click="closeMenu">
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle venus"></div>
          <p>Venus</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link :to="{ name: 'earth' }" class="menu-items" @click="closeMenu">
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle earth"></div>
          <p>Earth</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link :to="{ name: 'mars' }" class="menu-items" @click="closeMenu">
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle mars"></div>
          <p>Mars</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link
      :to="{ name: 'jupiter' }"
      class="menu-items"
      @click="closeMenu"
    >
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle jupiter"></div>
          <p>Jupiter</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link :to="{ name: 'saturn' }" class="menu-items" @click="closeMenu">
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle saturn"></div>
          <p>Saturn</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link :to="{ name: 'uranus' }" class="menu-items" @click="closeMenu">
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle uranus"></div>
          <p>Uranus</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>

    <hr />

    <router-link
      :to="{ name: 'neptune' }"
      class="menu-items"
      @click="closeMenu"
    >
      <div class="menu-container">
        <div class="circle-text-container">
          <div class="circle neptune"></div>
          <p>Neptune</p>
        </div>
        <div class="chevron-container">
          <img :src="chevron" alt="Chevron Icon" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import chevron from "/src/assets/images/icon-chevron.svg";

export default {
  data() {
    return {
      chevron: chevron,
    };
  },

  methods: {
    closeMenu() {
      this.$emit("close");
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.mobile {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--dark-blue);
  z-index: 999;
}

.menu-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px 20px 24px;
}

.first-option {
  padding-top: 44px;
}

.circle-text-container {
  display: flex;
  align-items: center;
}

.menu-items {
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: var(--white);
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 24px;
}

.mercury {
  background-color: hsla(196, 83%, 93%, 1);
}

.venus {
  background-color: hsla(39, 88%, 73%, 1);
}

.earth {
  background-color: hsla(238, 99%, 66%, 1);
}

.mars {
  background-color: hsla(12, 100%, 64%, 1);
}

.jupiter {
  background-color: hsla(27, 75%, 70%, 1);
}

.saturn {
  background-color: hsla(40, 96%, 70%, 1);
}

.uranus {
  background-color: hsla(168, 82%, 67%, 1);
}

.neptune {
  background-color: hsla(222, 95%, 63%, 1);
}
</style>