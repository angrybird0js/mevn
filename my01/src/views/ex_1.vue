<template>
  <div>
    <h1>1-1. v-if와 v-show 의 차이</h1>
    <h1 v-if="disp">제가 보이나요?</h1>
    <h1 v-show="disp">제가 보이나요?</h1>
    <button @click="disp = !disp">보이게할까요</button>
    <br />
    <br />
    <hr />
    <h1>1-2. v-on (@) 간단사용법</h1>
    <button v-on:click="alert('클릭입니다.')">클릭</button>
    <button @dblclick="alert('두번클릭요~')">더블클릭</button>
    <br />
    <br />
    <hr />
    <h1>1-3. v-on 펑션을 누르고 땔 때 반영/ 엔터칠 때 반영</h1>
    누르고 땔 때:
    <input
      type="text"
      v-model="inData"
      v-on:keyup="alert(inData + '적고 손땜요~')"
    /><br />
    엔터를 입력할 때:<input
      type="text"
      v-model="inData"
      v-on:keyup.enter="alert(inData + '적고 엔터침요~')"
    />
    <p>{{ inData }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      inData: '',
      disp: false
    }
  },
  methods: {
    // ch: function () { 2번째 함수를 사용한 방법
    //   this.disp = !this.disp // 1개 짜리를 먼저 연습해 볼것
    // }
    alert: function (m) {
      alert(m)
    }
  },
  components: {}
}
</script>
<style></style>
