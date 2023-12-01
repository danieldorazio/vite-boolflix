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
                <button @click.stop="$emit('search-name')"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </section>
</template>

<style scoped lang=scss>
@use "../style/partials/mixin" as*;
@use "../style/partials/variables" as*;

.my_searchBar {
    height: $heigth-header;
    background-color:$bg-color ;
    @include d-flex (center, space-between, wrap, 0px);

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
        button {
            height: 27px;
            width: 27px;
            color: red;
            background-color: $bg-color;
            border: none;
            cursor: pointer;
            
        }
    }
}
</style>