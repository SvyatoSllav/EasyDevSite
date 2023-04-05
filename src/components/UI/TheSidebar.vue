<template>
  <burger-menu @click="this.showSidebar = true"></burger-menu>
  <transition name="slide-fade">
    <div class="sidebar__wrapper" v-show="showSidebar">
      <sidebar class="sidebar">
        <img
          src="../../assets/img/close_btn.svg"
          alt=""
          class="sidebar__close-btn"
          @click="this.showSidebar = false"
        />
        <div class="sidebar__nav">
          <a class="sidebar__nav-item">О нас</a><br />
          <a class="sidebar__nav-item">Наши работы</a><br />
          <a class="sidebar__nav-item">Услуги</a><br />
          <a class="sidebar__nav-item">Контакты</a><br />
        </div>
        <div class="sidebar__contacts">
          <div class="sidebar__phone sidebar__contact-item">
            <a href="tel:+79172300481">+79172300481</a>
          </div>
          <div class="sidebar__mail sidebar__contact-item">
            <a href="mailto:info@easydev-program.com"
              >info@easydev-program.com</a
            >
          </div>
          <div class="sidebar__tg sidebar__contact-item">
            <a href="https://t.me/EasyDevVi">TG Виталий</a>
          </div>
        </div>
      </sidebar>
    </div>
  </transition>
</template>

<script>
export default {
  name: "the-sidebar",
  data() {
    return {
      showSidebar: true,
    };
  },
};
</script>

<style scoped>
@import "@/assets/styles/sidebar/sidebar.css";
@import "@/assets/styles/sidebar/sidebar_media.css";
</style>
