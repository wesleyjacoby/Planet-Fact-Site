<template>
  <div class="lost-container">
    <div class="lost-image">
      <h2 class="uh-oh">Uh-oh!</h2>
      <img src="/assets/images/lost-astronaut.svg" alt="A Lost Astronaut" />
    </div>

    <div class="lost-text">
      <h2>You're lost!</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lost-container {
  max-width: 84.375rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  margin: 0 auto;
}

.lost-image img {
  width: 100%;
  transform: rotateZ(-20deg);
}

.lost-text {
  font-family: "Antonio", sans-serif;
  font-weight: 700;
  font-size: 4.375rem;
  color: var(--white);
  margin-top: 2.5rem;
}

.uh-oh {
  font-family: "Antonio", sans-serif;
  font-weight: 700;
  font-size: 4.375rem;
  color: var(--white);
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 48rem) {
  .lost-container {
    min-height: 80vh;
  }

  .uh-oh {
    font-size: 5rem;
  }

  .lost-text {
    font-size: 5rem;
  }

  @media screen and (min-width: 64rem) {
    .uh-oh {
      font-size: 5.625rem;
    }

    .lost-text {
      font-size: 5.625rem;
    }
  }
}
</style>