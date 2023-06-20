<template>
  <the-header @showForm="this.isVisible = true"></the-header>
  <the-sidebar :burgerTop="burgerTop"></the-sidebar>
  <services-info
    :serviceItem="serviceItem"
    @showForm="this.isVisible = true"
  ></services-info>
  <contact-modal-form @close="this.isVisible = false" :isVisible="isVisible">
  </contact-modal-form>
  <the-services :serviceItem="serviceItem"></the-services>
  <the-footer @showForm="this.isVisible = true"></the-footer>
</template>

<script>
import TheHeader from "@/components/TheServices/TheHeader";
import ServicesInfo from "@/components/TheServices/ServicesInfo";
import TheServices from "@/components/TheServices/TheServices";
import TheFooter from "@/components/TheServices/TheFooter";
import { useRoute } from "vue-router";
import axios from "axios";
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
      serviceItem: {},
    };
  },
  components: {
    TheHeader,
    ServicesInfo,
    TheServices,
    TheFooter,
  },
  methods: {
    async fetchProject() {
      try {
        const route = useRoute();
        let serviceId = route.path.split("/")[2];
        const response = await axios.get(
          "https://api.easydev-program.com/api/v1" +
            "/services/projects/" +
            serviceId +
            "/"
        );
        this.serviceItem = response.data.data;
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
