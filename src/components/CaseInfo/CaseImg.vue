<template>
  <div class="case__slider">
    <swiper
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="1"
      :space-between="40"
    >
      <swiperSlide>
        <img
          src="@/assets/img/case-img.png"
          alt=""
          class="case-img"
          width="1159"
          height="569"
        />
      </swiperSlide>
      <swiperSlide>
        <img
          src="@/assets/img/case-img.png"
          alt=""
          class="case-img"
          width="1159"
          height="569"
        />
      </swiperSlide>
    </swiper>
  </div>
  <div class="case__buttons">
    <div ref="prev" class="swiper-btn swiper-btn-prev">
      <img class="arrow-img" src="@/assets/img/left_arrow.svg" alt="" />
    </div>
    <div ref="next" class="swiper-btn swiper-btn-next">
      <img class="arrow-img" src="@/assets/img/right_arrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
      prev,
      next,
    };
  },
};
</script>

<style scoped>
.case__slider {
  cursor: pointer;
  /* padding: 0 20px; */
}
.mySwiper {
  text-align: center;
}
.case-img {
}
.case__buttons {
  width: 208px;
  margin: 50px auto 0;
  display: flex;
  justify-content: space-around;
}
</style>
