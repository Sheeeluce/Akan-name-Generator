  //DOM ELEMENTS
const yearInput = document.getElementById("YY")
const dateInput = document.getElementById("DD")
const monthSelect = document.getElementById("MM")
const genderSelect = document.getElementById("gender")
const resultBox = document.getElementById("result-box")
const akanName = document.getElementById("akan-name")

function generateAkanName() {
  const year = parseInt(yearInput.value);
  const day = parseInt(dateInput.value);
  const month = parseInt(monthSelect.value);
  const gender = (genderSelect.value);

  const CC = Math.floor(year / 100 );
  const YY = year % 100;

  const d = ((4*CC - 2*(CC - 1)) + (45*YY) + (1026*(month + 1)) + day) % 7;

  const male = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const name = gender === "male" ? male[d] : female[d];

  akanName.textContent = akanname;

  if (!YY) {
    alert("Please enter year of birth");
    return;
  }

  if (!DD) {
    alert("Please enter date of birth");
    return;
  }

  if (!MM) {
    alert("Please enter month of birth");
    return;
  }
}