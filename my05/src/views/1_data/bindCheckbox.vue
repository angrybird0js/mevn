<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="inHtml"
        value="HTML"
        v-model="chkData"
      />
      <label for="inHtml">HTML</label>
      <input type="checkbox" name="" id="inCss" value="CSS" v-model="chkData" />
      <label for="inCss">CSS</label>
      <input
        type="checkbox"
        name=""
        id="inJavascript"
        value="JS"
        v-model="chkData"
      />
      <label for="inJavascript">Javascript</label>
    </div>
    <div>선택한 내용은 {{ chkData }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chkData: [] // 배열로 반드시 해야함 어쩔 수 없음 ㅎ
    }
  },
  method: {},
  components: {}
}
</script>
<style></style>
