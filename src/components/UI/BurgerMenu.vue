<template>
  <div class="burger" :style="burgerStyles">
    <span class="burger__line"></span><span class="burger__line"></span
    ><span class="burger__line"></span>
  </div>
</template>

<script>
export default {
  name: "burger-menu",
  props: {
    burgerTop: {
      type: String,
      required: false,
      default: "79px",
    },
  },
  computed: {
    burgerStyles() {
      return {
        visibility: window.innerWidth > 1026 ? "hidden" : "visible",
        position: "fixed",
        right: "37px",
        top: this.burgerTop,
        display: "flex",
        width: window.innerWidth > 475 ? "66px" : "39px",
        height: window.innerWidth > 475 ? "47px" : "28px",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 2,
      };
    },
  },
};
</script>

<style scoped>
.burger span {
  background-color: #de6df1;
  display: block;
  width: 66px;
  height: 10px;
}
@media screen and (max-width: 1160px) {
  .burger {
    visibility: visible;
  }
}

@media screen and (max-width: 425px) {
  .burger {
    right: 13px;
  }
  .burger span {
    width: 39px;
    height: 5px;
    color: black;
  }
}
</style>
