<template>
  <div>
    <p>양방향 입출력 예제</p>
    <input type="text" v-model="userId" />
    <button @click="myfn">전송</button>
    <button @click="setdata">전송</button>
    <p>계산기 예제</p>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: 'sample',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    myfn() {
      console.log(this.userId)
    },
    setdata() {
      this.userId = '2way connected'
    }
  }
  // components: {}
}
</script>
<style></style>
