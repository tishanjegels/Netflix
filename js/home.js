// import movie classes 

import { Movie } from "../classes/movie.js";
import { MovieList } from "../classes/movie-list.js";



// Local storage 







// start with Vue

const { createApp } = window.Vue;

const component = {
    data() {
        return {
            MovieList: MovieList,
            userArray: [],
            username: "",
            commingSoon: [],
            watchlist: [],

        }
    },

    methode: {
        logout() {
            localStorage.removeItem();
            window.location.href = "../login.html"
        },
        // when the button is click ad movie to watch list 

        watchBTN() {
            window.location.href = "../watchlist.html"
        }
    },
    computed: {

        // computed property for coming soon movies 
        comingSoon() {
            return this.movieList.filter((movie) => {
                return movie.commingSoon === true;
            })
        },
        availableMovie() {
            return this.movieList.filter((movie) => {
                return movie.commingSoon === false;
            })
        }
    }


}
