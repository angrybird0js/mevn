<template>
  <div>
    <select name="" id="" v-model="sel_data">
      <option value="051">부산</option>
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="055">창원</option>
      <option value="053">대구</option>
    </select>
    <span>{{ sel_data }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sel_data: '고르세요'
    }
  },
  method: {},
  components: {}
}
</script>
<style></style>
