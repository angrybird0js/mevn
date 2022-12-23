<template>
  <nav>
    <router-link to="/">Vue home</router-link> |
    <router-link to="/ex_1">예제1</router-link> |
    <router-link to="/ex_2">예제2</router-link> |
    <router-link to="/ex_3">예제3</router-link> |
    <router-link to="/ex_4">예제4</router-link> |
    <router-link to="/ex_5">예제5</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
