<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import axios from 'axios'
const data = reactive([
  // '메모 1 내용',
  // '메모 2 내용',
  // '메모 3 내용',
  // '메모 4 내용',
  // '메모 5 내용'
])
const add = () => {
  data.push('추가될 메모 내용')
}
axios.get('http://localhost:3000/memos').then((res) => {
  console.log(res)
})

// export default {
//   setup() {
//     const data = [
//       '메모 1 내용',
//       '메모 2 내용',
//       '메모 3 내용',
//       '메모 4 내용',
//       '메모 5 내용'
//     ]
//     const add = () => {
//       data.push('추가될 메모 내용')
//     }
//     return { data, add }
//   }
// }
</script>
<style scoped>
.memo ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  padding: 15px;
  margin: 5px;
  border: 1px solid #ddd;
}
.act {
  text-align: right;
  padding: 10px 10px 5px 5px;
}
</style>
