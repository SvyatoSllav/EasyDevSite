<template>
  <section class="contact">
    <div class="contact__wrapper">
      <div class="contact__phone">
        <img
          class="contact__phone-img"
          src="../assets/img/contact_phone.png"
          alt=""
        />
      </div>
      <div class="contact__form">
        <h2 class="contact__title">Напишите нам</h2>
        <h3 class="contact__subtitle">
          Успех вашего будущего проекта начинается здесь!Найдем решение для
          любой вашей задачи.
        </h3>
        <form action="" @submit.prevent="onSubmit">
          <input
            type="text"
            class="contact__name-field contact__form-field"
            placeholder="Имя"
            required
          /><br />
          <input
            type="text"
            class="contact__email-field contact__form-field"
            placeholder="Email"
            required
          /><br />
          <input
            type="phone"
            class="contact__phone-field contact__form-field"
            placeholder="Телефон"
            required
          /><br />
          <contact-button
            type="submit"
            class="contact__submit-btn"
          ></contact-button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../assets/styles/contact_us.css";
</style>
