<template>
  <div class="case__info">
    <div class="card">
      <div class="card__header">
        <div class="bullet-active bullet"></div>
        <div class="bullet"></div>
      </div>
      <div class="card__content">
        <div class="card__text">
          <p class="card__text-title">Продолжительность</p>
          <p class="card__text-subtitle">{{ caseInfo.project_duration }}</p>
        </div>
        <div class="card__text">
          <p class="card__text-title">Команда</p>
          <p class="card__text-subtitle">
            {{ caseInfo.project_team }}
          </p>
        </div>
        <div class="card__text">
          <p class="card__text-title">Категория</p>
          <p class="card__text-subtitle">{{ caseInfo.project_category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caseInfo: {
      type: Object,
      required: true,
    },
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
  padding-top: 30px;
  background-color: #e0f3ff;
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
  white-space: nowrap;
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
  .paginate {
    padding-top: 23px;
  }
  .card__header {
    height: 65px;
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
