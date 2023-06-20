<template>
  <section class="portfolio">
    <div class="porfolio__wrapper">
      <gradient-tags class="portfolio__tags">
        <template v-slot:first_tag>наши работы</template>
        <template v-slot:second_tag>/наши работы</template>
      </gradient-tags>
      <div class="porftolio__items" id="portfolio">
        <transition-group name="slide-fade">
          <portfolio-item
            :item="item"
            v-for="item in portfolioItems.slice(0, itemsAmount)"
            :key="item.id"
          >
          </portfolio-item
        ></transition-group>
      </div>
      <div class="portfolio__contact-link">
        <contact-button @click="this.itemsAmount++" class="contact__link">
          Смотреть ещё
        </contact-button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      portfolioItems: [],
      itemsAmount: 2,
    };
  },
  computed: {
    style() {
      return "background-image: " + "url();";
    },
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get(
          "https://api.easydev-program.com/api/v1" + "/portfolio/projects/"
        );
        this.portfolioItems = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchProjects();
    const scrollTo = this.$route.meta.scrollTo;
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        const options = {
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        };
        el.scrollIntoView(options);
      }
    }
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
  column-gap: 40px;
}

.portfolio__contact-link {
  display: flex;
  justify-content: flex-end;
}

.contact__link {
  margin-top: 70px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 1160px) {
  .porftolio__items {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
  .portfolio__contact-link {
    justify-content: center;
  }
}
</style>
