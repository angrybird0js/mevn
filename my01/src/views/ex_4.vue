<template>
  <div>
    <h1>4.데이터 양방향 바인딩</h1>
    <h2>v-model을 사용하여 양방향을 구현한다</h2>
    <span>v-model :</span><input type="text" v-model="inData" />
    <p>{{ inData }}</p>
    <button @click="inData = getOut">꺼내오기:{{ inData }}</button>
    <br />
    <hr />
    <h1>5. 데이터 단방향 바인딩</h1>
    <h2>v-bind와 v-on을 사용하여 단방향(2가지 = 양방향) 을 구현한다</h2>
    <h3>{{ inValue }}</h3>
    <input type="text" v-bind:value="inValue" v-on:input="upValue" />
    <!-- v-on:click => @click 로 대체가능 -->
    <button style="margin: 0 5px" @click="setData">데이터 입력</button>
    <button @click="getData">데이터 출력</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getOut: '기본값입니다.',
      inData: '',
      inValue: '',
      temp: ''
    }
  },
  methods: {
    upValue: function (e) {
      this.inValue = e.target.value
    },
    setData() {
      if (this.inValue) {
        alert('v-bind 된 값' + this.inValue + '를 입력함')
        this.temp = this.inValue
        this.inValue = ''
      } else {
        alert('값을 입력해주세요.')
      }
    },
    getData() {
      this.inValue = this.temp
      alert('v-on으로 저장 된 값' + this.temp + '를 꺼내옴')
    }
  },
  components: {}
}
</script>
<style></style>
