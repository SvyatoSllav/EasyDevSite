<template>
  <div class="services__achievement">
    <h5 class="service__achivement-title"><slot name="title"></slot></h5>
    <p class="service__achivement-subtitle">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "service-achivement",
};
</script>

<style scoped>
.services__achievement {
  margin-right: 120px;
}
.service__achivement-title {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  margin-bottom: 15px;
}
.service__achivement-subtitle {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: #555555;
  max-width: 113px;
}
@media screen and (max-width: 1023px) {
  .services__achievement {
    margin-bottom: 25px;
  }
}
@media screen and (max-width: 767px) {
  .services__achievement {
    margin-bottom: 25px;
  }
  .service__achivement-title {
    font-size: 40px;
  }
  .service__achivement-subtitle {
    font-size: 12px;
  }
}
</style>
