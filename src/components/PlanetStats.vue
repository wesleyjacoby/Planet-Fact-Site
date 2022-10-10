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

@media screen and (min-width: 768px) {
  .stats-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 11px;
    margin: 0px 39px 36px 39px;
  }

  .stat-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 18px 15px;
  }

  .stat-text {
    margin-bottom: 6px;
  }

  .stat {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }
}

@media screen and (min-width: 1024px) {
  .stats-container {
    width: 100%;
    column-gap: 30px;
    margin: 0px 0px 56px 0px;
  }

  .stat-text {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
  }

  .stat-text {
    margin-bottom: 4px;
  }

  .stat {
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -1.5px;
  }
}
</style>