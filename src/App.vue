<template>
  <header>
    <div class="logo">
      <h1>The Planets</h1>
    </div>
    <nav>
      <router-link :to="{ name: 'mercury' }">Mercury</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  setup() {},
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
</style>
