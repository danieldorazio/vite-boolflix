import {reactive} from "vue";

export const store = reactive ({
    arrayMovies: [],
    arrayTv: [],
    searchText: "",
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv",
    apiKey:"089cf88eefeabb434f72174487779c7a",
    imgFlags: {
        en: "en.jpg",
        es: "es.jpg",
        it: "it.jpg"
    }
});