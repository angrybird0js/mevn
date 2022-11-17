<template>
<p>데이터 표현 {{inValue}}</p>
<input type="text" v-bind:value="inValue" v-on:input="upValue">
<button style="margin:0 5px" @click="setData">데이터 입력</button>
<button @click="getData">데이터 출력</button>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inValue:'',
      temp : ''
      };

    },
  
  methods: {
    upValue: function(e){
        this.inValue = e.target.value;
      },
    setData(){
      if(this.inValue){
        alert(this.inValue),
        this.temp = this.inValue,
        this.inValue = ''
      }else{
        alert('값을 입력해주세요.')
      }
    },
    getData(){
      this.inValue = this.temp
      alert(this.temp)
    }

},
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:left;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
