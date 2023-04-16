<template>
  <section class="reviews">
    <div class="reviews__wrapper">
      <gradient-tags @click="fetchReviews" class="reviews__tags">
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
          :slides-per-view="reviewAmount"
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
          <img class="arrow-img" src="@/assets/img/left_arrow.svg" alt="" />
        </div>
        <div ref="next" class="swiper-btn swiper-btn-next">
          <img class="arrow-img" src="@/assets/img/right_arrow.svg" alt="" />
        </div>
      </div>
      <img :src="lineImg" alt="" class="reviews__line" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
// import axios from "axios";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      lineImg: require(`@/assets/img/reviews_line_${
        window.innerWidth > 1025
          ? "desktop"
          : window.innerWidth > 450
          ? "tablet"
          : "mobile"
      }.png`),
      reviewAmount:
        window.innerWidth > 1025 ? 3 : window.innerWidth > 450 ? 2 : 1,
      posts: [
        {
          id: 1,
          reviewText: "somte-text",
          authorImg: require("@/assets/img/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 2,
          reviewText: "somte-text",
          authorImg: require("@/assets/img/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 3,
          reviewText: "somte-text",
          authorImg: require("@/assets/img/review_author1.png"),
          authorName: "author__name",
          authorCompany: "asmamda",
        },
        {
          id: 4,
          reviewText: "somte-text",
          authorImg: require("@/assets/img/review_author1.png"),
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
  //   methods: {
  //     async fetchReviews() {
  //       const data = {
  //         "X-CSRFToken":
  //           "uj40xdIpZBziNdS9jhKZTtpg10w62k5UBAkomfFeGpHBV9xsWBkoB5saXq8Zsv1I",
  //       };
  //       try {
  //         const response = await axios.get(
  //           "http://127.0.0.1/api/v1/portfolio/reviews_list/",
  //           {
  //             headers: data,
  //           }
  //         );
  //         console.log(response);
  //       } catch (e) {
  //         // console.log(e);
  //       }
  //     },
  //   },
};
</script>

<style scoped>
@import "@/assets/styles/reviews/reviews.css";
@import "@/assets/styles/reviews/reviews_media.css";
</style>
