<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!--  <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul> -->
    <!--挖个坑等着组件的使用者填充-->
    <slot name="center"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>