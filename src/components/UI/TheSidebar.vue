<template>
  <burger-menu
    :burgerTop="burgerTop"
    @click="this.showSidebar = true"
  ></burger-menu>
  <transition name="slide-fade">
    <div class="sidebar__wrapper" v-show="showSidebar">
      <sidebar class="sidebar">
        <img
          src="@/assets/img/close_btn.svg"
          alt=""
          class="sidebar__close-btn"
          @click="this.showSidebar = false"
        />
        <div class="sidebar__nav">
          <router-link to="/">
            <p class="sidebar__nav-item">О нас</p>
            <br />
          </router-link>
          <a class="sidebar__nav-item">Наши работы</a><br />
          <router-link to="/services">
            <p class="sidebar__nav-item">Услуги</p>
            <br />
          </router-link>
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
        <a class="btn-link" @click="this.showSidebar = false" href="#contact">
          <button class="contact-btn"><slot>оставить заявку</slot></button>
        </a>
      </sidebar>
    </div>
  </transition>
</template>

<script>
export default {
  name: "the-sidebar",
  props: {
    burgerTop: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      showSidebar: false,
      whiteColor: "#fff",
    };
  },
};
</script>

<style scoped>
.sidebar__wrapper {
  top: 0;
  right: 0;
  position: fixed;
  width: 200%;
  height: 200%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
}

.sidebar {
  position: absolute;
  right: 0;
  width: 634px;
  height: 100%;
  background-color: #de6df1;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 200%;
  padding-top: 56px;
  padding-left: 41px;
}

.sidebar__close-btn {
  position: absolute;
  top: 60px;
  right: 47px;
  cursor: pointer;
}

.sidebar__nav {
  margin-bottom: 110px;
}

.sidebar__nav-item {
  display: inline-block;
  cursor: pointer;
  font-size: 50px;
  line-height: 60px;
  color: #ffffff;
  margin-bottom: 30px;
}

.sidebar__contacts {
  color: black;
}

.sidebar__contacts a {
  margin-bottom: 30px;
}

.sidebar__contact-item {
  margin-bottom: 30px;
}

.sidebar__contact-item:last-child {
  margin-bottom: 0;
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
@media screen and (max-width: 767px) {
  .sidebar {
    width: 300px;
    font-size: 12px;
    line-height: 24px;
    padding: 48px 0 0 17px;
  }

  .sidebar__nav-item {
    font-size: 20px;
    line-height: 24px;
  }

  .sidebar__close-btn {
    width: 12px;
    height: 14px;
  }
  .btn-link {
    width: 100%;
  }
  .contact-btn {
    white-space: nowrap;
    padding: 22px 28px;
    line-height: 24px;
  }
}

@media screen and (max-width: 424px) {
  .contact-btn {
    padding: 14px 20px;
  }
}
@media screen and (max-width: 320px) {
  .contact-btn {
    padding: 14px 10px;
  }
}
</style>
