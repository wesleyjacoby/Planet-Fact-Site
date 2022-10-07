<template>
  <section class="stats-container">
    <div class="stat-box">
      <div class="stat-text">
        <p>Rotation Time</p>
      </div>
      <div class="stat">
        <p>{{ activeStats[0] }}</p>
      </div>
    </div>

    <div class="stat-box">
      <div class="stat-text">
        <p>Revolution Time</p>
      </div>
      <div class="stat">
        <p>{{ activeStats[1] }}</p>
      </div>
    </div>

    <div class="stat-box">
      <div class="stat-text">
        <p>Radius</p>
      </div>
      <div class="stat">
        <p>{{ activeStats[2] }}</p>
      </div>
    </div>

    <div class="stat-box">
      <div class="stat-text">
        <p>Average Temp.</p>
      </div>
      <div class="stat">
        <p>{{ activeStats[3] }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["activeStats"],
};
</script>

<style>
.stats-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0px 24px 28px 24px;
}

.stat-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
  mix-blend-mode: normal;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
}

.stat-text {
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.73px;
  text-transform: uppercase;
  mix-blend-mode: normal;
  opacity: 0.5;
  color: var(--white);
}

.stat {
  font-family: "Antonio", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: var(--white);
}
</style>