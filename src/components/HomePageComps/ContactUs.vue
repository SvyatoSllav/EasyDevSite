<template>
  <section class="contact">
    <div class="contact__wrapper">
      <div class="contact__phone">
        <img
          class="contact__phone-img"
          src="@/assets/img/contact_phone.png"
          alt=""
        />
      </div>
      <div class="contact__form" id="contact">
        <h2 class="contact__title">Напишите нам</h2>
        <h3 class="contact__subtitle">
          Успех вашего будущего проекта начинается здесь!Найдем решение для
          любой вашей задачи.
        </h3>
        <form @submit.prevent>
          <input
            v-model="name"
            type="text"
            class="contact__form-field"
            placeholder="Имя"
            required
          /><br />
          <input
            v-model="email"
            type="email"
            class="contact__form-field"
            placeholder="Email"
            required
          /><br />
          <input
            v-model="phone"
            type="tel"
            class="contact__form-field"
            placeholder="Телефон"
            required
          /><br />
          <input
            v-model="telegram"
            type="text"
            class="contact__form-field"
            placeholder="Telegram"
            required
          /><br />
          <contact-button @click="sendFormData"></contact-button>
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
      telegram: "",
    };
  },
  methods: {
    sendFormData() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      this.name = this.email = this.phone = this.telegram = "";
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles/contact/contact_us.css";
@import "@/assets/styles/contact/contact_us_media.css";
</style>
