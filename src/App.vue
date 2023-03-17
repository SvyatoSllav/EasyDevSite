<template>
  <div class="circle-wrapper">
    <div class="blue-circle"></div>
  </div>
  <div class="pink-circle"></div>
  <the-header></the-header>
  <the-about></the-about>
  <the-reviews></the-reviews>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheAbout from "@/components/TheAbout";
import TheReviews from "@/components/TheReviews";
export default {
  data() {},
  components: {
    TheHeader,
    TheAbout,
    TheReviews,
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
  font-family: "PTSans-Regular";
  src: url(../public/fonts/PTSans-Regular.ttf);
}

@font-face {
  font-family: "Righteous-Regular";
  src: url(../public/fonts/Righteous-Regular.ttf);
}
html {
  scroll-behavior: smooth;
}
body {
  overflow-x: hidden;
  background-color: #fef6ff;
  margin-top: 43px;
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
</style>
