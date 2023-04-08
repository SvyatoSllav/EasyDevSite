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
        <a @click="this.showSidebar = false" href="#contact">
          <button class="contact-btn"><slot>оставить заявку</slot></button>
        </a>
      </sidebar>
    </div>
  </transition>
</template>

<script>
export default {
  name: "the-sidebar",
  data() {
    return {
      showSidebar: false,
      whiteColor: "#fff",
    };
  },
};
</script>

<style scoped>
@import "@/assets/styles/sidebar/sidebar.css";
@import "@/assets/styles/sidebar/sidebar_media.css";
.contact-btn {
  margin-top: 50px;
  cursor: pointer;
  background-color: #fff;
  padding: 25px 135px;
  border: 2px solid transparent;
  border-radius: 15px;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
  color: #de6df1;
  transition: 0.3s ease;
}

/* .contact-btn:hover {
  color: #de6df1;
  border: 2px solid black;
  background-color: ;
} */
</style>
