$(document).ready(function() { 
    var bankroll = 100

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function clearForm(){
      $('#betting')[0].reset();
    }

    winningNumber = (randomNumber(1, 50));

    //the button is clicked and the bet is made
    $("#betting").on('submit', function(event) {
        event.preventDefault();
        var bet = $('#bet').val();
        var guess = $('#guess').val();
        console.log(bet, guess);
        //compare the guess to the winningNumber and win or lose bet
        if (bankroll > 0) {
        if (guess == winningNumber) {
            $('#win_or_lose').text("Your guess was correct! You won the bet!");
            bankroll += bet;
            $('#dollars_in_bank').text("you have " + bankroll + " dollars left to bet.");
        } else {
            $('#win_or_lose').text("Your guess was wrong, you lost the bet.");
            bankroll -= bet;
            $('#dollars_in_bank').text("you have " + bankroll + " dollars left to bet.");
          };
        };
        clearForm();
    });
});