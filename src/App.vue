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
  <header>
    <AppSearchBar @search-name="searchName" />

    <hr>
    <div>MOVIES</div>
    <hr>

    <AppElementList v-for="(movie, index) in store.arrayMovies" :key="movie.id" :arrayElement="movie" />

    <hr>
    <div> SERIE TV</div>
    <hr>

    <AppElementList v-for="(tv, index) in store.arrayTv" :key="tv.id" :arrayElement="tv" />


  </header>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
