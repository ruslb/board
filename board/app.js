const boad = document.querySelector('board')
const SQUARES_NUMBER = 500

for (let i = 0;i < SQUARES_NUMBER; i++)
{
    const square  = document.createElement('div')
    square.classList.add('square')


    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {

    element.style.backgroundColor = 'purple ' 
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
}
