const numbersContainer = document.getElementById("numbers");
const themeToggle = document.getElementById("checkbox");

// 로컬 스토리지에서 테마 불러오기
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === "dark-mode") {
    themeToggle.checked = true;
  }
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  }
});

function generateNumbers() {
  numbersContainer.innerHTML = "";
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  for (const number of sortedNumbers) {
    const numberElement = document.createElement("span");
    numberElement.textContent = number;
    numberElement.classList.add("number");
    numbersContainer.appendChild(numberElement);
  }
}

generateNumbers();