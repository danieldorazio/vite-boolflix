<script>

export default {
    props: {
        arrayMovies: Object,
    },

    data() {
        return {
            flagsLanguage: ["it", "es", "fr", "us", "en"],
            vote_average_star: ""
        };
    },

    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },

        hasFlag() {
            return this.flagsLanguage.includes(this.arrayMovies.original_language);
        },

        imgFound() {
            if (this.arrayMovies.poster_path != null) {
                return `https://image.tmdb.org/t/p/w185${this.arrayMovies.poster_path}`  //chiedere

            } else {
                console.log("non ce");
                return this.getImagePath('img-not-found');
            }
        },
        
        transformVoteInStar() {
            if (this.arrayMovies.vote_average > 2) {
                let vote = (this.arrayMovies.vote_average / 2);
                vote = Math.floor(vote)
                return vote
            } else {
                return 0;
            }
        },
    },
}
</script>

<template>
    <section class="my_MoviesList">
        <div>
            <img :src="imgFound()" alt="">
        </div>
        <div>{{ arrayMovies.title }}</div>
        <div>{{ arrayMovies.original_title }}</div>
        <div>
            <div v-if="hasFlag()" class="flags">
                <img :src="getImagePath(arrayMovies.original_language)" alt="">
            </div>
            <div v-else class="language">
                {{ arrayMovies.original_language }}
            </div>
        </div>
        <div v-for="n in transformVoteInStar()" v-if="transformVoteInStar()">
            <i class="fa-solid fa-star"></i>
        </div>
        <div v-for="n in 5" v-else>
            <i class="fa-solid fa-star" style="color: #77ebf3;"></i>
        </div>
        <hr>
    </section>
</template>


<style scoped lang="scss"></style>