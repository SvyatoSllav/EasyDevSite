<template>
  <sidebar class="sidebar"></sidebar>
</template>

<script>
export default {
  name: "the-sidebar",
  data() {
    return {
      foo: "bar",
    };
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 200px;
  /* background-color: pink; */
}
</style>
