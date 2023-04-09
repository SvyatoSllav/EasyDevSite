<template>
  <div class="burger">
    <span class="burger__line"></span><span class="burger__line"></span
    ><span class="burger__line"></span>
  </div>
</template>

<script>
export default {
  name: "burger-menu",
};
</script>

<style scoped>
.burger {
  visibility: hidden;
  position: fixed;
  right: 37px;
  top: 76px;
  display: flex;
  width: 66px;
  height: 47px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 2;
}

.burger span {
  background-color: #de6df1;
  display: block;
  width: 66px;
  height: 10px;
}
@media screen and (max-width: 1160px) {
  .burger {
    visibility: visible;
  }
}

@media screen and (max-width: 425px) {
  .burger {
    top: 50px;
    right: 13px;
    width: 39px;
    height: 28px;
  }
  .burger span {
    width: 39px;
    height: 5px;
    color: black;
  }
}
</style>
