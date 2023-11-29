<script>

export default {
    props: {
        arrayMovies: Object,
        imgFlags: Object,
    },

    // methods: {
    //     getImagePath: function (img) {
    //         return new URL (`./assets/img/${img}`, import.meta.url).href;
    //     }
    // },
}
</script>

<template>
    <section class="my_MoviesList">
        <div>{{ arrayMovies.title }}</div>
        <div>{{ arrayMovies.original_title }}</div>
        <div>
            <div class="language">
                {{ arrayMovies.original_language }}
            </div>
            <div class="flags">
                {{ imgFlags }}
                <!-- <img :src="getImagePath(it.jpg)" alt=""> -->
            </div>
        </div>
        <div>{{ arrayMovies.vote_average }}</div>
        <hr>
    </section>
</template>


<style scoped lang="scss"></style>