<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: "Inter-Regular";
  src: url(@/assets/fonts/Inter-Regular.ttf);
}

@font-face {
  font-family: "Inter-Bold";
  src: url(@/assets/fonts/Inter-Bold.ttf);
}

@font-face {
  font-family: "Golos-Text-Regular";
  src: url(@/assets/fonts/GolosText-Regular.ttf);
}

@font-face {
  font-family: "Golos-Text-Medium";
  src: url(@/assets/fonts/GolosText-Medium.ttf);
}

@font-face {
  font-family: "Golos-Text-Bold";
  src: url(@/assets/fonts/GolosText-Bold.ttf);
}

@font-face {
  font-family: "Unbounded";
  src: url(@/assets/fonts/Unbounded-Regular.ttf);
}

@font-face {
  font-family: "Unbounded-Light";
  src: url(@/assets/fonts/Unbounded-Light.ttf);
}

@font-face {
  font-family: "PTSans-Regular";
  src: url(@/assets/fonts/PTSans-Regular.ttf);
}

@font-face {
  font-family: "Righteous-Regular";
  src: url(@/assets/fonts/Righteous-Regular.ttf);
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
@media screen and (max-width: 767px) {
  :root {
    --title-fz: 30px;
    --sub_title-fz: 20px;
    --main_text-fz: 28px;
    --review_text-fz: 16px;
  }
}
</style>
