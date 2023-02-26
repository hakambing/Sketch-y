pen_colour = "#2D2C2C";
penMode = "penMode";
var lines = "lines";

sketchBoard = document.querySelector("#sketchBoard");
penColour = document.querySelector('#Pen');
// rainbow = document.getElementById('rainbow');
// eraser = document.getElementById('eraser');
gridLines = document.getElementById('gridLines');
// gridSlider = document.getElementById('gridSlider');
// clear = document.getElementById('clear');

// function setPenMode(newMode) {

//     penMode = newMode;
//     console.log(penMode);
// }

setGridLines();
function setGridLines() {

    gridLines.classList.toggle('yesLines');

    if (gridLines.classList.contains("yesLines")) {
        setupGrid(5, "lines");

    } else {
        setupGrid(5, "noLines");
    }
    // console.log(lines);
    // setupGrid(5,newLine);
}

// console.log(penColour);

function setupGrid(size, lines) {
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // console.log("gay" + lines);
    let x = 0;
    for (let i = 0; i < size * size; i++) {
        // console.log("gay" + lines);

        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        boxes = document.querySelectorAll(".grid-element");

        if (boxes !== null && x == 0) {
            console.log("taik");
            boxes.forEach(box => {
                console.log("poop");
                box.remove();
                x++
            });
        }


        // gridElement.addEventListener('mouseover', changeColor)
        // gridElement.addEventListener('mousedown', changeColor)
        if (lines == "lines") {
            console.log("helo");
            gridElement.style.border = "1px solid black";
        } else if (lines == "noLines") {
            console.log("bye");
            gridElement.style.border = "0";
        }

        gridElement.style.background = "white";
        sketchBoard.appendChild(gridElement);

        // console.log(penMode);
    }

}

// penColour.addEventListener('input', () => {
//     pen_colour = penColour.value;
// });

// eraser.onclick = () => setPenMode('eraser');
gridLines.onclick = () => setGridLines();



function changeColor(e) {
    // if (e.type === 'mouseover' && !mouseDown) return
    // if (penMode === 'penMode') {
    //     gridElement.style.backgroundColor = pen_colour;
    // // } else if (penMode === 'eraserMode') {
    // //     gridElement.style.backgroundColor = "#FFFFFF";
    //  }


}




// setupGrid(5,lines);

