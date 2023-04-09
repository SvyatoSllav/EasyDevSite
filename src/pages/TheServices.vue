<template>
  <the-header></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <services-info></services-info>
  <contact-form></contact-form>
</template>

<script>
import TheHeader from "@/components/TheServices/TheHeader";
import ServicesInfo from "@/components/TheServices/ServicesInfo";
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
    ServicesInfo,
  },
};
</script>

<style></style>
