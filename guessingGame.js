let random = Math.floor(Math.random() * 21);
let score = 5;
// let concat = ;
function guess() {

    console.log(random)
    let userGuess = document.getElementById("enter").value;
    let show = document.getElementById("show");
    let showScore = document.getElementById("showScore");

    if (score != 1) {
        if (userGuess == random) {
            show.innerHTML = " Hurray! you guessed it right! 🙌🎉"
            showScore.innerHTML = "score"+" " +score
        }
        else if (userGuess > random) {
            show.innerHTML = "your guess is too high! 👆"
            score -= 1
            showScore.innerHTML = "score"+" " +score
        }
        else if (userGuess < random) {
            show.innerHTML = "your guess is too low! 👇"
            score -= 1
            showScore.innerHTML = "score"+" " +score
        }
                
        else {
            show.innerHTML = "invalid guess!"
        }
    }
    else {
        show.innerHTML = " "
        showScore.innerHTML = "oh no you lose 😩"
        document.getElementById("con").innerHTML = "the random number is"+" " +random;
    }
}
