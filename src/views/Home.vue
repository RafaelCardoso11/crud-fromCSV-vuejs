<template>
  <section class="container-home">
    <div class="container-featured">
      <header class="header-container">
        <h1 class="title-featured">Relação de Operadoras Ativas ANS</h1>
        <div class="container-search">
          <i class="las la-search"></i>
          <input
            type="text"
            class="search-bar"
            placeholder="Pesquisar por relaçôes..."
          />
        </div>
      </header>
      <div class="content-featured">
        
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss">

.container-home {
  background-color: #e5e5e5;
  padding: 20px;
  height: calc(100vh - 80px);
  .container-featured {
    padding: 20px;
    width: 100%;
    min-height: 100%;
    box-shadow: 0px 0px 10px #afacac;
    background-color: #ffffff;
    .content-featured {
      margin: 10px 0px;
      background-color: #ffffff;
      height: 410px;
      border: 3px dotted #e8e5e5;
    }
  }
}
.container-featured {
  .header-container {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-featured {
      font-size: 16rem;
      font-weight: 400;
      color: #5161f1;
    }
  }
  .header-container {
    .container-search {
      display: flex;
      width: 50%;
      margin: 0px 0px 0px 10px;
      align-items: center;
      background: #ffffff;
      box-shadow: 0px 0px 4px rgb(184, 183, 183);
      color: #5161f1;
      padding: 5px;
      i {
        font-size: 21rem;
      }
      .search-bar {
        max-width: 500px;
        padding: 10px;
        font-size: 10rem;
      }
    }
  }
}
</style>
