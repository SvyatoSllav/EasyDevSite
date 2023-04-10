<template>
  <section class="services">
    <div class="services__wrapper">
      <div class="services__items">
        <div class="service__item" v-for="item in items" :key="item.id">
          <div class="service__info-wrapper">
            <h3 class="service__item-title">{{ item.name }}</h3>
            <p class="service__item-text">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Настройка тестирования",
          text: "Организуем процесс тестирования с нуля в соответствии с международными стандартами ISO и ISTQB, разрабатываем стратегию тестирования, выстраиваем процессы контроля качества и т.д.",
        },
        {
          id: 2,
          name: "Настройка тестирования",
          text: "Организуем процесс тестирования с нуля в соответствии с международными стандартами ISO и ISTQB, разрабатываем стратегию тестирования, выстраиваем процессы контроля качества и т.д.",
        },
        {
          id: 3,
          name: "Настройка тестирования",
          text: "Организуем процесс тестирования с нуля в соответствии с международными стандартами ISO и ISTQB, разрабатываем стратегию тестирования, выстраиваем процессы контроля качества и т.д.",
        },
        {
          id: 4,
          name: "Настройка тестирования",
          text: "Организуем процесс тестирования с нуля в соответствии с международными стандартами ISO и ISTQB, разрабатываем стратегию тестирования, выстраиваем процессы контроля качества и т.д.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services {
  padding-top: 60px;
  padding-bottom: 95px;
}
.services__wrapper {
  max-width: 1161px;
  margin: 0 auto;
}
.service__tags {
  margin-left: auto;
  width: 190px;
}
.service__tags h3:last-child {
  text-align: end;
}
.services__items {
  max-width: 1161px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 50px;
}
.services__contact-link {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 78px;
}
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
  margin-bottom: 26px;
  font-family: "Unbounded";
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
}

.service__item-text {
  margin-bottom: 93px;
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
@media screen and (max-width: 1160px) {
  .services__items {
    margin: 50px 147px 0;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 25px;
  }
  .services__contact-link {
    justify-content: center;
  }
}

@media screen and (max-width: 1023px) {
  .services__items {
    margin: 50px 37px 0;
  }
}

@media screen and (max-width: 766px) {
  .service__item {
    border-radius: 30px;
  }
  .service__info-wrapper {
    padding: 29px 18px 28px;
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
