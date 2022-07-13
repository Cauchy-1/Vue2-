<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hyj" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
  /*transition: 0.5s linear;*/
}

/* 进入的起点 离开的终点*/
.hyj-enter,
.hyj-leave-to {
  transform: translateX(-100%);
}

.hyj-enter-active,
.hyj-leave-active {
  transition: 0.5s linear;
}

/* 进入的终点 离开的起点 */
.hyj-enter-to,
.hyj-leave {
  transform: translateX(0px);
}
</style>