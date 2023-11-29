import {reactive} from "vue";

export const store = reactive ({
    arrayMovies: [],
    arrayTv: [],
    serchText: "",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=089cf88eefeabb434f72174487779c7a&query=Ciao"
});