"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puzzle_1 = require("./puzzle");
const puzzle = new puzzle_1.Puzzle(4); // Cria um quebra-cabeça 4x4
document.addEventListener('DOMContentLoaded', () => {
    puzzle.init();
});
