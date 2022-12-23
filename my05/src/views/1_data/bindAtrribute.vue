<template>
  <div>
    <input type="text" :value="item" readonly />
    <!-- text를 읽기위주로 하여 값손 못댐 -->
    <br />
    <img :src="링크" alt="" srcset="" style="text-align: center" />
    <br />
    <input type="text" v-model="data" />
    <button :disabled="data === ''">전송</button>
    <!-- 참이면 동작 / 아니면 버튼 비활성화 -->
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: 'name',
      링크: 'http://www.sputnik.kr/article_img/202101/article_1611624282.jpg',
      data: ''
    }
  },
  method: {},
  components: {}
}
</script>
<style></style>
