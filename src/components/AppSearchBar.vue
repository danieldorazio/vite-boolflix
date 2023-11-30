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
        <div class="container">
            <h1>BOOLFLIX</h1>
            <div class="search">
                <label for="searchBar">searchBar</label>
                <input @keyup.enter="$emit('search-name')" type="search" id="searchBar" placeholder="cerca nome" v-model.trim="this.store.searchText">
            </div>
        </div>
    </section>
</template>

<style scoped lang=scss>
@use "../style/partials/mixin" as*;
@use "../style/partials/variables" as*;

.my_searchBar {
    height: 70px;
    background-color:$bg-color ;
    @include d-flex;

    // TITOLO
    h1 {
        color: red;
        font-size: 2rem;
    }

    // SEARCHBAR 
    .search {
        label {
            display: none;
        }
        input {
            padding: .2rem;
        }
    }
}
</style>