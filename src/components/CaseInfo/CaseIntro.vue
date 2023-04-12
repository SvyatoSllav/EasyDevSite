<template>
  <div class="tags-wrapper">
    <gradient-tags class="case__tags">
      <template v-slot:first_tag>наши работы</template
      ><template v-slot:second_tag>/наши работы</template>
    </gradient-tags>
  </div>
  <section class="case-intro">
    <h5 class="case__title">{{ this.title }}</h5>
    <h6 class="case__subtitle">{{ this.subtitle }}</h6>
    <p class="case__case-info">Особенности проекта</p>
    <ul class="case__info-list">
      <li v-for="el in this.infoItems" class="case__info-text" :key="el">
        {{ el }}
      </li>
    </ul>
    <img src="@/assets/img/case.svg" alt="" class="case__img" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Ubibat",
      subtitle: "Site for powerbank sharing service",
      infoItems: [
        "Адаптивная верстка с анимацией и эффектом Parallax",
        "Получение актуальной информации о проходящих акциях в рамках «Программы 3+»",
        "Актуальный список дилеров, с возможностью просмотра их местоположения на карте на мобильных устройствах",
      ],
    };
  },
};
</script>

<style scoped>
.tags-wrapper {
  max-width: 1372px;
  margin: 0 auto;
}
.case__tags {
  width: 300px;
  margin: 90px 0px 50px auto;
}
.case-intro {
  background-color: #fff;
  padding: 56px 0 0px 110px;
  max-width: 1372px;
  max-height: 590px;
  margin: 0 auto 92px;
  border-radius: 30px;
}
.case__title {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  margin-bottom: 10px;
}
.case__subtitle {
  margin-bottom: 90px;
}

.case__subtitle,
.case__info-list,
.case__case-info {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #de6df1;
}
.case__case-info {
  color: black;
  margin-bottom: 25px;
}
.case__info-list {
  color: black;
  max-width: 938px;
}
.case__info-text {
  line-height: 42px;
  margin-left: 40px;
}
.case__img {
  position: relative;
  top: -450px;
  left: 800px;
}

@media screen and (max-width: 1026px) {
  .case__tags {
    display: none;
  }
  .case__img {
    display: none;
  }
  .case-intro {
    padding: 68px 0px 68px 40px;
    box-sizing: content-box;
  }
}
@media screen and (max-width: 766px) {
  .case__tags {
    display: block;
    margin: 0 0 32px auto;
    width: 220px;
  }
  .case-intro {
    padding: 49px 13px;
    margin-bottom: 50px;
  }
  .case__subtitle {
    margin-bottom: 70px;
  }
  .case__title,
  .case__subtitle,
  .case__info-text,
  .case__case-info {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
