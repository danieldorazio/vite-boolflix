<script>

export default {
    props: {
        arrayTv: Object,
        imgFlags: Object,
    },
}
</script>

<template>
    <section class="my_TvList">
        <div>{{ arrayTv.name }}</div>
        <div>{{ arrayTv.original_name }}</div>
        <div>
            <div class="language">
                {{ arrayTv.original_language }}
            </div>
            <div class="flags">
                {{ imgFlags }}
            </div>
        </div>
        <div>{{ arrayTv.vote_average }}</div>
    </section>
    <hr>
</template>


<style scoped lang="scss"></style>