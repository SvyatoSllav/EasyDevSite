<template>
  <section id="about" class="about">
    <gradient-tags class="about__title-tags">
      <template v-slot:first_tag>о нас</template
      ><template v-slot:second_tag>/о нас</template>
    </gradient-tags>
    <img src="@/assets/img/streak_line.png" class="about__streak" alt="" />
    <div class="about__experience">
      <div class="about_selections">
        <button
          value="reliableBtn"
          @click.prevent="decorateButton"
          class="about_button"
        >
          Надёжные решения
        </button>
        <transition
          name="fade"
          mode="out-in"
          v-show="activeBtn === 'reliableBtn'"
        >
          <about-text class="mobile-about__text" :key="this.text">
            {{ this.text }}
          </about-text>
        </transition>
        <button
          value="experienceBtn"
          @click.prevent="decorateButton"
          class="about_button"
        >
          Опытные разработчики
        </button>
        <transition
          name="fade"
          mode="out-in"
          v-show="activeBtn === 'experienceBtn'"
        >
          <about-text class="mobile-about__text" :key="this.text">
            {{ this.text }}
          </about-text>
        </transition>
        <button
          value="portfolioBtn"
          @click.prevent="decorateButton"
          class="about_button active"
        >
          Успешное портфолио
        </button>
        <transition
          name="fade"
          mode="out-in"
          v-show="activeBtn === 'portfolioBtn'"
        >
          <about-text class="mobile-about__text" :key="this.text">
            {{ this.text }}
          </about-text>
        </transition>
        <button
          value="launchBtn"
          @click.prevent="decorateButton"
          class="about_button"
        >
          Быстрый запуск
        </button>
        <transition
          name="fade"
          mode="out-in"
          v-show="activeBtn === 'launchBtn'"
        >
          <about-text class="mobile-about__text" :key="this.text">
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
      activeBtn: "portfolioBtn",
    };
  },
  methods: {
    decorateButton(event) {
      let previous_active = document.querySelector(".active");
      let btnValue = event.target.value;
      console.log(btnValue);
      this.activeBtn = btnValue;
      previous_active.classList.remove("active");
      event.target.classList.add("active");
      this.text = this.texts[btnValue];
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/about/about_mobile.css";
@import "@/assets/styles/about/about_mobile_media.css";
</style>
