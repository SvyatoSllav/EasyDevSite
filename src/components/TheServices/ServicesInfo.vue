<template>
  <section class="services-info">
    <gradient-tags class="services__tags">
      <template v-slot:first_tag>услуги</template
      ><template v-slot:second_tag>/услуги</template>
    </gradient-tags>
    <h4 class="services__title">{{ servicesTitle }}</h4>
    <div class="services__content">
      <div class="services__content-wrapper">
        <div class="services__texts">
          <div class="services__achievements">
            <service-achivement>
              <template v-slot:title>85+</template>
              <template v-slot:subtitle>
                разработанных стратегий тестирования
              </template>
            </service-achivement>
            <service-achivement>
              <template v-slot:title>30+</template>
              <template v-slot:subtitle>управляемых проектов </template>
            </service-achivement>
            <service-achivement>
              <template v-slot:title>200+</template>
              <template v-slot:subtitle>проектов </template>
            </service-achivement>
          </div>
          <p class="services__text-title">
            Принимайте правильные управленческие решения на основе данных
            аудита. Описание и дополнительная информация.
          </p>
        </div>
        <img :src="servicesImg" alt="" class="services__img" />
      </div>
      <a class="btn-link" @click="showForm">
        <button class="contact-btn"><slot>оставить заявку</slot></button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  //   props: {
  //     service: {
  //       type: Array,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      servicesTitle: "Разработка ПО",
      servicesImg:
        window.innerWidth > 1026
          ? require("@/assets/img/services_img_desktop.jpg")
          : require("@/assets/img/services_img_mobile.jpg"),
    };
  },
  methods: {
    showForm() {
      console.log(1);
      this.$emit("showForm");
    },
  },
};
</script>

<style scoped>
.services-info {
  max-width: 1372px;
  margin: 0 auto;
}

.services__tags {
  width: 341px;
  margin-left: auto;
  margin-top: 90px;
}
.services__title {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  margin: 50px 0 25px 141px;
}
.services__content {
  background-color: #fff;
  border-radius: 30px;
  margin: 0 34px;
  padding-bottom: 85px;
}
.services__content-wrapper {
  display: flex;
  padding: 85px 44px 85px 110px;
}
.services__texts {
  max-width: 650px;
}
.services__achievements {
  display: flex;
}
.services__text-title {
  font-family: "Golos-Text-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  margin-top: 50px;
  max-width: 622px;
}
.service__btn {
}
.contact-btn {
  margin-left: 110px;
  cursor: pointer;
  background-color: #de6df1;
  padding: 25px 135px;
  border: 2px solid transparent;
  border-radius: 15px;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
  color: #ffffff;
  transition: 0.3s ease;
}

.contact-btn:hover {
  color: #de6df1;
  border: 2px solid black;
  background-color: v-bind(textColor);
}

@media screen and (max-width: 767px) {
  .btn-link {
    width: 100%;
    display: block;
    text-align: center;
    white-space: nowrap;
  }
  .contact-btn {
    padding: 14px 71px;
    line-height: 24px;
  }
}

@media screen and (max-width: 424px) {
  .contact-btn {
    padding: 14px 40px;
  }
}
@media screen and (max-width: 320px) {
  .contact-btn {
    padding: 14px 10px;
  }
}
</style>
