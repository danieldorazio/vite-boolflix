<script >
import { store } from "./store.js";
import axios from "axios";
import AppSearchBar from "./components/AppSearchBar.vue";
import AppMoviesList from "./components/AppMoviesList.vue";
import AppTvList from "./components/AppTvList.vue";


export default {
  components: {
    AppSearchBar,
    AppMoviesList,
    AppTvList,
  },

  data() {
    return {
      store
    }
  },

  methods: {
    searchName() {
      axios
        .get(this.store.apiUrlMovie, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchText,

          }
        })
        .then((resp) => {
          this.store.arrayMovies = resp.data.results
          console.log(this.store.arrayMovies);
        })

      axios
        .get(this.store.apiUrlTv, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchText,

          }
        })
        .then((resp) => {
          this.store.arrayTv = resp.data.results
          console.log(this.store.arrayTv);
        })
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
    
    <AppMoviesList v-for="(movie, index) in this.store.arrayMovies" :key="movie.id" 
    :arrayMovies="movie"
    :imgFlags="this.store.imgFlags" />

    <hr>
    <div> SERIE TV</div>
    <hr>

    <AppTvList v-for="(tv, index) in this.store.arrayTv" :key="tv.id" 
    :arrayTv="tv"
    :imgFlags="this.store.imgFlags" />


  </header>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
