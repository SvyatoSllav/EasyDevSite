<template>
  <div class="circle-wrapper">
    <div class="blue-circle"></div>
  </div>
  <div class="pink-circle"></div>
  <the-header></the-header>
  <the-sidebar></the-sidebar>
  <the-about v-if="isDesktop"></the-about>
  <the-about-mobile v-else></the-about-mobile>
  <the-reviews></the-reviews>
  <the-clients></the-clients>
  <contact-us></contact-us>
  <!-- <the-portfolio></the-portfolio>
  <the-services></the-services>
  <the-footer></the-footer> -->
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheAbout from "@/components/TheAbout";
import TheAboutMobile from "@/components/TheAboutMobile";
import TheReviews from "@/components/TheReviews";
import TheClients from "@/components/TheClients";
import ContactUs from "@/components/ContactUs";
// import ThePortfolio from "@/components/ThePortfolio";
// import TheServices from "@/components/TheServices";
// import TheFooter from "@/components/TheFooter";
export default {
  data() {
    return {
      isDesktop: window.innerWidth > 1160 ? true : false,
    };
  },
  components: {
    TheHeader,
    TheAbout,
    TheAboutMobile,
    TheReviews,
    TheClients,
    ContactUs,
    // ThePortfolio,
    // TheServices,
    // TheFooter,
  },
};
</script>

<style>
@font-face {
  font-family: "Inter-Regular";
  src: url(../public/fonts/Inter-Regular.ttf);
}

@font-face {
  font-family: "Inter-Bold";
  src: url(../public/fonts/Inter-Bold.ttf);
}

@font-face {
  font-family: "Golos-Text-Regular";
  src: url(../public/fonts/GolosText-Regular.ttf);
}

@font-face {
  font-family: "Golos-Text-Medium";
  src: url(../public/fonts/GolosText-Medium.ttf);
}

@font-face {
  font-family: "Golos-Text-Bold";
  src: url(../public/fonts/GolosText-Bold.ttf);
}

@font-face {
  font-family: "Unbounded";
  src: url(../public/fonts/Unbounded-Regular.ttf);
}

@font-face {
  font-family: "Unbounded-Light";
  src: url(../public/fonts/Unbounded-Light.ttf);
}

@font-face {
  font-family: "PTSans-Regular";
  src: url(../public/fonts/PTSans-Regular.ttf);
}

@font-face {
  font-family: "Righteous-Regular";
  src: url(../public/fonts/Righteous-Regular.ttf);
}
:root {
  --title-fz: 50px;
  --sub_title-fz: 28px;
  --main_text-fz: 28px;
  --review_text-fz: 16px;
}
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  background-color: #fef6ff;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
.container {
  max-width: 1160px;
  margin: 0 auto;
}
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
  background-color: #3587bf;
  background: rgba(53, 135, 191, 1);
}

.pink-circle {
  z-index: -1;
  position: absolute;
  top: 608px;
  left: -120px;
  width: 576px;
  height: 576px;
  background-color: #3587bf;
  background: rgba(222, 109, 241, 0.3);
  filter: blur(225px);
}
@media screen and (max-width: 767px) {
  :root {
    --title-fz: 30px;
    --sub_title-fz: 20px;
    --main_text-fz: 28px;
    --review_text-fz: 16px;
  }
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
