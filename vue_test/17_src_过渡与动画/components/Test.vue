<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hyj" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
}

/*来 */
.hyj-enter-active {
  animation: atguigu 0.5s linear;
}

/*走 翻转*/
.hyj-leave-active {
  animation: atguigu 0.5s linear reverse;
}

/*定义动画 定义完了得用 -100%表示全都推出去*/
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>