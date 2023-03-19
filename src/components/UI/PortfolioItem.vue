<template>
  <div class="portfolio__item">
    <div class="porftolio__item-btn">
      <a :href="item.link">
        <div class="porftolio__item-name">{{ item.name }}</div>
        <span class="portfolio__item-link">Полный текст</span>
        <img
          class="portfolio__item-arrow"
          src="../../assets/img/portfolio_arrow_link.svg"
          alt=""
        />
      </a>
    </div>
    <a :href="item.link">
      <img class="portfolio__item-img" :src="item.img" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "portfolio-item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/portfolio_item.css";
</style>
