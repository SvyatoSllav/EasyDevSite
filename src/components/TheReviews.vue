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
          <swiperSlide :key="post.id" v-for="post in posts">
            <review-card>
              <template v-slot:review-text>{{ post.reviewText }}</template>
              <template v-slot:author-img
                ><img :src="post.authorImg" alt=""
              /></template>
              <template v-slot:author-name>{{ post.authorName }}</template>
              <template v-slot:author-company>{{
                post.authorCompany
              }}</template>
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
  data() {
    return {
      posts: [
        {
          id: 1,
          reviewText: "somte-text",
          authorImg: require("../assets/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 2,
          reviewText: "somte-text",
          authorImg: require("../assets/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 3,
          reviewText: "somte-text",
          authorImg: require("../assets/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 4,
          reviewText: "somte-text",
          authorImg: require("../assets/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
      ],
    };
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
