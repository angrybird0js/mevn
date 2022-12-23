<template>
  <div class="black-bg" v-if="모달창" @click="모달창 = false">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>{{ 원룸들[0] }}</p>
    </div>
  </div>

  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>
  <div v-for="(e, j) in products" :key="j">
    <img :src="'./room' + j + '.jpg'" alt="안나옴" class="imgs" />
    <h4 @click="모달창 = true">{{ 원룸들[j].title }}</h4>
    <p>{{ 원룸들[j].price }} 만원</p>
    <button @click="inc(j)">추천</button><span> 추천수 : {{ 추천수[j] }}</span>
  </div>
</template>

<script>
import data from './assets/data.js'
export default {
  name: 'App',
  data() {
    return {
      원룸들: data,
      모달창: false,
      추천수: [0, 0, 0],
      메뉴들: ['Home', 'Shop', 'About'],
      products: ['역삼동원룸', '천호동원룸', '마포구원룸']
    }
  },
  methods: {
    inc(i) {
      this.추천수[i]++
    }
  },
  components: {}
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
  text-decoration-line: none;
}
.imgs {
  width: 70%;
  margin-top: 40px;
}
</style>
