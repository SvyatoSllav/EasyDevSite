<template>
  <section class="case__text">
    <div class="text__client">
      <h6 class="text__title">О клиенте</h6>
      <p class="text__content">
        ProtoLamp — студия разработки технологических стартапов и MVP.
        Специалисты студии создают тестовые версии продуктов с помощью
        классической и NoCode разработки, а также занимаются дизайном
        проектов.ProtoLamp раньше была частью другой студии — MetaLamp, для
        которой мы создавали логотип пару лет назад. Сейчас MetaLamp
        концентрируется только на блокчейн-разработке, а ProtoLamp работает со
        стартапами в других сферах
      </p>
      <!-- <hr /> -->
    </div>
    <div class="text__goal">
      <h6 class="text__title">Задача</h6>
      <p class="text__content">
        Разработать логотип и фирменный стиль, которые сохранят преемственность
        айдентики MetaLamp, и подчеркнут специализацию студии ProtoLamp — работу
        со стартапами.
      </p>
      <!-- <hr /> -->
    </div>
    <div class="text__solution">
      <h6 class="text__title">Решение</h6>
      <p class="text__content">
        При создании логотипа ProtoLamp мы использовали тот же образ лампы, что
        и в логотипе MetaLamp, но изменили цвет свечения. Лампа — это метафора,
        которая означает, что студия «‎подсвечивает» ‎сильные и слабые стороны
        клиента, помогает ему совершенствовать проекты.Фирменными цветами стали
        голубой, темно- и светло-фиолетовый. Голубой цвет — это имитация света
        от экрана, ассоциация с чем-то новым. Два оттенка фиолетовых расставляют
        цветовые акценты на фирменных носителях, дополняют голубой цвет и при
        этом не перегружают общее восприятие дизайна. Стилеобразующими
        элементами стали линии — это метафора, которая демонстрирует, что
        ProtoLamp выделяет самое важное в работе с прототипами продуктов.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
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
    margin-top: 140px;
  }
}
@media screen and (max-width: 766px) {
  .case__text {
    padding: 80px 13px 13px 29px;
  }
  .text__title {
    margin-top: 120px;
  }
  .text__title,
  .text__content {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
