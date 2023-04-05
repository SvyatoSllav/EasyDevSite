<template>
  <section id="about" class="about">
    <div class="container">
      <gradient-tags class="about__title-tags">
        <template v-slot:first_tag>о нас</template
        ><template v-slot:second_tag>/о нас</template>
      </gradient-tags>
      <img
        src="../../public/img/streak_line.png"
        class="about__streak"
        alt=""
      />
      <div class="about__experience">
        <div class="about_selections">
          <button
            value="reliableBtn"
            @click.prevent="decorateButton"
            class="about_button"
          >
            Надёжные решения
          </button>
          <button
            value="experienceBtn"
            @click.prevent="decorateButton"
            class="about_button"
          >
            Опытные разработчики
          </button>
          <button
            value="portfolioBtn"
            @click.prevent="decorateButton"
            class="about_button active"
          >
            Успешное портфолио
          </button>
          <button
            value="launchBtn"
            @click.prevent="decorateButton"
            class="about_button"
          >
            Быстрый запуск
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <about-text :key="this.text">
            {{ this.text }}
          </about-text>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: {
        reliableBtn:
          "Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Ручеек оксмокс рукопись заголовок деревни!",
        experienceBtn:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi quasi, excepturi ab nemo impedit.",
        portfolioBtn:
          "В нашем портфолио — проекты для финансовых компаний из России, Европы, США, Китая, Ближнего Востока и Африки",
        launchBtn:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed animi quasi, excepturi ab nemo impedit.",
      },
      text: "В нашем портфолио — проекты для финансовых компаний из России, Европы, США, Китая, Ближнего Востока и Африки",
    };
  },
  methods: {
    decorateButton(event) {
      let previous_active = document.querySelector(".active");
      let btnValue = event.target.value;
      previous_active.classList.remove("active");
      event.target.classList.add("active");
      this.text = this.texts[btnValue];
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/about.css";
</style>
