<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
    emit: ["search-name"]
}
</script>

<template>
    <section class="my_searchBar">
        <h1>searchBar</h1>
        <label for="searchBar">searchBar</label>
        <input type="search" id="searchBar" placeholder="cerca nome" v-model.trim="this.store.searchText">
        <button @click.stop="$emit('search-name')">chiama</button>
    </section>
</template>

<style scoped lang=scss></style>