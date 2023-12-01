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
    },

    computed: {
        showOriginalTitle() {
            if (this.arrayElement.title === this.arrayElement.original_title && this.arrayElement.name === this.arrayElement.original_name) {
                return "d-none"
            }
        },

        imgFound() {
            if (this.arrayElement.poster_path != null) {
                return `https://image.tmdb.org/t/p/w342${this.arrayElement.poster_path}`

            } else {
                return this.getImagePath('img-not-found');
            }
        },

        transformVoteInStar() {
            return Math.ceil(this.arrayElement.vote_average / 2);
        },
    }
}
</script>

<template>
    <section class="my_MoviesList">
        <div class="container movie">
            <div class="movie-poster">
                <img :src="imgFound" alt="">
            </div>
            <div class="movie-information">
                <div class="mb-1"> <span>Titolo:</span> {{ arrayElement.title || arrayElement.name }}</div>
                <div class="mb-1" :class="showOriginalTitle"> <span>Titolo Originale:</span> {{ arrayElement.original_title || arrayElement.original_name }}</div>
                <div class="mb-1">
                    <div  class="flags" v-if="hasFlag()">
                        <span>Lingua:</span>
                        <img :src="getImagePath(arrayElement.original_language)" alt="">
                    </div>
                    <div v-else class="language">
                        <span>Lingua:</span>
                        {{ arrayElement.original_language }}
                    </div>
                </div>
                <div class="vote mb-1">
                    <span>Voto:</span>
                    <div v-for="n in transformVoteInStar">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-for="n in (5 - transformVoteInStar)">
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@use "../style/partials/mixin" as*;
@use "../style/partials/variables" as*;

.container.movie {

    .movie-poster {
        width: $width-img-movie-poste;
        height: $heigth-img-movie-poste;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .movie-information {
        display: none;
        width: $width-img-movie-poste;
        height: $heigth-img-movie-poste;
        width: $width-img-movie-poste;
        color: white;
        background-color: $bg-color;

    }

    &:hover .movie-poster {
        display: none;
    }

    &:hover .movie-information {
        display: block;
        
        .flags {
            @include d-flex (center, start, nowrap, 10px)
        }

        .vote {
            @include d-flex (center, space-between, nowrap, 2px)
        }

    }

}
</style>