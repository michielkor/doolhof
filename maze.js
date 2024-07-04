// JavaScript code for maze generation, movement, and game logic

// Define maze constants and variables
const WIDTH = 20;
const HEIGHT = 12;
const maze = [];  // Array to store maze structure
let playerX = 0;  // Player's initial X position
let playerY = 0;  // Player's initial Y position

// Function to generate the maze and populate the HTML
function generateMaze() {
    const mazeDiv = document.getElementById('maze');
    mazeDiv.style.gridTemplateColumns = `repeat(${WIDTH}, 40px)`;

    // Generate maze structure
    for (let y = 0; y < HEIGHT; y++) {
        const row = [];
        for (let x = 0; x < WIDTH; x++) {
            // Example: generate walls randomly
            const isWall = Math.random() < 0.3;  // 30% chance of wall
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            if (isWall) {
                cellDiv.classList.add('wall');
            }
            mazeDiv.appendChild(cellDiv);
            row.push(isWall ? '#' : ' ');  // Store '#' for walls, ' ' for paths
        }
        maze.push(row);
    }
}

// Function to move player within the maze
function movePlayer(direction) {
    const newX = playerX + direction.x;
    const newY = playerY + direction.y;
    if (newX >= 0 && newX < WIDTH && newY >= 0 && newY < HEIGHT && !maze[newY][newX]) {
        // Move player in the maze and update the display
        // Example: Update player position and maze display
        playerX = newX;
        playerY = newY;
        updateMazeDisplay();
    }
}

// Function to update the maze display based on maze and player position
function updateMazeDisplay() {
    const mazeDiv = document.getElementById('maze');
    const cells = mazeDiv.getElementsByClassName('cell');
    let index = 0;
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            const cellDiv = cells[index];
            if (x === playerX && y === playerY) {
                cellDiv.textContent = 'P';  // Example: Display player as 'P'
            } else {
                cellDiv.textContent = maze[y][x];
            }
            index++;
        }
    }
}

// Example: Generate maze on page load
generateMaze();
updateMazeDisplay();

// Example: Handle keyboard input for player movement
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer({ x: 0, y: -1 });
            break;
        case 'ArrowDown':
            movePlayer({ x: 0, y: 1 });
            break;
        case 'ArrowLeft':
            movePlayer({ x: -1, y: 0 });
            break;
        case 'ArrowRight':
            movePlayer({ x: 1, y: 0 });
            break;
        default:
            break;
    }
});
