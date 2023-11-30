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
            return new URL(`../assets/flags/${img}.png`, import.meta.url).href;
        },
        hasFlag() {
            return this.flagsLanguage.includes(this.arrayTv.original_language);
        },
    },
}
</script>

<template>
    <section class="my_TvList">
        <div>{{ arrayTv.name }}</div>
        <div>{{ arrayTv.original_name }}</div>
        <div>
            <div v-if="hasFlag()" class="flags">
                <img 
                :src="getImagePath(arrayTv.original_language)" alt="">
            </div>
            <div v-else class="language">
                {{ arrayTv.original_language }}
            </div> 
        </div>
        <div>{{ arrayTv.vote_average }}</div>
    </section>
    <hr>
</template>


<style scoped lang="scss"></style>