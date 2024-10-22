//wait for DOM to finsh loadingbefore running the game
//get the button element and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            }else{
               let gameType = this.getAttribute("data-type");
               alert(`You clicked ${gameType}`);

            }    
        })

    }
})

/** the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed 
*/
function runGame() {

    //creates random number between 1 and 25
    let num1 = math.floor(math.random() * 25) + 1;
    let num2 = math.floor(math.random() * 25) + 1;

}


function checkAnswers() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}