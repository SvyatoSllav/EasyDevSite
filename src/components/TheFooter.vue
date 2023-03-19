<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <gradient-tags class="footer__tags">
        <template v-slot:first_tag>контакты</template>
        <template v-slot:second_tag>/контакты</template>
      </gradient-tags>
      <h1 class="footer__title">
        Хотите начать разработку сайта — просто отправьте заявку
      </h1>
      <contact-button></contact-button>
      <div class="footer__contacts">
        <h3 class="footer__phone-contact">
          Телефон: <a href="tel:+79172300481">7(917)230-04-81</a>
        </h3>
        <h3 class="footer__mail-contact">
          Email:
          <a href="mailto:info@easydev-program.com">info@easydev-program.com</a>
        </h3>
        <h3 class="footer__telegram-contact">
          Telegram:
          <a href="https://t.me/EasyDevVi">Виталий</a>
        </h3>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/styles/footer.css";
</style>
