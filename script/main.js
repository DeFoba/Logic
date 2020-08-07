let canvas = document.getElementById('canvas');
let checkOut    = 7;
let checkCountX = 1;
let checkCountY = 1;

for (let i = 0; i < 21; i++) {
    let gameBox = document.createElement('div');
    canvas.append(gameBox);
    gameBox.className = 'game-box game-box-grey';
    if (i + 1 <= checkOut) {
        gameBox.id = `${checkCountX++};${checkCountY}`;
    } else {
        checkOut += 7;
        checkCountY++;
        checkCountX = 1;
        gameBox.id = `${checkCountX++};${checkCountY}`;
    }
}

function checkWin() {
    let allGameBoxes = document.getElementsByClassName('game-box');
    for (key of allGameBoxes) {
        if (key.className == 'game-box game-box-grey') return;
    }
    alert('You won!');
    location.reload();
}

function changeGameBoxColor(target) {
    if (target.className.split(' ')[1] == 'game-box-grey') {
        target.className = 'game-box game-box-red';
    } else {
        target.className = 'game-box game-box-grey';
    }
}

document.addEventListener('click', ({target}) => {
    if (target.className.split(' ')[0] == 'game-box') {
        changeGameBoxColor(target);
        let gameBoxId = target.id.split(';');
        try { changeGameBoxColor(document.getElementById(`${Number(gameBoxId[0]) - 1};${Number(gameBoxId[1])}`)); } catch { };
        try { changeGameBoxColor(document.getElementById(`${Number(gameBoxId[0]) + 1};${Number(gameBoxId[1])}`)); } catch { };
        try { changeGameBoxColor(document.getElementById(`${Number(gameBoxId[0])};${Number(gameBoxId[1]) - 1}`)); } catch { };
        try { changeGameBoxColor(document.getElementById(`${Number(gameBoxId[0])};${Number(gameBoxId[1]) + 1}`)); } catch { };
        checkWin();
    }
});