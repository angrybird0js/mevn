<template>
  <div>
    <h1>
      <div>html {{ htmlString }}</div>
      <p v-html="htmlString"></p>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 글자</p>'
    }
  }
}
</script>
<style>
.text-red {
  color: red;
}
</style>
