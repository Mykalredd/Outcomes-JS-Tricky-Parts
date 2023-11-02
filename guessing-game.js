function guessingGame() {
    // Generate a random number between 0 and 99 and keep it secret.
    const secretNumber = Math.floor(Math.random() * 100);
    let attempts = 0;
    let gameOver = false;
  
    // Return a function that allows the player to make a guess.
    return function guess(number) {
      if (gameOver) {
        return "The game is over, you already won!";
      }
  
      attempts++;
  
      if (number < secretNumber) {
        return `${number} is too low!`;
      } else if (number > secretNumber) {
        return `${number} is too high!`;
      } else {
        gameOver = true;
        
        const attemptsMessage = attempts === 1 ? "1 guess." : `${attempts} guesses.`;
        return `You win! You found ${secretNumber} in ${attemptsMessage}`;
      }
    };
  }
  
  // Create a new game.
  let game = guessingGame();
  
  console.log(game(50)); // "50 is too low!"
  console.log(game(90)); // "90 is too high!"
  console.log(game(70)); // "You win! You found 70 in 3 guesses."
  console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };
