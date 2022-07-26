const nav= document.getElementById('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 100) {
        nav.classList.add('nav_black');
    }else {
        nav.classList.remove('nav_black');
    }
});




//Linking homepage to login page

//document.getElementById("signIn").onclick = function(){
  //  location.href ="http://127.0.0.1:5500/pages/home.html"
//}

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
            window.location.href = "../pages/login.html"
        },
        // when the button is click add movie to watch list 

        watchBTN() {
            window.location.href = "../pages/watchlist.html"
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
