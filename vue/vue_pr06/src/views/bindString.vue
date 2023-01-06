<template>
  <h1>Hello {{ userName }}</h1>
  <div>{{ arr }}</div>
  <div>{{ obj }}</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: '홍길동',
      arr: [],
      obj: {}
    }
  },
  methods: {}
}
</script>

<style></style>
