<template>
  <Tabs :style="color" />
</template>

<script>
import Tabs from "/src/components/Tabs.vue";

export default {
  components: { Tabs },

  data() {
    return {
      color: "hsla(2, 68%, 53%, 1)",
    };
  },
};
</script>

<style>
h1 {
  color: var(--white);
}
</style> 