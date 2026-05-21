let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newgame");
let msgbox=document.querySelector(".msgbox");

let turnO=true;
msgbox.classList.add("hide");

const winpatterns=[ [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

const disablebox=() => {
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enablebox=() => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const playagain=() => {
    turnO=true;
    enablebox();
    msgbox.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO===true) {
            box.innerText="O";
            turnO=false;
        }
        else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const checkwinner=() => {
    for(let pattern of winpatterns) {
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;

        if(a!="" && b!="" && c!="") {
            if(a===b && b===c) {
                msg.innerText=`Winner is ${a}`;
                msgbox.classList.remove("hide");
                disablebox();
            }
        }
    }
};

newgame.addEventListener("click", playagain);
reset.addEventListener("click", playagain);