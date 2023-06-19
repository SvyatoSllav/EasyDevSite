<template>
  <the-header @showForm="this.isVisible = true"></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <services-info @showForm="this.isVisible = true"></services-info>
  <contact-modal-form @close="this.isVisible = false" :isVisible="isVisible">
  </contact-modal-form>
  <the-services></the-services>
  <the-footer @showForm="this.isVisible = true"></the-footer>
</template>

<script>
import TheHeader from "@/components/TheServices/TheHeader";
import ServicesInfo from "@/components/TheServices/ServicesInfo";
import TheServices from "@/components/TheServices/TheServices";
import TheFooter from "@/components/TheServices/TheFooter";
export default {
  data() {
    return {
      burgerTop:
        window.innerWidth > 1160
          ? 0
          : window.innerWidth > 476
          ? "30px"
          : "20px",
      isVisible: false,
    };
  },
  components: {
    TheHeader,
    ServicesInfo,
    TheServices,
    TheFooter,
  },
};
</script>

<style></style>
