<template>
  <header class="header" id="header">
    <div class="container">
      <div class="header__nav-wrapper">
        <a href="#"><img :src="logoImg" alt="" class="logo" /></a>
        <div class="header__nav-items">
          <router-link to="/about" class="header__nav-link">
            <h2 class="header__nav-item">О нас</h2>
          </router-link>
          <a href="#" v-scroll-to="'#portfolio'" class="header__nav-link">
            <h2 class="header__nav-item">Наши работы</h2>
          </a>
          <router-link to="/home-services" class="header__nav-link">
            <h2 class="header__nav-item">Услуги</h2>
          </router-link>
          <a href="#" v-scroll-to="'#footer'" class="header__nav-link">
            <h2 class="header__nav-item">Контакты</h2>
          </a>
        </div>
        <button @click="showForm" class="header__nav_contact-button">
          <p class="header__nav_contact-text">Оставить заявку</p>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logoImg: require(`@/assets/img/logo_${
        window.innerWidth > 1023
          ? "desktop"
          : window.innerWidth > 425
          ? "tablet"
          : "mobile"
      }.svg`),
    };
  },
  methods: {
    showForm() {
      this.$emit("showForm");
    },
  },
  mounted() {
    const scrollTo = this.$route.meta.scrollTo;
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        const options = {
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        };
        el.scrollIntoView(options);
      }
    }
  },
};
</script>
<style scoped>
.header {
  margin: 43px auto 0;
  max-width: 1372px;
  padding: 11px 0;
  background-color: #fff;
  border-radius: 30px;
}

.header__nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.header__nav-items {
  display: flex;
}

.header__nav-link {
  margin-right: 40px;
}

.header__nav-item {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #161c2d;
  transition: 0.3s ease;
}

.header__nav-item:hover {
  color: #de6df1;
}

.header__nav_item:last-child {
  margin-right: 0;
}

.header__nav_contact-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header__nav_contact-text {
  border: 2px solid transparent;
  color: #fff;
  background-color: #de6df1;
  padding: 16px 26px;
  font-family: "Unbounded";
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  border-radius: 12px;
  transition: 0.3s ease;
}

.header__nav_contact-text:hover {
  border: 2px solid black;
  color: #de6df1;
  background-color: #fff;
}

@media screen and (max-width: 1160px) {
  .header {
    margin-top: 60px;
    padding-top: 0px;
    padding-bottom: 42px;
    border-radius: 30px;
    background-color: transparent;
  }
  .logo {
    width: 80px;
    height: 80px;
  }

  .container {
    padding: 0 37px;
  }

  .header__nav-items {
    display: none;
  }

  .header__nav_contact-button {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  .header {
    margin-top: 17px;
  }
  .header__nav-wrapper {
    padding: 0;
  }
  .container {
    padding: 0 13px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .container {
    padding: 0 13px;
  }
}
</style>
