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
          <a href="tel:+79172300481">+79172300481</a>
        </h3>
        <h3 class="footer__mail-contact">
          <a href="mailto:info@easydev-program.com">info@easydev-program.com</a>
        </h3>
        <h3 class="footer__telegram-contact">
          <a href="https://t.me/EasyDevVi">TG Виталий</a>
        </h3>
      </div>
      <div class="footer__copyright">
        <div class="footer-copyright-text">
          © monday4me 2022, ООО «Понедельник для меня» ОГРН 1227700006930, ИНН
          9729318077
        </div>
        <div class="footer-copyright-links">
          <a href="#" class="copyright-agreement">
            Пользовательское соглашение
          </a>
          <a href="#" class="copyright-rules">Политика конфиденциальности</a>
        </div>
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
