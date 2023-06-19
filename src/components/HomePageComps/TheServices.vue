<template>
  <section class="services" id="services">
    <div class="services__wrapper">
      <gradient-tags class="service__tags">
        <template v-slot:first_tag>услуги</template>
        <template v-slot:second_tag>/услуги</template>
      </gradient-tags>
      <div class="services__items">
        <transition-group name="slide-fade">
          <service-item
            v-for="item in serviceItems.slice(0, itemsAmount)"
            :key="item.id"
            :id="item.id"
          >
            <template v-slot:item-name>{{ item.title }}</template>
            <template v-slot:item-text>{{ item.description }}</template>
          </service-item></transition-group
        >
      </div>
      <div class="services__contact-link">
        <contact-button @click="this.itemsAmount++" class="contact__link">
          Смотреть ещё
        </contact-button>
      </div>
    </div>
    <div id="home-services"></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      serviceItems: [],
      itemsAmount: 2,
    };
  },
  methods: {
    async fetchServices() {
      try {
        const response = await axios.get(
          "http://89.108.103.109/api/v1" + "/portfolio/projects/"
        );
        this.serviceItems = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchServices();
    const scrollTo = this.$route.meta.scrollTo;
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        const visibleHeight = el.clientHeight;
        const scrollHeight = el.scrollHeight;
        const hiddenHeight = scrollHeight - visibleHeight;
        el.scrollTo({
          top: hiddenHeight > 0 ? hiddenHeight + 1500 : scrollHeight + 1500,
          behavior: "smooth",
        });
      }
    }
  },
};
</script>

<style scoped>
.services {
  background-color: #ebf6fe;
  padding-top: 160px;
}
.services__wrapper {
  max-width: 1161px;
  margin: 0 auto;
}
.service__tags {
  margin-left: auto;
  width: 190px;
}
.service__tags h3:last-child {
  text-align: end;
}
.services__items {
  max-width: 1161px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 50px;
}
.services__contact-link {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 78px;
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
  .services__items {
    margin: 50px 147px 0;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 25px;
  }
  .services__contact-link {
    justify-content: center;
  }
}

@media screen and (max-width: 1023px) {
  .services__items {
    margin: 50px 37px 0;
  }
}
</style>
