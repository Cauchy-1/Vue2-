<template>
  <div>
    <Student name="李四" sex="女" :age="18" />
    <hr />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",

  components: {
    Student,
  },
};
</script>

