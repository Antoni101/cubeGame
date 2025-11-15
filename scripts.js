let money;
let removing = false
let addCube = false;
let cubePrice = 25

class cube {
    constructor(value, speed, level) {
        this.value = value;
        this.speed = speed;
        this.level = level
        this.element = document.createElement("div");
        this.element.classList.add("cube");
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

function gainMoney(amount) {
    money += amount;

    let moneyTxt = document.getElementById("money");
    moneyTxt.innerHTML = "Money: $" + money;
}

function loseMoney(amount) {
    money -= amount;

    let moneyTxt = document.getElementById("money");
    moneyTxt.innerHTML = "Money: $" + money;
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

function buyCube() {
    let buyBtn = document.getElementById("buyBtn");
    if (money.value >= cubePrice) {
        addCube = true;
        money.reduce(cubePrice);
        cubePrice = Math.round(cubePrice * 1.5);
        buyBtn.innerHTML = "Buy Cube $" + cubePrice;
    }
}

document.addEventListener("mousemove", (e) => {
    const div = document.getElementById("cubeHold");

    if (addCube == true) {
        div.style.opacity = 1.0
        div.style.left = (e.pageX - 25) + "px";
        div.style.top = (e.pageY - 25) + "px";
    }
    else {
        div.style.opacity = 0.0
    }
});