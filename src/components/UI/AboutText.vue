<template>
  <p class="about__text">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "about-text",
};
</script>

<style scoped>
.about__text {
  padding-top: 80px;
  padding-left: 161px;
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
}
</style>
