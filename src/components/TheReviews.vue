<template>
  <section class="reviews">
    <div class="reviews__wrapper">
      <gradient-tags class="reviews__tags">
        <template v-slot:first_tag>отзывы</template>
        <template v-slot:second_tag>/отзывы</template>
      </gradient-tags>
      <div class="reviews__slider">
        <swiper
          :navigation="{
            prevEl: prev,
            nextEl: next,
          }"
          :modules="modules"
          class="mySwiper"
          :slides-per-view="3"
          :space-between="50"
        >
          <swiperSlide>
            <review-card>
              <template v-slot:review-text
                >“Скоро год, как сотрудничаем с компанией. Начали работать с
                самого начала нашего бизнеса. Ребята достаточно быстро и
                качественно создали группу, разработав для нее логотип,
                аватарку, определенный фирменный стиль магазина. Заполнили
                необходимой информацией и контентом всю группу, предварительно
                обсудив с нами все детали.”</template
              >
              <template v-slot:author-img
                ><img src="../../public/img/review_author1.png" alt=""
              /></template>
              <template v-slot:author-name>Анастасия Иванова</template>
              <template v-slot:author-company>CLG Globus</template>
            </review-card>
          </swiperSlide>

          <swiperSlide>
            <review-card>
              <template v-slot:review-text
                >“С компанией сотрудничаем около полугода. Помогли с раскруткой
                и администрированием. Доволен ценой и грамотной консультацией по
                любому вопросу. Спасибо!”</template
              >
              <template v-slot:author-img
                ><img src="../../public/img/review_author1.png" alt=""
              /></template>
              <template v-slot:author-name>Анастасия Иванова</template>
              <template v-slot:author-company>CLG Globus</template>
            </review-card>
          </swiperSlide>

          <swiperSlide>
            <review-card>
              <template v-slot:review-text
                >“Скоро год, как сотрудничаем с компанией. Начали работать с
                самого начала нашего бизнеса. Ребята достаточно быстро и
                качественно создали группу, разработав для нее логотип,
                аватарку, определенный фирменный стиль магазина. Заполнили
                необходимой информацией и контентом всю группу, предварительно
                обсудив с нами все детали.”</template
              >
              <template v-slot:author-img
                ><img src="../../public/img/review_author1.png" alt=""
              /></template>
              <template v-slot:author-name>Анастасия Иванова</template>
              <template v-slot:author-company>CLG Globus</template>
            </review-card>
          </swiperSlide>
          <swiperSlide>
            <review-card>
              <template v-slot:review-text
                >“Хочу поделиться радостью и выразить свою благодарность
                компании! Благодаря ее трудам, мы не стоим на месте, а растем и
                развиваемся. Ребята - молодцы! Усовершенствовали нашу группу
                вконтакте: появилась навигация, теперь всю необходимую
                информацию можно найти, кликнув на банер. Также у нас появился
                замечательный сайт!”</template
              >
              <template v-slot:author-img
                ><img src="../../public/img/review_author1.png" alt=""
              /></template>
              <template v-slot:author-name>Анастасия Иванова</template>
              <template v-slot:author-company>CLG Globus</template>
            </review-card>
          </swiperSlide>
        </swiper>
      </div>
      <div class="review__buttons">
        <div ref="prev" class="swiper-btn swiper-btn-prev">
          <img class="arrow-img" src="../../public/img/left_arrow.svg" alt="" />
        </div>
        <div ref="next" class="swiper-btn swiper-btn-next">
          <img
            class="arrow-img"
            src="../../public/img/right_arrow.svg"
            alt=""
          />
        </div>
      </div>
      <img
        src="../../public/img/reviews_line.png"
        alt=""
        class="reviews__line"
      />
    </div>
  </section>
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
@import "../../public/css/reviews.css";
</style>
