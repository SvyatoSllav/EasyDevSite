<template>
  <the-header @showForm="this.isVisible = true"></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <services-info></services-info>
  <contact-modal-form
    @close="this.isVisible = false"
    :isVisible="isVisible"
  ></contact-modal-form>
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
      isVisible: false,
    };
  },
  components: {
    TheHeader,
    ServicesInfo,
  },
};
</script>

<style></style>
