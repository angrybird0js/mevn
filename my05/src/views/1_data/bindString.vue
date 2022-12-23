<template>
  <div>
    <h1>
      Hello {{ userName }}
      <p></p>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'JohnDoe!',
      message: '',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
