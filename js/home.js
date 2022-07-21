// import movie classes 

import { Movie } from "netflix/classes/movie.js";
import { MovieList } from "netflix/classes/movie-list.js";



// Local storage 





// start with Vue

const {createApp} = window.Vue;

const component = {
    data() {
        return {
            MovieList: MovieList,
            userArray: [],
            username: "",
            comingSoon: [],
            watchlist: [],

        }
    },

    methode: {
        logout() {
            localStorage.removeItem();
            window.location.href = "../login.html"
        },
        // wehn the button is click ad movie to watch list 

        watchBTN() {
            window.location.href = "../watchlist.html"
        }
    }


}
