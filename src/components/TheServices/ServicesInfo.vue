<template>
  <section id="services" class="services-info">
    <gradient-tags class="services__tags">
      <template v-slot:first_tag>услуги</template
      ><template v-slot:second_tag>/услуги</template>
    </gradient-tags>
    <h4 class="services__title">{{ serviceItem.title }}</h4>
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
            {{ serviceItem.description }}
          </p>
        </div>
        <div class="service__img-wrapper">
          <img :src="servicesImg" alt="" class="services__img" />
        </div>
      </div>
      <a class="btn-link" @click="showForm">
        <button class="contact-btn"><slot>оставить заявку</slot></button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      servicesImg:
        window.innerWidth > 510
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
  props: {
    serviceItem: {
      type: Object,
      required: true,
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
  width: 190px;
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
  white-space: nowrap;
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
.service__img-wrapper {
  max-width: 500px;
  margin: 20px auto 0;
}
.services__img {
  max-height: 430px;
}
@media screen and (max-width: 1160px) {
  .services__content {
    padding-bottom: 540px;
    margin: 0;
  }
  .services__tags {
    margin-top: 46px;
  }
  .services__content-wrapper {
    flex-direction: column;
  }
}

@media screen and (max-width: 1023px) {
  .services__title {
    margin-top: 43px;
    margin-left: 39px;
  }
  .services__content-wrapper {
    padding: 91px 135px 194px 35px;
  }
  .contact-btn {
    margin-left: 35px;
  }
  .services__img {
    /* position: absolute; */
    top: 1300px;
    /* left: auto; */
    /* right: 35px; */
  }
}

@media screen and (max-width: 767px) {
  .services__tags {
    width: 140px;
    margin-top: 39px;
  }
  .services__title {
    font-size: 20px;
    margin-left: 12px;
  }
  .services__content {
    padding-bottom: 91px;
  }
  .services__content-wrapper {
    display: block;
    padding: 37px 0 54px 13px;
  }
  .services__achievements {
    flex-direction: column;
  }
  .services__text-title {
    font-size: 20px;
    max-width: 325px;
  }
  .btn-link {
    width: 100%;
    display: block;
    text-align: center;
    white-space: nowrap;
  }
  .contact-btn {
    padding: 14px 71px;
    line-height: 24px;
    margin-left: 13px;
  }
}

@media screen and (max-width: 424px) {
  .services__content {
    padding-bottom: 20px;
  }
  .services__content-wrapper {
    padding-bottom: 20px;
  }
  .contact-btn {
    padding: 14px 40px;
  }
}
@media screen and (max-width: 320px) {
  .services__img {
    right: 0;
  }
  .contact-btn {
    padding: 14px 10px;
  }
}
</style>
