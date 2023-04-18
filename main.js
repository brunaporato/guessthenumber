let randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', enterReset)

function handleTryClick(event) {
  event.preventDefault()

  let inputNumber = document.querySelector("#inputNumber")
  let userNumber = Number(inputNumber.value)
  if(userNumber == randomNumber) {
    toggleScreen()

    screen2.querySelector("h2")
      .innerText = `Você acertou em ${xAttempts} tentativas`
  } else if(userNumber < 0 || userNumber > 10 || isNaN(userNumber) == true || inputNumber.value == "") {
    alert(`ERRO\nDigite um número válido`)
  } else {
    xAttempts++
  }

  inputNumber.value = ""
}

function handleResetClick() {
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}