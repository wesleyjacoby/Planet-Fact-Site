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
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
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

@media screen and (min-width: 768px) {
  header {
    flex-direction: column;
    padding: 32px 52px 27px 52px;
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
    margin-bottom: 39px;
  }
}

@media screen and (min-width: 1024px) {
  header {
    flex-direction: row;
    padding: 22px 40px 27px 32px;
  }

  li {
    justify-content: flex-end;
    column-gap: 33px;
  }

  .logo {
    width: 100%;
    display: flex;
    margin-bottom: 0px;
  }
}
</style>
