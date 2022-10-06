<template>
  <div class="text-container">
    <div class="header">
      <h1>{{ planetName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["planetName"],
};
</script>

<style>
h1 {
  text-transform: uppercase;
  color: white;
}
</style>