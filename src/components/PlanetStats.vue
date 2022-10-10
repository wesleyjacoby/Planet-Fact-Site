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
  gap: 0.5rem;
  margin: 0rem 1.5rem 1.75rem 1.5rem;
}

.stat-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.5rem;
  mix-blend-mode: normal;
  border: 1px solid hsla(0, 0%, 100%, 0.2);
}

.stat-text {
  font-weight: 700;
  font-size: 0.5rem;
  line-height: 1rem;
  letter-spacing: 0.0456rem;
  text-transform: uppercase;
  mix-blend-mode: normal;
  opacity: 0.5;
  color: var(--white);
}

.stat {
  font-family: "Antonio", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.625rem;
  letter-spacing: -0.0469rem;
  text-transform: uppercase;
  color: var(--white);
}

@media screen and (min-width: 48rem) {
  .stats-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 0.6875rem;
    margin: 0rem 2.4375rem 2.25rem 2.4375rem;
  }

  .stat-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.125rem 0.9375rem;
  }

  .stat-text {
    margin-bottom: 0.375rem;
  }

  .stat {
    font-size: 1.5rem;
    line-height: 1.9375rem;
    letter-spacing: -0.0563rem;
  }
}

@media screen and (min-width: 64rem) {
  .stats-container {
    width: 100%;
    column-gap: 1.875rem;
    margin: 0rem 0rem 3.5rem 0rem;
  }

  .stat-text {
    font-size: 0.6875rem;
    line-height: 1.5625rem;
    letter-spacing: 0.0625rem;
  }

  .stat-text {
    margin-bottom: 0.25rem;
  }

  .stat {
    font-size: 2.5rem;
    line-height: 3.25rem;
    letter-spacing: -0.0938rem;
  }
}
</style>