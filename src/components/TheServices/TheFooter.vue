<template>
  <footer id="footer" class="footer">
    <div class="footer__wrapper">
      <gradient-tags class="footer__tags">
        <template v-slot:first_tag>контакты</template>
        <template v-slot:second_tag>/контакты</template>
      </gradient-tags>
      <h1 class="footer__title">
        Хотите начать разработку сайта — просто отправьте заявку
      </h1>
      <a class="btn-link" @click="showForm">
        <button class="contact-btn"><slot>оставить заявку</slot></button>
      </a>
      <div class="footer__contacts-wrapper">
        <div class="footer__contacts">
          <h3 class="footer__phone-contact">
            <a href="tel:+79172300481">+79172300481</a>
          </h3>
          <h3 class="footer__mail-contact">
            <a href="mailto:info@easydev-program.com"
              >info@easydev-program.com</a
            >
          </h3>
          <h3 class="footer__telegram-contact">
            <a href="https://t.me/EasyDevVi">TG Виталий</a>
          </h3>
        </div>
        <img src="@/assets/img/footer_img.png" alt="" class="footer__image" />
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
export default {
  methods: {
    showForm() {
      console.log(1);
      this.$emit("showForm");
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: #fff;
}

.footer__wrapper {
  max-width: 1161px;
  padding-top: 66px;
  margin: 0 auto;
}

.footer__tags {
  width: 230px;
  margin-left: 20px;
}

.footer__tags h3:last-child {
  text-align: end;
}

.footer__title {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--title-fz);
  line-height: var(--title-lh);
  margin: 50px 0;
}

.footer__contacts {
  margin-top: 100px;
  margin-bottom: 50px;
  font-family: "Unbounded-Light";
  font-weight: 100;
  font-style: normal;
  font-size: var(--sub_title-fz);
  line-height: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 80px;
  white-space: nowrap;
  padding-bottom: 25px;
  border-bottom: 1px solid black;
}

.footer__image {
  display: none;
}

.footer__copyright {
  display: flex;
  justify-content: space-between;
}

.footer-copyright-text {
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  max-width: 502px;
}

.footer-copyright-links {
  display: flex;
  flex-direction: column;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-decoration-line: underline;
}
.contact-btn {
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

@media screen and (max-width: 1160px) {
  .footer__wrapper {
    padding: 30px 36px;
  }
  .footer__contacts {
    display: flex;
    flex-direction: column;
  }
  .footer__contacts h3 {
    margin-bottom: 25px;
  }
  .footer__contacts-wrapper {
    display: flex;
  }
  .footer__image {
    max-width: 350px;
    max-height: 232px;
    align-self: center;
    padding-left: 35px;
    display: inline;
  }
}
@media screen and (max-width: 1026px) {
  .footer__contacts-wrapper {
    display: block;
  }
  .footer__image {
    display: none;
  }
  .footer__copyright {
    flex-direction: column;
  }
  .footer-copyright-text {
    margin-bottom: 25px;
  }
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
  .footer__wrapper {
    padding: 30px 12px;
  }
  .footer__contacts {
    font-size: 19px;
    line-height: 40px;
  }
}

@media screen and (max-width: 374px) {
  .footer__contacts {
    font-size: 16px;
  }
}
@media screen and (max-width: 320px) {
  .contact-btn {
    padding: 14px 10px;
  }
}
</style>
