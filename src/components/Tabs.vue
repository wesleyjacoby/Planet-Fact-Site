<template>
  <nav class="tabs-container">
    <div class="text">
      <a href="#" :style="style"><p>Overview</p></a>
    </div>

    <div class="text">
      <a href="#"><p>Structure</p></a>
    </div>

    <div class="text">
      <a href="#"><p>Surface</p></a>
    </div>
  </nav>

  <hr />
</template>

<script>
export default {
  props: ["style"],
};
</script>

<style>
.tabs-container {
  display: flex;
  justify-content: space-around;
}

.text {
  font-weight: 400;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
}

.text p {
  padding: 20px 0px;
}

.text:hover {
  cursor: pointer;
  opacity: 1;
}

.text a {
  mix-blend-mode: normal;
  opacity: 0.5;
  color: var(--white);
}

.text a:hover {
  opacity: 1;
  text-decoration: 4px underline v-bind(style);
  text-underline-offset: 20px;
}
</style>