<template>
  <header class="header">
    <div class="container">
      <div class="header__nav-wrapper">
        <a href="#"><img :src="logoImg" alt="" class="logo" /></a>
        <div class="header__nav-items">
          <a href="#" v-scroll-to="'#about'" class="header__nav-link">
            <h2 class="header__nav-item">О нас</h2>
          </a>
          <a href="#" v-scroll-to="'#portfolio'" class="header__nav-link">
            <h2 class="header__nav-item">Наши работы</h2>
          </a>
          <a href="#" v-scroll-to="'#services'" class="header__nav-link">
            <h2 class="header__nav-item">Услуги</h2>
          </a>
          <a href="#" v-scroll-to="'#footer'" class="header__nav-link">
            <h2 class="header__nav-item">Контакты</h2>
          </a>
        </div>
        <button class="header__nav_contact-button">
          <a href="#" v-scroll-to="'#contact'" class="header__nav_contact-text">
            Оставить заявку
          </a>
        </button>
      </div>
      <div class="header__text-animation">
        <div class="header__border-square header__border-square_top-left"></div>
        <div
          class="header__border-square header__border-square_top-right"
        ></div>
        <div
          class="header__border-square header__border-square_bottom-right"
        ></div>
        <div
          class="header__border-square header__border-square_bottom-left"
        ></div>
        <ul class="header__animated-texts">
          <li>
            <span class="header__animation-text parser-animation">
              парсеры&nbsp;&nbsp;
            </span>
          </li>
          <li>
            <span class="header__animation-text bots-animation"
              >боты&nbsp;&nbsp;</span
            >
          </li>
          <li>
            <span class="header__animation-text sites-animation"
              >сайты&nbsp;&nbsp;</span
            >
          </li>
          <li>
            <span class="header__animation-text soft-animation"
              >софт&nbsp;&nbsp;</span
            >
          </li>
          <li>
            <span class="header__animation-text webapp-animation">
              веб&nbsp;&nbsp;приложения&nbsp;&nbsp;
            </span>
          </li>
        </ul>
      </div>
      <div class="header__content">
        <h1 class="header__title">
          Разработка<br />веб приложений<br />и автоматизация бизнес-процессов
        </h1>
        <img :src="headerImg" alt="header_img" class="header__img" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerImg: require(`@/assets/img/header_img_${
        window.innerWidth > 834
          ? "desktop"
          : window.innerWidth > 475
          ? "tablet"
          : "mobile"
      }.png`),
      logoImg: require(`@/assets/img/logo_${
        window.innerWidth > 1160
          ? "desktop"
          : window.innerWidth > 425
          ? "tablet"
          : "mobile"
      }.svg`),
    };
  },
  methods: {
    anchorScroll(elId) {
      const el = this.$refs[elId];
      console.log(el);
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style>
@import "@/assets/styles/header/header.css";
@import "@/assets/styles/header/header_media.css";
</style>
