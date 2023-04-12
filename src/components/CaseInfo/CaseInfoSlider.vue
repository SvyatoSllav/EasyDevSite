<template>
  <div class="case__info">
    <swiper
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="1"
      :space-between="40"
    >
      <div class="pagination__wrapper"><div class="paginate"></div></div>
      <swiperSlide>
        <div class="card">
          <div class="card__header"></div>
          <div class="card__content">
            <div class="card__text">
              <p class="card__text-title">Продолжительность</p>
              <p class="card__text-subtitle">10, 5 месяцев</p>
            </div>
            <div class="card__text">
              <p class="card__text-title">Команда</p>
              <p class="card__text-subtitle">
                4 разработчика Project manager QI engineer
              </p>
            </div>
            <div class="card__text">
              <p class="card__text-title">Категория</p>
              <p class="card__text-subtitle">Ux|Ui design</p>
            </div>
          </div>
        </div>
      </swiperSlide>
      <swiperSlide>
        <div class="card">
          <div class="card__header"></div>
          <div class="card__content">
            <div class="card__text">
              <p class="card__text-title">Продолжительность</p>
              <p class="card__text-subtitle">10, 5 месяцев</p>
            </div>
            <div class="card__text">
              <p class="card__text-title">Команда</p>
              <p class="card__text-subtitle">
                4 разработчика Project manager QI engineer
              </p>
            </div>
            <div class="card__text">
              <p class="card__text-title">Категория</p>
              <p class="card__text-subtitle">Ux|Ui design</p>
            </div>
          </div>
        </div>
      </swiperSlide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      pagination: {
        el: ".paginate",
        clickable: true,
        bulletClass: "bullet",
        bulletActiveClass: "bullet-active",
        renderBullet: function (index, className) {
          return '<div class="' + className + '">' + "</div>";
        },
      },
      modules: [Pagination],
    };
  },
};
</script>

<style>
.case__slider {
  cursor: pointer;
}
.case__buttons {
  width: 208px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-around;
}
.card {
  background-color: #fff;
  max-width: 1372px;
  margin: 90px auto;
  border-radius: 30px;
  overflow: hidden;
}
.card__header {
  max-width: 1372px;
  width: 100%;
  height: 85px;
  background-color: #e0f3ff;
}
.pagination__wrapper {
  position: absolute;
  top: 90px;
  width: 100%;
  height: 86px;
  z-index: 1;
}
.bullet {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  display: inline-block;
  margin-left: 30px;
}
.bullet-active {
  background: #de6df1;
}
.paginate {
  max-width: 1372px;
  padding-top: 31px;
  margin: 0 auto;
  height: 100%;
}
.card__content {
  padding-top: 46px;
  padding-bottom: 60px;
  max-width: 1155px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.card__text {
  display: flex;
  flex-direction: column;
}
.card__text-title {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
}
.card__text-subtitle {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #555555;
  max-width: 222px;
}
.swiper-pagination-bullet {
  margin-top: 20px;
  margin-left: 20px;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 1026px) {
  .card__content {
    padding: 55px 42px;
  }
  .card__text-title,
  .card__text-subtitle {
    font-size: 20px;
    line-height: 23px;
  }
}

@media screen and (max-width: 766px) {
  .card__content {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
  .card__text {
    margin-bottom: 30px;
  }
  .card__text:last-child {
    margin-bottom: 50px;
  }
}
</style>
