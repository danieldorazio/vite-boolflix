<script>
import { store } from "../store"

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="my_MoviesList">
        <ul>
            <li v-for="(movie, index) in this.store.arrayMovies" :key="movie.id">
                {{ movie.title }}/ {{ movie.original_title }}/ {{ movie.original_language }}/ {{ movie.vote_average }}
            </li>
        </ul>
    </section>
</template>


<style scoped lang="scss"></style>