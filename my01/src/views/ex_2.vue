<template>
  <div>
    <h1>2. 디렉티브 v-for 와 응용</h1>
    <h3>datas = {{ datas }}</h3>
    <button @click="add">추가</button>
    <button @click="sub">삭제</button>
    <ul>
      <li v-for="data in datas" :key="data">{{ data }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },
  methods: {
    add: function () {
      this.datas.push(this.datas.length + 1)
    },
    sub: function () {
      this.datas.pop()
    }
  },
  components: {}
}
</script>
<style scoped>
ul {
  text-align: left;
  margin-left: 40%;
}
</style>
