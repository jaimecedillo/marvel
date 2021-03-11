
$(document).ready(function () {
    $('.posters').click(function () {
        $("#character-cards").addClass('hide')
        $("#movie-cards").removeClass('hide')
        getMoviePoster();
    });
});

function getMoviePoster(s) {

    var movieTitle = $('.posters').val();
    (console.log(movieTitle));

    fetch(
        "http://www.omdbapi.com/?s=" +

        movieTitle +

        "&apikey=8f0e2144"
    )
        .then((movieRes) => movieRes.json())
        .then((movieRes) => {



            let array = movieRes.Search.slice(0, 6)

            for (let i = 0; i < array.length; i++) {
                let movie = array[i];
                console.log(movie)
                let movieTil = movie.Title
                let movieYear = movie.Year
                let posterUrl = movie.Poster


                $('#movie-cards').append(`
                
                <div class="flip-card">
                <div class="flip-card-inner">
                <div class="flip-card-front">
                <img src=${posterUrl} alt="${movieTil}" style="width:296px;height:396px;">
                </div>
                <div class="flip-card-back has-background-black">
                <h1
                class="card-header-title level-item is-size-4 has-text-weight-semibold has-text-white has-background-danger-dark">
                ${movieTil}</h1>
                <h1
                class="card-header-title level-item is-size-3 has-text-weight-semibold has-text-white has-background-danger-dark">
                ${movieYear}</h1>
                <div class="card-content level-item">
                <button class="btn-return button content is-warning is-rounded" onClick="window.location.reload();">
                Go Back To Characters</button>
                </div>
                </div>
                </div>
                </div>
                
                
                `)
            }

        });
}



