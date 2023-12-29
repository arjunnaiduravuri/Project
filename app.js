// let boxes = document.querySelectorAll('.box')
// let resetbtn = document.querySelector('#reset')

// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");


// let turn0 = true
// let count = 0

// const patterns = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// // const resetGame = () => {
// //     turn0 = true;
// //     count = 0;
// //     enableBoxes();
// //     msgContainer.classList.add("hide");
// //   };  

// boxes.forEach( (box) => {
//     box.addEventListener('click', () => {
//         console.log('Button clicked')
//         if (turn0){
//             box.innerText = 'X';
//             turn0 = false
//         }
//         else{
//             box.innerText = 'O';
//             turn0 = true
//         }
//         box.disabled = true;
//         count += 1

//         let isWinner = Winner();

//         if (count === 9 && !isWinner) {
//             gameDraw();
//         }
//     })
// });

// const gameDraw = () => {
//     msg.innerText = `Game was a Draw.`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   };

// const showWinner = (winner) => {
//     msg.innerText = `Congratulations, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
//   };

// const disableBoxes = () => {
//     for (let box of boxes) {
//       box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for (let box of boxes) {
//       box.disabled = false;
//       box.innerText = "";
//     }
// };

// const Winner = () =>{
//     for(let pattern of patterns){
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//               showWinner(pos1Val);
//               return true;
//             }
//         }
//     }
// }

// newGameBtn.addEventListener("click", () =>{
//     turn0 = true;
//     count = 0;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// })
// resetbtn.addEventListener("click", resetGame);


let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);