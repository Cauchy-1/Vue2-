<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number + 1</button>
    <button @click="sendStudentName">点我把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student组件的实例对象(vc)</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      //触发student组件实例对象上的atguigu事件
      this.$emit("atguigu", this.name);
      //  this.$emit("demo");
      // this.$emit("click");
    },
    //解绑atguigu事件
    unbind() {
      this.$off("atguigu");
      //this.$off(["atguigu", "demo"]);
      // this.$off(); //解绑所有的自定义事件
    },
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
    death() {
      this.$destroy(); //销毁了当前的Student组件实例 销毁后所有Student实例的自定义事件全都不奏效了
    },
  },
};
</script>

<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>