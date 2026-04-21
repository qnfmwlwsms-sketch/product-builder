const themeToggle = document.getElementById("checkbox");
const verseText = document.getElementById("verse-text");
const verseReference = document.getElementById("verse-reference");
const verseReflection = document.getElementById("verse-reflection");

// Bible Verses Data with Reflections for High-Quality Content
const verses = [
  { 
    text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", 
    reference: "Jeremiah 29:11",
    reflection: "This verse reminds us that even in uncertain times, God has a purpose and a positive vision for our lives. It encourages us to trust in His timing and divine guidance."
  },
  { 
    text: "I can do all things through him who strengthens me.", 
    reference: "Philippians 4:13",
    reflection: "True strength comes from faith. When we feel overwhelmed, this promise assures us that we have access to supernatural empowerment through Christ."
  },
  { 
    text: "The Lord is my shepherd; I shall not want.", 
    reference: "Psalm 23:1",
    reflection: "God's provision is complete. Like a shepherd cares for his sheep, He guides us to peace and ensures our essential needs are met."
  },
  { 
    text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", 
    reference: "Romans 8:28",
    reflection: "Even difficult situations can be woven into a tapestry of good. This perspective helps us maintain hope during trials."
  },
  { 
    text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", 
    reference: "Philippians 4:6",
    reflection: "Anxiety can be traded for peace through prayer. Gratitude is a powerful tool to refocus our hearts on God's faithfulness."
  },
  { 
    text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", 
    reference: "Proverbs 3:5",
    reflection: "Human logic is limited. By leaning on God's infinite wisdom, we find a path that is straighter and more fulfilling than one we could plan ourselves."
  }
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
  if (verseReflection) {
    verseReflection.textContent = verse.reflection;
  }
}

// Initial verse
getRandomVerse();