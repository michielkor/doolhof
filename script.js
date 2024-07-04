document.addEventListener('DOMContentLoaded', function() {
    const mazeContainer = document.getElementById('maze');
    const numRows = 10; // Number of rows in maze grid
    const numCols = 10; // Number of columns in maze grid
    const maze = generateMaze(numRows, numCols); // Generate maze

    // Initialize player position
    let playerPosition = { row: 0, col: 0 };
    renderMaze(); // Initial render of maze

    // Event listener for keyboard input
    document.addEventListener('keydown', function(event) {
        movePlayer(event.key); // Handle player movement
    });

    // Function to generate maze array
    function generateMaze(rows, cols) {
        let maze = [];
        for (let row = 0; row < rows; row++) {
            let mazeRow = [];
            for (let col = 0; col < cols; col++) {
                mazeRow.push(0); // 0 represents path, 1 represents wall (not used in this simple example)
            }
            maze.push(mazeRow);
        }
        return maze;
    }

    // Function to render maze
    function renderMaze() {
        mazeContainer.innerHTML = ''; // Clear previous maze
        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                if (row === playerPosition.row && col === playerPosition.col) {
                    cell.classList.add('player'); // Add player class to player's position
                }
                mazeContainer.appendChild(cell);
            }
        }
    }

    // Function to move player
    function movePlayer(key) {
        let newRow = playerPosition.row;
        let newCol = playerPosition.col;

        // Handle arrow key movements
        switch(key) {
            case 'ArrowUp':
                newRow--;
                break;
            case 'ArrowDown':
                newRow++;
                break;
            case 'ArrowLeft':
                newCol--;
                break;
            case 'ArrowRight':
                newCol++;
                break;
            default:
                return;
        }

        // Check if new position is within bounds
        if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
            // Update player position
            playerPosition.row = newRow;
            playerPosition.col = newCol;
            // Render updated maze
            renderMaze();
        }
    }
});
