let money;
let removing = false
let selectedCube;
let cubePrice = 0;

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

function closeScreen(screen) {
    screen.style.display = "None";
}

function openScreen(screen) {
    screen.style.display = "Block";
}

function fillGrid(blocks, rows) {
    money = new Money(0)
    const gameGrid = document.getElementById("gameGrid");
    for (i=0; i<blocks; i++) {
        let Block = new gridBlock(gameGrid, i);
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


function buyCube() {
    let buyBtn = document.getElementById("buyBtn");
    if (money.value >= cubePrice || cubePrice == 0) {
        money.reduce(cubePrice);
        cubePrice += 20;
        buyBtn.innerHTML = "Buy Cube $" + cubePrice;

        let chance = getRandomInt(1, 100);

        let level;
        if (chance < 60) {   level = 0; }               
        else if (chance < 85) { level = 1; }     
        else if (chance < 95) { level = 2; }            
        else if (chance < 99) { level = 3; }                
        else { level = 4; }     

        selectedCube = generateCube(level)
    }
}

const cubes = [
    {level: 0, speed: 1500, value: 1},
    {level: 1, speed: 1200, value: 3},
    {level: 2, speed: 1000, value: 7},
    {level: 3, speed: 800, value: 10},
    {level: 4, speed: 700, value: 15},
    {level: 5, speed: 500, value: 25},
    {level: 6, speed: 300, value: 50},
]

function getRandomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCube(level) {                  
    return new cube(cubes[level].value, cubes[level].speed, level);
}

document.addEventListener("mousemove", (e) => {
    const div = document.getElementById("cubeHold");
    if (selectedCube) {
        div.classList.remove("cube0");
        div.classList.remove("cube1");
        div.classList.remove("cube2");
        div.classList.remove("cube3");
        div.classList.remove("cube4");
        div.classList.remove("cube5");
        div.classList.remove("cube6");
        div.classList.add("cube" + selectedCube.level)
        
        div.style.opacity = 1.0
        div.style.left = (e.pageX - 25) + "px";
        div.style.top = (e.pageY - 25) + "px";
        
    }
    else {
        div.style.opacity = 0.0
    }
});