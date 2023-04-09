<template>
  <header class="header">
    <div class="container">
      <div class="header__nav-wrapper">
        <img :src="logoImg" alt="" class="logo" />
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
    padding-top: 22px;
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
