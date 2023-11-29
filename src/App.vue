<script >
  import { store } from "./store.js"
  import axios from "axios";
  import AppSearchBar from "./components/AppSearchBar.vue"
  import AppMoviesList from "./components/AppMoviesList.vue"
  

  export default {
    components: {
      AppSearchBar,
      AppMoviesList,
    },

    data() {
      return {
        store
      }
    },

    methods: {
      searchName () {
        axios
          .get(this.store.apiUrl, {
            params: {
              api_key: this.store.apiKey,
              query: this.store.searchText,
              
            }
          })
          .then((resp) => {
            this.store.arrayMovies = resp.data.results
            console.log(this.store.arrayMovies);
            console.log(this.store.searchText);
          })
      }
    }
  };


</script>

<template>
  <header>
    <AppSearchBar @search-name="searchName"/>
    <div>{{ this.store.searchText }}</div>
    <AppMoviesList />
  </header>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

</style>
