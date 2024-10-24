# Zen_task-3
# Memory Game

This is a fun and interactive **Memory Game** built using **HTML**, **CSS**, and **JavaScript**. The objective of the game is to match pairs of cards by flipping them over. The game includes a victory celebration with confetti, fireworks, and sound effects when all pairs are matched.

## Features

- Memory game using icons from Font Awesome.
- Confetti and fireworks celebration upon winning.
- Background color transition on victory.
- Sound effects for flipping cards and winning the game.
- Option to restart the game with a "Play Again" button.
- Randomized card positions each time the game starts.
- Simple and responsive design.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling and animations.
- **JavaScript**: Game logic and interactivity.
- **Font Awesome**: Icons used for the card faces.
- **Canvas Confetti**: Confetti animation for victory.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/memory-game.git
    ```

2. Navigate to the project directory:
    ```bash
    cd memory-game
    ```

3. Open `index.html` in your browser to start the game.

4. (Optional) Add sound effects to the game by placing your `.mp3` file in the project directory and updating the file path in the JavaScript code:
    ```javascript
    const winSound = new Audio('path-to-your-sound/win-sound.mp3');
    ```

## Game Rules

1. The game board consists of pairs of hidden cards.
2. Click on a card to reveal it.
3. Match two cards with the same icon to remove them from the board.
4. If the cards do not match, they will be hidden again.
5. The game ends when all pairs are matched, triggering a victory celebration.

## Enhancements

- **Confetti**: Animated confetti falls on the screen when you win.
- **Fireworks**: Firework-like effects are triggered on victory.
- **Play Again**: After winning, a "Play Again" button allows you to restart the game.
- **Sound Effects**: Sound plays on flipping cards and when winning the game.
- **Background Transition**: The background color smoothly transitions during the celebration.

## Future Improvements

- **Timer**: Add a timer to challenge players to complete the game faster.
- **Moves Counter**: Track how many moves the player makes.
- **Difficulty Levels**: Introduce different difficulty levels with more cards.
- **Mobile Responsiveness**: Further optimization for mobile devices.
- **Leaderboard**: Implement a scoring system and leaderboard for tracking high scores.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
