<template>
  <transition name="slide-fade">
    <div class="modal-form" v-show="isVisible">
      <div class="modal-form__wrapper">
        <img
          @click="closeForm"
          src="@/assets/img/close_btn.svg"
          alt=""
          class="modal-form__close-btn"
        />
        <h3 class="modal-form__title">Напишите нам</h3>
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
          <a class="btn-link" href="#contact">
            <button @click="sendFormData" class="contact-btn">
              оставить заявку
            </button>
          </a>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "contact-modal-form",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
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
      this.$emit("close");
    },
    closeForm() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-form {
  top: 0;
  right: 0;
  position: fixed;
  width: 200%;
  height: 200%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
}
.modal-form__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 720px;
  max-height: 900px;
  background-color: #de6df1;
  z-index: 3;
  padding: 129px 83px 70px;
}
.modal-form__close-btn {
  cursor: pointer;
  position: absolute;
  top: 29px;
  right: 58px;
}
.modal-form__title {
  margin-bottom: 70px;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--title-fz);
  line-height: 60px;
  text-align: center;
  color: #ffffff;
}
.contact__form-field {
  margin-bottom: 25px;
  width: 553px;
  padding: 25px 0 25px 34px;
}
.contact-btn {
  cursor: pointer;
  background-color: #3587bf;
  margin-top: 35px;
  padding: 25px 135px;
  border: 2px solid transparent;
  border-radius: 15px;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
  color: #fff;
  transition: 0.3s ease;
  white-space: nowrap;
}

.contact-btn:hover {
  color: #3587bf;
  border: 2px solid black;
  background-color: #fff;
}

@media screen and (max-width: 767px) {
  .modal-form__wrapper {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .modal-form__close-btn {
    right: 88px;
    width: 24px;
    height: 22px;
  }
  .contact__form-field {
    max-width: 345px;
    padding: 14px 0 14px 32px;
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
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
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
