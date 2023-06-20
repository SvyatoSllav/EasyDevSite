<template>
  <section class="case__text">
    <div
      class="text__client"
      v-for="caseText in caseInfo.project_block"
      :key="caseText.id"
    >
      <h6 class="text__title">{{ caseText.title }}</h6>
      <p class="text__content">
        {{ caseText.title }}
      </p>
    </div>
  </section>
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

<style scoped>
.case__text {
  max-width: 1372px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 30px;
  padding: 70px 110px;
  overflow: hidden;
}
.case__text hr {
  background-color: black;
  margin-bottom: 90px;
}
.text__client {
}
.text__title {
  font-family: "Golos-Text-Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 60px;
}
.text__content {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 39px;
  margin-bottom: 50px;
}
.text__goal {
}
.text__solution {
}
@media screen and (max-width: 1026px) {
  .case__text {
    padding: 70px 40px;
  }
  .case__text hr {
    position: absolute;
    left: 0;
    right: auto;
    width: 100%;
  }
  .text__title {
    margin-top: 0;
  }
}
@media screen and (max-width: 766px) {
  .case__text {
    padding: 80px 13px 13px 29px;
  }
  .text__title,
  .text__content {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 25px;
  }
}
</style>
