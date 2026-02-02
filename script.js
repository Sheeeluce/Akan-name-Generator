  //DOM ELEMENTS
const yearInput = document.getElementById("YY")
const dateInput = document.getElementById("DD")
const monthSelect = document.getElementById("MM")
const genderSelect = document.getElementById("gender")
const resultBox = document.getElementById("result-box")
const akanName = document.getElementById("akan-name")

function calculateAkan() {
  const year = parseInt(yearInput.value);
  const day = parseInt(dateInput.value);
  const month = parseInt(monthSelect.value);
  const gender = (genderSelect.value);

  const CC = Math.floor(year / 100 );
  const YY = year % 100;

  const d = ((4*CC - 2*(CC - 1)) + (45*YY) + (1026*(month + 1)) + day) % 7;
}