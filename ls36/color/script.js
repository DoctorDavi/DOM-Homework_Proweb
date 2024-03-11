let squares = document.querySelectorAll('.square') // коллекция элементов с классом 'square'

for (let i = 0; i < squares.length; i++) { // перебор всех элементов с коллекции
  const el = squares[i] // элемент из коллекции
  el.style.background = el.getAttribute('data-bg') // изменение фона элемента согласно значению из атрибута

  el.addEventListener('click', function () {
    body.style.background = el.getAttribute('data-bg') // изменение фона страницы согласно значению из атрибута элемента
  })
}
