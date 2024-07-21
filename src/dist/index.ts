import { Puzzle } from './puzzle';

const puzzle = new Puzzle(4); // Cria um quebra-cabeça 4x4

document.addEventListener('DOMContentLoaded', () => {
    puzzle.init();
});
