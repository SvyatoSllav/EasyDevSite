<template>
  <section class="contact" id="contact">
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
        <form @submit.prevent>
          <input
            v-model="name"
            type="text"
            class="contact__name-field contact__form-field"
            placeholder="Имя"
            required
          /><br />
          <input
            v-model="email"
            type="email"
            class="contact__email-field contact__form-field"
            placeholder="Email"
            required
          /><br />
          <input
            v-model="phone"
            type="tel"
            class="contact__phone-field contact__form-field"
            placeholder="Телефон"
            required
          /><br />
          <contact-button
            class="contact__submit-btn"
            @click="sendFormData"
          ></contact-button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    sendFormData() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      this.name = this.email = this.phone = "";
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/contact_us.css";
</style>
