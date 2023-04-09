<template>
  <section class="clients">
    <div class="clients__tags-wrapper">
      <gradient-tags class="client-tags">
        <template v-slot:first_tag>клиенты</template>
        <template v-slot:second_tag>/клиенты</template>
      </gradient-tags>
    </div>
    <div class="clients-banner-wrapper">
      <img class="clients__banner" src="@/assets/img/banner.png" alt="" />
      <img class="clients__banner" src="@/assets/img/banner.png" alt="" />
      <img class="clients__banner" src="@/assets/img/banner.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.clients {
  background-color: #fff;
}

.clients__tags-wrapper {
  max-width: 1161px;
  margin: 0 auto;
}

.client-tags {
  padding-top: 165px;
  margin-left: auto;
  margin-bottom: 70px;
  width: 252px;
}

.client-tags h3:nth-child(2) {
  text-align: center;
}

.clients-banner-wrapper {
  display: flex;
  overflow: hidden;
}

.clients__banner {
  animation: slide 10s linear infinite;
  margin-left: 165px;
}

@keyframes slide {
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-1570px);
  }
}
</style>
