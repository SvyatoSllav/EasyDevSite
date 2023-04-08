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
          v-for="item in portfolioItems.slice(0, itemsAmount)"
          :key="item.id"
        >
        </portfolio-item>
      </div>
      <div class="portfolio__contact-link">
        <contact-button class="contact__link">Смотреть ещё</contact-button>
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
      itemsAmount:
        window.innerWidth > 1160 ? 4 : window.innerWidth > 767 ? 2 : 3,
    };
  },
  computed: {
    style() {
      return "background-image: " + "url();";
    },
  },
};
</script>

<style>
.portfolio {
  background-color: #ebf6fe;
  padding-top: 54px;
}

.porfolio__wrapper {
  max-width: 1161px;
  margin: 0 auto;
}

.portfolio__tags {
  margin-left: 20px;
}

.porftolio__items {
  margin: -18px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
}

.portfolio__contact-link {
  display: flex;
  justify-content: flex-end;
}

.contact__link {
  margin-top: 70px;
}

@media screen and (max-width: 1160px) {
  .porftolio__items {
    grid-template-columns: repeat(1, 1fr);
  }
  .portfolio__contact-link {
    justify-content: center;
  }
}
</style>
