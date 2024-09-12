

// Variables to store dice rolls
let player1Roll = 0;
let player2Roll = 0;

// Function to generate a random dice roll (between 1 and 6)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to handle Player 1's dice roll
document.getElementsByClassName("img1")[0].addEventListener("click", function () {
    player1Roll = rollDice();
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice" + player1Roll + ".png");
    checkWinner();
});

// Function to handle Player 2's dice roll
document.getElementsByClassName("img2")[0].addEventListener("click", function () {
    player2Roll = rollDice();
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice" + player2Roll + ".png");
    checkWinner();
});

// Function to check if both players have rolled and display the result
function checkWinner() {
    if (player1Roll !== 0 && player2Roll !== 0) {
        if (player1Roll > player2Roll) {
            document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        } else if (player2Roll > player1Roll) {
            document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        } else {
            document.querySelector("h1").innerHTML = "🚩Draw!🚩";
        }

        // Reset dice rolls for a new game
        player1Roll = 0;
        player2Roll = 0;
    }
}
