
pen_colour = "#2D2C2C";
penMode = "penMode";

sketchBoard = document.querySelector("#sketchBoard");
penColour = document.querySelector('#Pen');
// rainbow = document.getElementById('rainbow');
// eraser = document.getElementById('eraser');
gridLines = document.getElementById('gridLines');
gridSlider = document.querySelector('#gridSliderRange');
// clear = document.getElementById('clear');

// function setPenMode(newMode) {

//     penMode = newMode;
//     console.log(penMode);
// }


function setGridLines(size) {

    if (gridLines.classList.contains("noLines")) {
        setupGrid(size, "noLines");

    } else {
        setupGrid(size, "lines");
    }
}

// console.log(penColour);

function setupGrid(size, lines) {
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`
    let j = 0;
    for (let i = 0; i < size * size; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        boxes = document.querySelectorAll(".grid-element");

        //code for deleting existing grid
        if (boxes !== null && j == 0) {
            j++;
            boxes.forEach(box => {
                box.remove();
            });
        }


        // gridElement.addEventListener('mouseover', changeColor)
        // gridElement.addEventListener('mousedown', changeColor)
        if (lines == "lines") {
            gridElement.style.border = "1px solid black";
        } else if (lines == "noLines") {
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
gridLines.onclick = () => setGridLines(gridSlider.value,gridLines.classList.toggle('noLines'));
gridSlider.addEventListener('input', function() {
    setGridLines(gridSlider.value);
    document.getElementById("range-value").innerHTML = gridSlider.value + " x " + gridSlider.value;
})



function changeColor(e) {
    // if (e.type === 'mouseover' && !mouseDown) return
    // if (penMode === 'penMode') {
    //     gridElement.style.backgroundColor = pen_colour;
    // // } else if (penMode === 'eraserMode') {
    // //     gridElement.style.backgroundColor = "#FFFFFF";
    //  }


}



window.addEventListener("load", (event) => {
    gridSlider.value = 16;
    setGridLines(gridSlider.value);
})

