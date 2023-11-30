<script >
import { store } from "./store.js";
import axios from "axios";
import AppSearchBar from "./components/AppSearchBar.vue";
import AppElementList from "./components/AppElementList.vue";


export default {
  components: {
    AppSearchBar,
    AppElementList,
  },

  data() {
    return {
      store
    }
  },

  methods: {
    searchName() {

      const params = {
        api_key: this.store.apiKey,
        query: this.store.searchText,
      };

      axios
        .get(`${this.store.apiUrl}/search/movie`, { params })
        .then((resp) => {
          this.store.arrayMovies = resp.data.results
          console.log(this.store.arrayMovies);
        });

      axios
        .get(`${this.store.apiUrl}/search/tv`, { params })
        .then((resp) => {
          this.store.arrayTv = resp.data.results
          console.log(this.store.arrayTv);
        });
    },
  }
};


</script>

<template>
  <div class="wrapper">
    <header>
      <AppSearchBar @search-name="searchName" />
    </header>

    <main>

      <div class="element">MOVIES
        <button>&LeftArrow;</button>
        <AppElementList v-for="(movie, index) in store.arrayMovies" :key="movie.id" :arrayElement="movie" />
        <button>&rightarrow;</button>
      </div>


      <div class="element"> SERIE TV
        <button>&LeftArrow;</button>
        <AppElementList v-for="(tv, index) in store.arrayTv" :key="tv.id" :arrayElement="tv" />
        <button>&rightarrow;</button>
      </div>

    </main>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
@use "./style/partials/variables" as*;
@use "./style/partials/mixin" as*;
@import "@fortawesome/fontawesome-free/css/all.css";

.wrapper {
  width: 100%;
  height: 100vh;

  // background-color: $bg-color;

  .element {
    @include d-flex  
  }


}
</style>
