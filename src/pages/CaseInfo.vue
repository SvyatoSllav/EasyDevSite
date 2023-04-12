<template>
  <div class="pink-circle__wrapper">
    <div class="pink-circle"></div>
  </div>
  <the-header></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <case-intro></case-intro>
  <case-img></case-img>
  <case-info-slider></case-info-slider>
</template>

<script>
import TheHeader from "@/components/CaseInfo/TheHeader";
import CaseIntro from "@/components/CaseInfo/CaseIntro";
import CaseImg from "@/components/CaseInfo/CaseImg";
import CaseInfoSlider from "@/components/CaseInfo/CaseInfoSlider";
export default {
  components: {
    TheHeader,
    CaseIntro,
    CaseImg,
    CaseInfoSlider,
  },
  data() {
    return {
      burgerTop:
        window.innerWidth > 1160
          ? 0
          : window.innerWidth > 475
          ? "75px"
          : "30px",
      isVisible: false,
    };
  },
};
</script>

<style scoped>
.pink-circle__wrapper {
  position: absolute;
  z-index: -1;
  overflow: hidden;
  top: 563px;
  right: 0;
  filter: blur(225px);
}
.pink-circle {
  position: relative;
  right: -120px;
  top: 0;
  transform: translateX(240px);
  width: 576px;
  height: 576px;
  background: rgba(222, 109, 241, 0.7);
}
</style>
