<template>
  <div>
    <button
      @click="page = p"
      v-for="p in pages"
      :key="p"
      :class="{ active: page === p }"
    >
      {{ p }}
    </button>
    <div v-for="(p, i) in pages" :key="i">
      <div v-if="p === page">{{ p }}</div>
      <img
        v-if="p === page"
        :src="'./sample' + (i + 1) + '.jpg'"
        alt=""
        srcset=""
      />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },

  methods: {},
  components: {}
}
</script>

<style scoped>
button {
  scale: 200%;
  background: white;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background: yellow;
}
button.active {
  background: blue;
  color: white;
}
span {
  font-size: 2em;
  color: gray;
}
img {
  width: 50%;
  height: 50%;
}
</style>
