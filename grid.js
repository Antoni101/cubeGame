const gameGrid = document.getElementById("gameGrid");

class gridBlock {
    constructor(gameGrid) {
        this.element = document.createElement("div");
        this.element.classList.add("gridBlock");
        this.taken = false;
        this.active;
        gameGrid.appendChild(this.element);

        this.element.addEventListener("click", () => {
            if (this.taken == false && addCube == true) {
                addCube = false;
                const div = document.getElementById("cubeHold");
                div.style.opacity = 0.0

                let newCube = selectedCube;
                this.element.appendChild(newCube.element);

                this.active = setInterval(function () {
                    newCube.element.style.transform = "scale(1.3)";
                    newCube.element.style.opacity = "1.0";
                    setTimeout(function () {
                        newCube.element.style.transform = "scale(1.0)";
                        newCube.element.style.opacity = "0.6";
                    }, 150)
                    money.add(newCube.value);
                }, newCube.speed);

                this.taken = true;
                selectedCube = null;
            }
            else if (removing == true) {
                this.element.innerHTML = "";
                this.taken = false;
                clearInterval(this.active);
                remove();
            }
            
        });
    }
}