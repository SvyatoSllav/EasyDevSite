<template>
  <router-view></router-view>
  <div class="circle-wrapper">
    <div class="blue-circle"></div>
  </div>
  <div class="pink-circle"></div>
  <the-header></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <the-about v-if="isDesktop"></the-about>
  <the-about-mobile v-else></the-about-mobile>
  <the-reviews></the-reviews>
  <the-clients></the-clients>
  <contact-us></contact-us>
  <the-portfolio></the-portfolio>
  <the-services></the-services>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/HomePageComps/TheHeader";
import TheAbout from "@/components/HomePageComps/TheAbout";
import TheAboutMobile from "@/components/HomePageComps/TheAboutMobile";
import TheReviews from "@/components/HomePageComps/TheReviews";
import TheClients from "@/components/HomePageComps/TheClients";
import ContactUs from "@/components/HomePageComps/ContactUs";
import ThePortfolio from "@/components/HomePageComps/ThePortfolio";
import TheServices from "@/components/HomePageComps/TheServices";
import TheFooter from "@/components/HomePageComps/TheFooter";
export default {
  data() {
    return {
      isDesktop: window.innerWidth > 1160 ? true : false,
      burgerTop:
        window.innerWidth > 1160
          ? 0
          : window.innerWidth > 476
          ? "30px"
          : "20px",
    };
  },
  components: {
    TheHeader,
    TheAbout,
    TheAboutMobile,
    TheReviews,
    TheClients,
    ContactUs,
    ThePortfolio,
    TheServices,
    TheFooter,
  },
};
</script>

<style>
.circle-wrapper {
  position: absolute;
  z-index: -1;
  overflow: hidden;
  top: 0;
  right: 0;
  filter: blur(225px);
}
.blue-circle {
  position: relative;
  right: -120px;
  top: -62px;
  transform: translateX(240px);
  width: 576px;
  height: 576px;
  background: rgba(53, 135, 191, 1);
}

.pink-circle {
  z-index: -1;
  position: absolute;
  top: 608px;
  left: -120px;
  width: 576px;
  height: 576px;
  background: rgba(222, 109, 241, 0.3);
  filter: blur(225px);
}

@media screen and (max-width: 576px) {
  .pink-circle {
    left: -160px;
  }
}
@media screen and (max-width: 425px) {
  .pink-circle {
    left: -270px;
  }
}
</style>
