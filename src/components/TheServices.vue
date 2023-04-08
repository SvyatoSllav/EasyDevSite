<template>
  <section class="services">
    <div class="services__wrapper">
      <gradient-tags class="service__tags">
        <template v-slot:first_tag>услуги</template>
        <template v-slot:second_tag>/услуги</template>
      </gradient-tags>
      <div class="services__items">
        <service-item v-for="item in items" :key="item.id">
          <template v-slot:item-name>{{ item.name }}</template>
          <template v-slot:item-text>{{ item.text }}</template>
        </service-item>
      </div>
      <div class="services__contact-link">
        <contact-button class="contact__link">Смотреть ещё</contact-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Разработка ПО",
          text: "Квалифицированная команда разработчиков создаёт высококачественные программные продукты, соответствующие бизнес-целям наших клиентов.",
        },
        {
          id: 2,
          name: "Разработка ПО",
          text: "Квалифицированная команда разработчиков создаёт высококачественные программные продукты, соответствующие бизнес-целям наших клиентов.",
        },
        {
          id: 3,
          name: "Разработка ПО",
          text: "Квалифицированная команда разработчиков создаёт высококачественные программные продукты, соответствующие бизнес-целям наших клиентов.",
        },
        {
          id: 4,
          name: "Разработка ПО",
          text: "Квалифицированная команда разработчиков создаёт высококачественные программные продукты, соответствующие бизнес-целям наших клиентов.",
        },
      ],
    };
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
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 50px;
}
.services__contact-link {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 78px;
}

@media screen and (max-width: 1160px) {
  .services__items {
    margin: 50px 147px 0;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 25px;
  }
}

@media screen and (max-width: 1023px) {
  .services__items {
    margin: 50px 37px 0;
  }
  .services__contact-link {
    justify-content: center;
  }
}
</style>
