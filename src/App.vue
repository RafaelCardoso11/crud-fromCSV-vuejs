<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header";
@Component({
  components: {
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
html {
  font-size: 10%;
  background-color: #eeeeee;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
input {
  outline: none;
  border: 0;
}
input[type="number"] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
button {
  outline: none;
  border: none;
}
@media (max-width: 750px) {
  html {
    font-size: 9%;
  }
}
@media (max-width: 800px) {
  html {
    font-size: 8.5%;
  }
}
@media (max-width: 600px) {
  html {
    font-size: 8%;
  }
}
@media (max-width: 500px) {
  html {
    font-size: 7%;
  }
}
@media (max-width: 300px) {
  html {
    font-size: 5.5%;
  }
}
</style>
