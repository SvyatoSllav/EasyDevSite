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
          :slides-per-view="this.calculateReviewAmount"
          :space-between="50"
        >
          <swiperSlide :key="post.id" v-for="post in posts">
            <review-card>
              <template v-slot:review-text>{{ post.review }}</template>
              <template v-slot:author-img
                ><img :src="post.persons_image" alt=""
              /></template>
              <template v-slot:author-name>{{ post.full_name }}</template>
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
import axios from "axios";
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
      posts: [],
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
  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get(
          process.env.API_URL + "/portfolio/reviews_list/"
        );
        this.posts = response.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchReviews();
  },
  computed: {
    calculateReviewAmount() {
      if (window.innerWidth > 1025 && this.posts.length >= 3) {
        return 3;
      } else if (window.innerWidth > 450 && this.posts.length >= 2) {
        return 2;
      }
      return 1;
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/reviews/reviews.css";
@import "@/assets/styles/reviews/reviews_media.css";
</style>
