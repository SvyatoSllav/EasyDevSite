<template>
  <div class="pink-circle__wrapper">
    <div class="pink-circle"></div>
  </div>
  <div class="blue-circle"></div>
  <the-header @showForm="this.isVisible = true"></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <case-intro v-bind:caseInfo="portfolioItem"></case-intro>
  <case-img v-bind:caseInfo="portfolioItem"></case-img>
  <case-info-slider v-bind:caseInfo="portfolioItem"></case-info-slider>
  <case-text v-bind:caseInfo="portfolioItem"></case-text>
  <the-footer @showForm="this.isVisible = true"></the-footer>
  <contact-modal-form @close="this.isVisible = false" :isVisible="isVisible">
  </contact-modal-form>
</template>

<script>
import TheHeader from "@/components/CaseInfo/TheHeader";
import CaseIntro from "@/components/CaseInfo/CaseIntro";
import CaseImg from "@/components/CaseInfo/CaseImg";
import CaseInfoSlider from "@/components/CaseInfo/CaseInfoSlider";
import CaseText from "@/components/CaseInfo/CaseText";
import TheFooter from "@/components/CaseInfo/TheFooter";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  components: {
    TheHeader,
    CaseIntro,
    CaseImg,
    CaseInfoSlider,
    CaseText,
    TheFooter,
  },
  data() {
    return {
      isVisible: false,
      portfolioItem: {},
    };
  },
  computed: {
    burgerTop() {
      if (window.innerWidth > 1160) {
        return "0";
      } else if (window.innerWidth > 476) {
        return "30px";
      }
      return "20px";
    },
  },
  methods: {
    async fetchProject() {
      try {
        const route = useRoute();
        let caseId = route.path.split("/")[2];
        const response = await axios.get(
          "https://api.easydev-program.com/api/v1" +
            "/portfolio/projects/" +
            caseId +
            "/"
        );
        this.portfolioItem = response.data.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchProject();
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
.blue-circle {
  z-index: -1;
  position: absolute;
  top: 1900px;
  left: 0;
  transform: translateX(-270px);
  width: 576px;
  height: 576px;
  background-color: #3587bf;
  background: rgba(53, 135, 191, 0.3);
  filter: blur(225px);
}
</style>
