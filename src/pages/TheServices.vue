<template>
  <the-header></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
</template>

<script>
import TheHeader from "@/components/TheServices/TheHeader";
export default {
  data() {
    return {
      burgerTop:
        window.innerWidth > 1160
          ? 0
          : window.innerWidth > 475
          ? "95px"
          : "50px",
    };
  },
  components: {
    TheHeader,
  },
};
</script>

<style scoped></style>
