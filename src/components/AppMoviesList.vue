<script>

export default {
    props: {
        arrayMovies: Object,
    },

    data() {
        return {
            flagsLanguage: ["it", "es", "fr", "us", "en"],
        };
    },

    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/flags/${img}.png`, import.meta.url).href;
        },
        hasFlag() {
            return this.flagsLanguage.includes(this.arrayMovies.original_language);
        },
    },
}
</script>

<template>
    <section class="my_MoviesList">
        <div> 
             <img :src="`https://image.tmdb.org/t/p/w185${arrayMovies.poster_path}`" alt="" onerror="this.onerror=null; this.src='https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg';"> <!--..\assets\img\img-not-found.jpg* -->
        </div>
        <div>{{ arrayMovies.title }}</div>
        <div>{{ arrayMovies.original_title }}</div>
        <div>
            <div v-if="hasFlag()" class="flags">
                <img 
                :src="getImagePath(arrayMovies.original_language)" alt="">
            </div>
            <div v-else class="language">
                {{ arrayMovies.original_language }}
            </div>
        </div>
        <div>{{ arrayMovies.vote_average }}</div>
        <hr>
    </section>
</template>


<style scoped lang="scss"></style>