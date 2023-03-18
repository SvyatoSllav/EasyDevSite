<template>
  <section class="clients">
    <gradient-tags class="client-tags">
      <template v-slot:first_tag>клиенты</template
      ><template v-slot:second_tag>/клиенты</template>
    </gradient-tags>
    <div class="clients-banner-wrapper">
      <img class="clients__banner" src="../assets/img/banner.png" alt="" />
      <img class="clients__banner" src="../assets/img/banner.png" alt="" />
      <img class="clients__banner" src="../assets/img/banner.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../public/css/clients.css";
</style>
