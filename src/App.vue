<template>
  <header>
    <div class="logo">
      <router-link :to="{ name: 'mercury' }"><h1>The Planets</h1></router-link>
    </div>
    <nav class="desktop-menu">
      <ul>
        <li>
          <router-link :to="{ name: 'mercury' }" class="main-menu"
            >Mercury</router-link
          >
          <router-link :to="{ name: 'venus' }" class="main-menu"
            >Venus</router-link
          >
          <router-link :to="{ name: 'earth' }" class="main-menu"
            >Earth</router-link
          >
          <router-link :to="{ name: 'mars' }" class="main-menu"
            >Mars</router-link
          >
          <router-link :to="{ name: 'jupiter' }" class="main-menu"
            >Jupiter</router-link
          >
          <router-link :to="{ name: 'saturn' }" class="main-menu"
            >Saturn</router-link
          >
          <router-link :to="{ name: 'uranus' }" class="main-menu"
            >Uranus</router-link
          >
          <router-link :to="{ name: 'neptune' }" class="main-menu"
            >Neptune</router-link
          >
        </li>
      </ul>
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

  <hr />

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
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.logo h1 {
  font-family: "Antonio", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 2.25rem;
  letter-spacing: -0.0656rem;
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

.inactive {
  animation: fade-in 0.15s ease-out both;
}

.active {
  animation: fade-out 0.15s ease-out both;
  mix-blend-mode: normal;
}

.main-menu,
nav ul li .router-link-active,
nav ul li .router-link-exact-active {
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 0.6875rem;
  line-height: 1.5625rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.75;
}

nav ul li .router-link-active,
nav ul li .router-link-exact-active {
  opacity: 1;
}

.main-menu:hover {
  opacity: 1;
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

/* --MEDIA QUERIES-- */

@media screen and (min-width: 48rem) {
  header {
    flex-direction: column;
    padding: 2rem 3.25rem 1.6875rem 3.25rem;
  }

  .desktop-menu {
    width: 100%;
    display: block;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  .mobile-menu {
    display: none;
  }

  .logo {
    margin-bottom: 2.4375rem;
  }
}

@media screen and (min-width: 64rem) {
  header {
    flex-direction: row;
    padding: 1.375rem 2.5rem 1.6875rem 2rem;
  }

  li {
    justify-content: flex-end;
    column-gap: 2.0625rem;
  }

  .logo {
    width: 100%;
    display: flex;
    margin-bottom: 0rem;
  }
}
</style>
