<template>
  <div class="portfolio__item">
    <a class="porftolio__item-btn" :href="item.link">
      <span class="porftolio__item-name">{{ item.name }}</span
      ><br />
      <span class="portfolio__item-link">Полный текст</span>
      <img
        class="portfolio__item-arrow"
        src="../../assets/img/portfolio_arrow_link.svg"
        alt=""
      />
    </a>
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
.portfolio__item {
  margin-top: 50px;
  position: relative;
}
.portfolio__item-img {
  transition: 0.3s ease;
}
.portfolio__item-img:hover {
  transform: scale(102%);
}

.porftolio__item-btn {
  display: inline-block;
  position: absolute;
  top: 380px;
  right: 22px;
  background-color: #fff;
  padding: 7px 11px;
  border-radius: 7px;
  z-index: 1;
}

.porftolio__item-name {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.portfolio__item-link {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(222, 109, 241, 0.4);
  margin-right: 8px;
}

.portfolio__item-arrow {
  position: relative;
  top: 3px;
}

@media screen and (max-width: 1160px) {
  .portfolio__item-img {
    padding: 0 20px;
    width: 100%;
  }
  .porftolio__item-btn {
    top: auto;
    bottom: 50px;
    right: 61px;
  }
}

@media screen and (max-width: 777px) {
  .portfolio__item-img {
    padding: 0 20px;
    width: 100%;
  }
  .porftolio__item-btn {
    top: auto;
    bottom: 50px;
    right: 61px;
  }
}
</style>
