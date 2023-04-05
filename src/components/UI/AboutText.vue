<template>
  <p class="text">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "about-text",
};
</script>

<style scoped>
.text {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
}

@media screen and (max-width: 374px) {
  .text {
    font-size: 22px;
  }
}
</style>
