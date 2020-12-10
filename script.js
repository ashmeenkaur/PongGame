let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let boardDimension = board.getBoundingClientRect();
let x = true;
let y = true;

//on user input
let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");

document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key == "w") {
        movePaddle(leftPaddle, -35);
    } else if (e.key == "s") {
        movePaddle(leftPaddle, 35);
    } else if (e.key == "ArrowUp") {
        movePaddle(rightPaddle, -35);
    } else if (e.key == "ArrowDown") {
        movePaddle(rightPaddle, 35);
    }
});

function movePaddle(currPaddle, change) {
    // console.log(change);
    let currPaddleDimension = currPaddle.getBoundingClientRect();
    if(currPaddleDimension.top+change>=boardDimension.top && currPaddleDimension.bottom+change<=boardDimension.bottom){
        currPaddle.style.top = currPaddleDimension.top+change + "px";
    }
}

function moveBall() {
    let ballDimension = ball.getBoundingClientRect();

    //check if ball is in horizontal dimensions of board
    if (ballDimension.left <= boardDimension.left || ballDimension.right >= boardDimension.right) {
        x = !x;
    }
    //check if ball is in vertical dimensions of board
    if (ballDimension.top <= boardDimension.top || ballDimension.bottom >= boardDimension.bottom) {
        y = !y;
    }
    ball.style.top = (y == true) ? ballDimension.top + 4 + "px" : ballDimension.top - 4 + "px";
    ball.style.left = (x == true) ? ballDimension.left + 4 + "px" : ballDimension.left - 4 + "px";
    requestAnimationFrame(moveBall);
}
requestAnimationFrame(moveBall);