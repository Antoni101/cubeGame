const gameGrid = document.getElementById("gameGrid");

class gridBlock {
    constructor(gameGrid) {
        this.element = document.createElement("div");
        this.element.classList.add("gridBlock");
        gameGrid.appendChild(this.element);
    }
}

function fillGrid(blocks, rows) {
    const gameGrid = document.getElementById("gameGrid");
    for (i=0; i<blocks; i++) {
        let Block = new gridBlock(gameGrid);
    }
}