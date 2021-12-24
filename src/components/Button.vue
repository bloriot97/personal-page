<template>
  <a :href="link">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    'text': String,
    'link': String,
  }
}
</script>

<style scoped>
  a {
    display: inline-block;
    background-color: #e74c3c;
    padding: 16px 24px;
    border: none;
    border-radius: 32px;
    color: white;
    text-decoration: none;
  }
</style>
