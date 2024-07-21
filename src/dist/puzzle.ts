export class Puzzle {
    private size: number;
    private board: number[][];
    private emptyTile: [number, number];

    constructor(size: number) {
        this.size = size;
        this.board = this.createBoard();
        this.emptyTile = [size - 1, size - 1];
    }

    private createBoard(): number[][] {
        const board: number[][] = [];
        let number = 1;
        for (let i = 0; i < this.size; i++) {
            const row: number[] = [];
            for (let j = 0; j < this.size; j++) {
                row.push(number++);
            }
            board.push(row);
        }
        board[this.size - 1][this.size - 1] = 0; // Posição vazia
        return board;
    }

    public init(): void {
        this.render();
    }

    private render(): void {
        const container = document.getElementById('puzzle-container');
        if (!container) return;

        container.innerHTML = '';
        this.board.forEach((row, rowIndex) => {
            row.forEach((tile, colIndex) => {
                const tileElement = document.createElement('div');
                tileElement.className = 'tile';
                if (tile !== 0) {
                    tileElement.textContent = tile.toString();
                }
                tileElement.style.width = `${100 / this.size}%`;
                tileElement.style.height = `${100 / this.size}%`;
                tileElement.addEventListener('click', () => this.moveTile(rowIndex, colIndex));
                container.appendChild(tileElement);
            });
        });
    }

    private moveTile(row: number, col: number): void {
        // Lógica para mover as peças
        const [emptyRow, emptyCol] = this.emptyTile;
        if (
            (Math.abs(emptyRow - row) === 1 && emptyCol === col) ||
            (Math.abs(emptyCol - col) === 1 && emptyRow === row)
        ) {
            this.board[emptyRow][emptyCol] = this.board[row][col];
            this.board[row][col] = 0;
            this.emptyTile = [row, col];
            this.render();
        }
    }
}
