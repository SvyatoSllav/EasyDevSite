<template>
  <div class="service__item">
    <div class="service__info-wrapper">
      <h3 class="service__item-title"><slot name="item-name"></slot></h3>
      <p class="service__item-text">
        <slot name="item-text"></slot>
      </p>
    </div>
    <button class="service__item-btn">
      <a href="#contact">
        <img
          src="../../assets/img/service_button.svg"
          alt=""
          class="service__item-btn-img"
        />
      </a>
    </button>
  </div>
</template>

<script>
export default {
  name: "service-item",
};
</script>

<style scoped>
.service__item {
  background-color: #fff;
  border-radius: 68px;
}

.service__info-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  max-width: 447px;
  margin: 0 auto;
}

.service__item-title {
  margin-bottom: 34px;
  font-family: "Unbounded";
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
}

.service__item-text {
  margin-bottom: 50px;
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 34px;
}

.service__item-btn {
  background-color: transparent;
  border: none;
  display: flex;
  margin-left: auto;
  padding-right: 55px;
  padding-bottom: 43px;
}

.service__item-btn-img {
  width: 64px;
  height: 64px;
}

@media screen and (max-width: 766px) {
  .service__item {
    border-radius: 30px;
  }
  .service__info-wrapper {
    padding: 60px 20px 0;
  }
  .service__item-text {
    line-height: 24px;
    margin-bottom: 0;
  }
  .service__item-btn {
    padding: 0 34px 26px 0;
  }
  .service__item-btn-img {
    width: 39px;
    height: 36px;
  }
}
</style>
