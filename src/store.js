import {reactive} from "vue";

export const store = reactive ({
    arrayMovies: [],
    arrayTv: [],
    searchText: "",
    apiUrl: "https://api.themoviedb.org/3",
    apiKey:"089cf88eefeabb434f72174487779c7a",
});