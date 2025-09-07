let reset = document.querySelector('.reset')
let add = document.querySelector('.add')
let minus = document.querySelector('.minus')
let counter = document.querySelector('.count-num')
let count = 0
let color = "#85087d"
reset.onclick = function () {
  count = 0
  counter.innerHTML = count
}
add.onclick = function () {
  count++
  counter.innerHTML = count
}
minus.onclick = function () {
  count = count - 1
  counter.innerHTML = count
}
function changeColor() {
  if (color === "#85087d") {
    color = "#2c2f3b"
  } else if(color === "#2c2f3b"){
    color = '#3b7b7c'
  } else if (color === "#3b7b7c") {
    color = "#85087d"
  }
  document.body.style.cssText =`background-color : ${color};`
}
