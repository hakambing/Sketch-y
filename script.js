pen_colour = "#2D2C2C";
bg_colour = "#FFFFFF"

penColour = document.querySelector('#Pen');
bgColour = document.querySelector('#Bg');
// rainbow = document.getElementById('rainbow');
// eraser = document.getElementById('eraser');
// gridLines = document.getElementById('gridLines');
// gridSlider = document.getElementById('gridSlider');
// clear = document.getElementById('clear');


console.log(penColour);

function setupGrid(size) {
    document.getElementById('sketchBoard').style.gridTemplateColumns = `repeat(${size}, 1fr)`
    document.getElementById('sketchBoard').style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        sketchBoard.appendChild(gridElement)
        gridElement.style.border = "1px solid black";
        
    }
}

penColour.addEventListener('input',()=>{
    pen_colour = penColour.value;
});

bgColour.addEventListener('input',()=>{
    bg_colour = bgColour.value;
    gridElement.style.background = bg_colour;
});

function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return
    // if (currentMode === 'rainbow') {
    //   const randomR = Math.floor(Math.random() * 256)
    //   const randomG = Math.floor(Math.random() * 256)
    //   const randomB = Math.floor(Math.random() * 256)
    //   e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    //} else 

    e.target.style.backgroundColor = pen_colour;

}

setupGrid(5);

