<template>
  <a class="btn-link">
    <button class="contact-btn"><slot>оставить заявку</slot></button>
  </a>
</template>

<script>
export default {
  name: "contact-button",
  data() {
    return {
      btnColor: "#de6df1",
      textColor: "#fff",
    };
  },
};
</script>

<style scoped>
.contact-btn {
  cursor: pointer;
  background-color: v-bind(btnColor);
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
}
@media screen and (max-width: 320px) {
  .contact-btn {
    padding: 14px 10px;
  }
}
</style>
