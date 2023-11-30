<script>
export default {
    props: {
        arrayTv: Object,
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
            return this.flagsLanguage.includes(this.arrayTv.original_language);
        },
        imgFound() {
            if (this.arrayTv.poster_path != null) {
                return `https://image.tmdb.org/t/p/w185${this.arrayTv.poster_path}`  //chiedere

            } else {
                console.log("non ce");
                return this.getImagePath('img-not-found');
            }
        },

        transformVoteInStar() {
            if (this.arrayTv.vote_average > 2) {
                let vote = (this.arrayTv.vote_average / 2);
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
    <section class="my_TvList">
        <div>
            <img :src="imgFound()" alt="">
        </div>
        <div>{{ arrayTv.name }}</div>
        <div>{{ arrayTv.original_name }}</div>
        <div>
            <div v-if="hasFlag()" class="flags">
                <img :src="getImagePath(arrayTv.original_language)" alt="">
            </div>
            <div v-else class="language">
                {{ arrayTv.original_language }}
            </div>
        </div>
        <div v-for="n in transformVoteInStar()" v-if="transformVoteInStar()">
            <i class="fa-solid fa-star"></i>
        </div>
        <div v-for="n in 5" v-else>
            <i class="fa-solid fa-star" style="color: #77ebf3;"></i>
        </div>
    </section>
    <hr>
</template>


<style scoped lang="scss"></style>