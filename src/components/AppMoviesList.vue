<script>
// import { store } from "../store"

export default {
    props: {
        arrayMovies: Object,
    },

    // data() {
    //     return {
    //         store,
    //     }
    // }
}
</script>

<template>
    <section class="my_MoviesList">
            <!-- <div v-for="(movie, index) in arrayMovies" :key="movie.id">
                {{ movie.title }}/ {{ movie.original_title }}/ {{ movie.original_language }}/ {{ movie.vote_average }}
            </div> -->
            <!-- <div v-for="(movie, index) in arrayMovies" :key="movie.id">
                {{ movie.title }}/ {{ movie.original_title }}/ {{ movie.original_language }}/ {{ movie.vote_average }}
            </div> -->
        
            <div>{{arrayMovies.title}}</div> 
            <div>{{arrayMovies.original_title}}</div> 
            <div>{{arrayMovies.original_language}}</div> 
            <div>{{arrayMovies.vote_average}}</div> 
            <hr>
    </section>
</template>


<style scoped lang="scss"></style>