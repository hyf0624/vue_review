<template>
  <div>
    <Company></Company>
    <Member></Member>
  </div>
</template>

<script>
import Company from "./Company.vue";
import Member from "./Member.vue";
export default {
  name: "App",
  comments: {
    Company,
    Member,
  },
};
</script>
