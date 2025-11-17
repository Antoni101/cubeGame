let money;
let removing = false
let addCube = false;
let selectedCube;

class cube {
    constructor(value, speed, level) {
        this.value = value;
        this.speed = speed;
        this.level = level
        this.element = document.createElement("div");
        this.element.classList.add("cube");
        this.element.classList.add("cube" + this.level);
    }
}

class Money {
    constructor(startingMoney) {
        this.element = document.createElement("h1");
        this.element.classList.add("money");
        this.element.classList.add("ubuntu");
        this.value = startingMoney;
        this.element.innerHTML = "Money $" + this.value;
        document.body.appendChild(this.element);
    }

    add(amount) {
        this.value += amount
        this.element.innerHTML = "Money $" + this.value;
    }

    reduce(amount) {
        this.value -= amount
        this.element.innerHTML = "Money $" + this.value;
    }
}

function fillGrid(blocks, rows) {
    money = new Money(25)
    const gameGrid = document.getElementById("gameGrid");
    for (i=0; i<blocks; i++) {
        let Block = new gridBlock(gameGrid);
    }
}

function remove() {
    let removeBtn = document.getElementById("remove");
    if (removing == true) {
        removing = false;
        removeBtn.style.border = "4px solid grey";
    }
    else {
        removing = true;
        removeBtn.style.border = "5px solid coral";
    }
    
}

let cubePrice = 25;
function buyCube() {
    let buyBtn = document.getElementById("buyBtn");
    if (money.value >= cubePrice) {
        addCube = true;
        money.reduce(cubePrice);
        cubePrice = Math.round(cubePrice * 1.5);
        buyBtn.innerHTML = "Buy Cube $" + cubePrice;
        selectedCube = generateCube(getRandomInt(1, 100));
    }
}


function getRandomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCube(chance) {
    let value, speed, level;

    if (chance < 60) {               // 60%  — Level 1
        value = getRandomInt(1, 3);
        speed = getRandomInt(2600, 3000);
        level = 1;
    }
    else if (chance < 85) {          // next 25% — Level 2
        value = getRandomInt(5, 10);
        speed = getRandomInt(1500, 2500);
        level = 2;
    }
    else if (chance < 95) {          // next 10% — Level 3
        value = getRandomInt(15, 30);
        speed = getRandomInt(1000, 1300);
        level = 3;
    }
    else if (chance < 99) {          // next 4% — Level 4
        value = getRandomInt(50, 100);
        speed = getRandomInt(700, 900);
        level = 4;
    }
    else {                           // 1% — Level 5
        value = getRandomInt(200, 500);
        speed = getRandomInt(300, 500);
        level = 5;
    }

    console.log(
        `Generated Cube: \nLevel: ${level} | Value: ${value} | Speed: ${speed}`
    );

    return new cube(value, speed, level);
}




document.addEventListener("mousemove", (e) => {
    if (selectedCube) {
        const div = document.getElementById("cubeHold");
        div.classList.remove("cube1");
        div.classList.remove("cube2");
        div.classList.remove("cube3");
        div.classList.remove("cube4");
        div.classList.remove("cube5");
        div.classList.add("cube" + selectedCube.level)
        
        if (addCube == true) {
            div.style.opacity = 1.0
            div.style.left = (e.pageX - 25) + "px";
            div.style.top = (e.pageY - 25) + "px";
        }
        else {
            div.style.opacity = 0.0
        }
    }
});