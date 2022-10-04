<template>
  <Tabs :style="color" />
</template>

<script>
import Tabs from "/src/components/Tabs.vue";

export default {
  components: { Tabs },

  data() {
    return {
      color: "hsla(33, 82%, 61%, 1)",
    };
  },
};
</script>

<style>
h1 {
  color: var(--white);
}
</style>