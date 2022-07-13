<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "贺某爆杀jiangly",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //简单声明接收
  props: ["name", "sex", "age"],
  //接收的同时对数据类型进行限制
  /*props: {
    name: String,
    age: Number,
    sex: String,
  },*/
  /* props: {
    name: {
      type: String, //name类型是字符串
      required: true, //名字是必要的 必须传的
    },
    age: {
      type: Number,
      default: 99, //不传的时候年龄的默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },*/
};
</script>

