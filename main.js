const themeToggle = document.getElementById("checkbox");
const verseText = document.getElementById("verse-text");
const verseReference = document.getElementById("verse-reference");

// Bible Verses Data
const verses = [
  { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
  { text: "I can do all things through him who strengthens me.", reference: "Philippians 4:13" },
  { text: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
  { text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", reference: "Romans 8:28" },
  { text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", reference: "Philippians 4:6" },
  { text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", reference: "Proverbs 3:5" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.", reference: "Lamentations 3:22-23" },
  { text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", reference: "Isaiah 41:10" }
];

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

function getRandomVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  const verse = verses[randomIndex];
  verseText.textContent = `"${verse.text}"`;
  verseReference.textContent = `- ${verse.reference}`;
}

// Initial verse
getRandomVerse();