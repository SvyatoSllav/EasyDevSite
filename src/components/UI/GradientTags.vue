<template>
  <div>
    <h3 class="rainbow-tag">
      <slot name="first_tag"></slot>
    </h3>
    <br />
    <h3 class="rainbow-tag">
      <slot name="second_tag"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "gradient-tags",
};
</script>

<style scoped>
.rainbow-tag {
  background: linear-gradient(103.31deg, #de6df1 43.62%, #3587bf 77.54%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: "Unbounded";
  font-style: normal;
  font-weight: 400;
  font-size: var(--sub_title-fz);
  line-height: 33px;
  white-space: nowrap;
  display: inline-block;
}

.rainbow-tag:last-child {
  margin-left: 20px;
}
.rainbow-tag::before {
  content: "<";
}

.rainbow-tag::after {
  content: ">";
}
</style>
