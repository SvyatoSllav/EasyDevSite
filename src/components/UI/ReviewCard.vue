<template>
  <div class="review__card">
    <div class="review__card-wrapper">
      <p class="review__text">
        <slot name="review-text"></slot>
      </p>
      <div class="review__author">
        <div class="review__author-profile">
          <slot name="author-img"></slot>
        </div>
        <div class="review__author-info">
          <div class="review__author-name">
            <slot name="author-name"></slot>
          </div>
          <div class="review__author-company">
            <slot name="author-company"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "review-card",
};
</script>

<style scoped>
@import "@/assets/styles/reviews/review_card.css";
</style>
