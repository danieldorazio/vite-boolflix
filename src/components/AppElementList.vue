<script>

export default {
    props: {
        arrayElement: Object,
    },

    data() {
        return {
            flagsLanguage: ["it", "es", "fr", "us", "en"],
        };
    },

    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },

        hasFlag() {
            return this.flagsLanguage.includes(this.arrayElement.original_language);
        },

        imgFound() {
            if (this.arrayElement.poster_path != null) {
                return `https://image.tmdb.org/t/p/w342${this.arrayElement.poster_path}`

            } else {
                return this.getImagePath('img-not-found');
            }
        },

        transformVoteInStar() {
            if (this.arrayElement.vote_average > 2) {
                let vote = (this.arrayElement.vote_average / 2);
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
        <div class="container">
            <div>
                <img :src="imgFound()" alt="">
            </div>
            <div>{{ arrayElement.title || arrayElement.name }}</div>
            <div>{{ arrayElement.original_title || arrayElement.original_name }}</div>
            <div>
                <div v-if="hasFlag()" class="flags">
                    <img :src="getImagePath(arrayElement.original_language)" alt="">
                </div>
                <div v-else class="language">
                    {{ arrayElement.original_language }}
                </div>
            </div>
            <div>
                <div v-for="n in transformVoteInStar()" v-if="transformVoteInStar()">
                    <i class="fa-solid fa-star"></i>
                </div>
                <div v-for="n in 5" v-else>
                    <i class="fa-solid fa-star" style="color: #77ebf3;"></i>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use "../style/partials/mixin" as*;
@use "../style/partials/variables" as*;
</style>