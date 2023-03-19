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
@import "@/assets/styles/services.css";
</style>
