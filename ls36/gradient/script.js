let squares = document.querySelectorAll('.square') // коллекция элементов с классом 'square'

for (let i = 0; i < squares.length; i++) { // перебор всех элементов с коллекции
  const el = squares[i] // элемент из коллекции
  el.style.background = el.getAttribute('data-bg') // изменение фона элемента согласно значению из атрибута

  el.addEventListener('click', function () {
    body.style.background = el.getAttribute('data-bg') // изменение фона страницы согласно значению из атрибута элемента
  })
}

function randomizeColor() {
  const r = Math.floor(Math.random() * 256) // рандомное число от 0 до 255
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})` // строка с рандомным цветом
}


const items = document.querySelectorAll('.item') // коллекция элементов с классом 'item'

for (let i = 0; i < 4; i++) { // перебор первых четырех элементов с коллекции
  const el = items[i] // элемент из коллекции

  el.addEventListener('click', function () {
    el.style.background = randomizeColor() // рандомное изменение фона элемента
  })
}

function randomizeDegree() {
  const num = Math.floor(Math.random() * 361) // рандомное число от 0 до 360

  return `${num}deg` // строка с рандомным углом
}

for (let i = 4; i < items.length; i++) { // перебор с пятого элемента коллекции
  const el = items[i] // элемент из коллекции

  el.addEventListener('click', function () {
    body.style.background = `linear-gradient(${randomizeDegree()}, ${randomizeColor()}, ${randomizeColor()})` // изменение фона страницы согласно рандомному линейному градиенту
  })
}
