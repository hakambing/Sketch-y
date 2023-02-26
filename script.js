pen_colour = "#2D2C2C";
penMode = "penMode";

sketchBoard = document.querySelector("#sketchBoard");
penColour = document.querySelector('#Pen');
rainbow = document.getElementById('rainbow');
eraser = document.getElementById('eraser');
gridLines = document.getElementById('gridLines');
gridSlider = document.querySelector('#gridSliderRange');
clear = document.getElementById('clear');

//function for setting the current pen mode (penMode, rainbowMode, eraserMode)
function setPenMode(newMode) {
    penMode = newMode;
    console.log(penMode);
}

//function for toggling between grid lines or no grid lines
function setGridLines(size) {
    if (gridLines.classList.contains("noLines")) {
        setupGrid(size, "noLines");

    } else {
        setupGrid(size, "lines");
    }
}

//function for the setting up of the grid
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

        gridElement.addEventListener('click', changeColor);
        if (lines == "lines") {
            gridElement.style.border = "1px solid black";
        } else if (lines == "noLines") {
            gridElement.style.border = "0";
        }

        gridElement.style.background = "white";
        sketchBoard.appendChild(gridElement);
    }

}

//for setting the pen colour
penColour.addEventListener('input', () => {
    pen_colour = penColour.value;
    setPenMode('penMode');
});

rainbow.onclick = () => setPenMode('rainbowMode');
eraser.onclick = () => setPenMode('eraserMode');
gridLines.onclick = () => setGridLines(gridSlider.value, gridLines.classList.toggle('noLines'));
gridSlider.addEventListener('input', function () {
    setGridLines(gridSlider.value);
    document.getElementById("range-value").innerHTML = gridSlider.value + " x " + gridSlider.value;
})
clear.onclick = () => setGridLines(gridSlider.value);

//function for coloring
function changeColor(e) {
    console.log("poopy");

    if (penMode === 'eraserMode') {
        e.target.style.backgroundColor = "#FFFFFF";
    } else if (penMode === 'rainbowMode') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if (penMode ==='penMode'){
        e.target.style.backgroundColor = pen_colour;
    }
}

window.addEventListener("load", (event) => {
    gridSlider.value = 16;
    setGridLines(gridSlider.value);
    penColour.value = "#2D2C2C";
})

