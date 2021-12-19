let mode = 'pen'
let size = 16

makeGrid(size)

const penBtn = document.querySelector('#penBtn')
const rainbowBtn = document.querySelector('#rainbowBtn')
const sizeSlider = document.querySelector('#sizeSlider')
const cleanBtn = document.querySelector('#cleanBtn')

penBtn.onclick = () => setMode('pen')
rainbowBtn.onclick = () => setMode('rainbow')
sizeSlider.onchange = (e) => setSize(e.target.value)
cleanBtn.onclick = () => clean()

function makeGrid(n) {
    let container = document.createElement('div')
    container.setAttribute('id', 'container')

    for (j = 0; j < n; j++) {
        let col = document.createElement('div')
        col.setAttribute('id', 'row')
        for (i = 0; i < n; i++) {
            let row = document.createElement('div')
            row.setAttribute('id', 'unit')
            row.style.width = 480/n + 'px'
            row.style.height = 480/n + 'px'
            row.addEventListener('mouseenter', paint)
            col.appendChild(row)
        }
        container.appendChild(col)
    }
    document.body.appendChild(container)
}

function clean() {
    document.body.removeChild(container)
    makeGrid(size)
}

function paint(e) {
    if (mode === 'pen') {
        e.target.style.backgroundColor = 'black'
    } else if (mode === 'rainbow') {
        let colorR = Math.floor(Math.random() * 256)
        let colorG = Math.floor(Math.random() * 256)
        let colorB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
    }
}

function setMode(str) {
    mode = str
}

function setSize(newsize) {
    size = newsize
    clean()
}





