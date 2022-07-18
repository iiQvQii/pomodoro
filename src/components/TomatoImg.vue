<template lang="pug">
#tomato
  #tomatoA
  #tomatoB

</template>
<script setup>

</script>

<style scoped>
#tomatoB {
  width: 100px;
  height: 100px;
  clip-path: ellipse(49% 47% at 50% 50%);
  background: linear-gradient(0deg, rgba(238, 174, 202, 1) 0%, rgba(252, 176, 69, 1) 48%, rgba(253, 111, 29, 1) 100%);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#tomatoA {
  width: 50px;
  height: 50px;
  clip-path: polygon(9% 18%, 25% 44%, 47% 50%, 62% 50%, 79% 43%, 89% 17%, 62% 26%, 51% 7%, 38% 28%);
  background: linear-gradient(0deg, rgba(238, 174, 202, 1) 0%, rgba(252, 176, 69, 1) 48%, rgba(253, 111, 29, 1) 100%);
  position: absolute;
  left: 50%;
  top: 39%;
  transform: translate(-50%, -50%);
}
</style>
