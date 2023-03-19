<template>
  <section class="portfolio" id="portfolio">
    <div class="porfolio__wrapper">
      <gradient-tags class="portfolio__tags">
        <template v-slot:first_tag>наши работы</template>
        <template v-slot:second_tag>/наши работы</template>
      </gradient-tags>
      <div class="porftolio__items">
        <portfolio-item
          :item="item"
          v-for="item in portfolioItems"
          :key="item.id"
        >
        </portfolio-item>
      </div>
      <div class="portfolio__contact-link">
        <a href="#contact" class="contact__link">
          <contact-button></contact-button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolioItems: [
        {
          id: 1,
          img: require("@/assets/img/case1.png"),
          name: "BoostBuffet",
          link: "https://github.com/EasyDevCompany/BoostBuffet",
        },
        {
          id: 2,
          img: require("@/assets/img/case1.png"),
          name: "BoostBuffet",
          link: "https://github.com/EasyDevCompany/BoostBuffet",
        },
        {
          id: 3,
          img: require("@/assets/img/case1.png"),
          name: "BoostBuffet",
          link: "https://github.com/EasyDevCompany/BoostBuffet",
        },
        {
          id: 4,
          img: require("@/assets/img/case1.png"),
          name: "BoostBuffet",
          link: "https://github.com/EasyDevCompany/BoostBuffet",
        },
      ],
    };
  },
  computed: {
    style() {
      return "background-image: " + "url();";
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/portfolio.css";
</style>
