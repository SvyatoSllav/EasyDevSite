<template>
  <div class="service__item">
    <div class="service__info-wrapper">
      <h3 class="service__item-title"><slot name="item-name"></slot></h3>
      <p class="service__item-text">
        <slot name="item-text"></slot>
      </p>
    </div>
    <button class="service__item-btn">
      <a href="#contact">
        <img
          src="../../assets/img/service_button.svg"
          alt=""
          class="service__item-btn-img"
        />
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: "service-item",
};
</script>

<style scoped>
@import "@/assets/styles/service_item.css";
</style>
