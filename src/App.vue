<template>
  <header>
    <div class="logo">
      <h1>The Planets</h1>
    </div>
    <nav class="desktop-menu">
      <router-link :to="{ name: 'mercury' }">Mercury</router-link>
    </nav>

    <div class="mobile-menu">
      <img
        :src="hamburger"
        alt="Hamburger Icon"
        @click="toggleMenu"
        :class="[isMobileMenuOpen ? 'active' : 'inactive']"
      />
    </div>
  </header>

  <hr class="hr-heading" />

  <div class="mobile-menu-list">
    <MobileMenu v-show="isMobileMenuOpen" @close="toggleMenu" />
  </div>

  <router-view />
</template>

<script>
import hamburger from "/src/assets/images/icon-hamburger.svg";
import MobileMenu from "/src/components/MobileMenu.vue";

export default {
  components: { MobileMenu },

  data() {
    return {
      hamburger: hamburger,
      isMobileMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
  },
};
</script>

<style>
#app {
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
}

.logo h1 {
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  color: var(--white);
}

.desktop-menu {
  display: none;
}

.mobile-menu img:hover {
  cursor: pointer;
}

hr {
  width: 100%;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.1;
  margin: 0;
}

.hr-heading {
  margin-bottom: 24px;
}

.inactive {
  animation: fade-in 0.15s ease-out both;
}

.active {
  animation: fade-out 0.15s ease-out both;
  mix-blend-mode: normal;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0.25;
  }
  100% {
    opacity: 1;
  }
}
</style>
