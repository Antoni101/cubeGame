const gameGrid = document.getElementById("gameGrid");
const gridArray = [];
class gridBlock {
    constructor(gameGrid, index) {
        this.element = document.createElement("div");
        this.element.classList.add("gridBlock");
        this.taken = false;
        this.active;
        this.gridIndex = index;
        gameGrid.appendChild(this.element);

        this.element.addEventListener("click", () => {
            let newCube;
            if (this.taken == false && selectedCube) {
                const div = document.getElementById("cubeHold");
                div.style.opacity = 0.0

                newCube = selectedCube;
                gridArray[this.gridIndex] = newCube;
                this.element.appendChild(newCube.element);

                this.active = setInterval(function () {
                    newCube.element.style.transform = "scale(1.3)";
                    newCube.element.style.opacity = "1.0";
                    setTimeout(function () {
                        newCube.element.style.transform = "scale(1.0)";
                        newCube.element.style.opacity = "0.9";
                    }, 150)
                    money.add(getRandomInt(newCube.value, (newCube.value * 2)));
                }, newCube.speed);

                this.taken = true;
                selectedCube = null;
            }
            else if (removing == true) {
                this.removeCube()
                remove();
            }
            else if (this.taken == true && !selectedCube) {
                selectedCube = gridArray[this.gridIndex];
                this.removeCube()
            }
            else if (this.taken == true && selectedCube) {
                let mergedLevel = selectedCube.level + gridArray[this.gridIndex].level;
                if (mergedLevel == 0) { mergedLevel = 1 }
                else if (mergedLevel > (cubes.length - 1)) { mergedLevel = (cubes.length - 1)};
                let mergedCube = generateCube(mergedLevel)
                console.log("Merged Cube: " + mergedCube);
                selectedCube = mergedCube;
                this.removeCube()
            }
            
        });

    }

    removeCube() {
        this.element.innerHTML = "";
        this.taken = false;
        gridArray[this.gridIndex] = null;
        clearInterval(this.active);
    }
}