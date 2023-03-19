<template>
  <header class="header">
    <div class="container">
      <div class="header__nav-wrapper">
        <img src="img/logo.jpg" alt="" class="logo" />
        <div class="header__nav-items">
          <a href="#about" class="header__nav-link">
            <h2 class="header__nav-item">О нас</h2>
          </a>
          <a href="#portfolio" class="header__nav-link">
            <h2 class="header__nav-item">Наши работы</h2>
          </a>
          <a href="#" class="header__nav-link">
            <h2 class="header__nav-item">Услуги</h2>
          </a>
          <a href="#" class="header__nav-link">
            <h2 class="header__nav-item">Контакты</h2>
          </a>
        </div>
        <button class="header__nav_contact-button">
          <a href="#contact" class="header__nav_contact-text">
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
            <span class="header__animation-text parser-animation"
              >парсеры<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span
            >
          </li>
          <li>
            <span class="header__animation-text bots-animation"
              >боты<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span
            >
          </li>
          <li>
            <span class="header__animation-text sites-animation"
              >сайты<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span
            >
          </li>
          <li>
            <span class="header__animation-text soft-animation"
              >софт<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span
            >
          </li>
          <li>
            <span class="header__animation-text webapp-animation"
              >веб приложения<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span
            >
          </li>
        </ul>
      </div>
      <div class="header__content">
        <h1 class="header__title">
          Разработка<br />веб приложений<br />и автоматизация бизнес-процессов
        </h1>
        <img
          src="../../public/img/header_img.png"
          alt="header_img"
          class="header__img"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {},
};
</script>
<style>
@import "@/assets/styles/header.css";
</style>
