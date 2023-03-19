<template>
  <a href="#contact">
    <button class="contact-btn"><slot>оставить заявку</slot></button>
  </a>
</template>

<script>
export default {
  name: "contact-button",
};
</script>

<style scoped>
@import "../../assets/styles/contact_button.css";
</style>
