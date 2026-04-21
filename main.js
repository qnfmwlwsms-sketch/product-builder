const verseContainer = document.getElementById("verse");

async function getVerse() {
  verseContainer.textContent = "Loading...";
  try {
    const response = await fetch("https://bible-api.com/?random=verse");
    const data = await response.json();
    verseContainer.innerHTML = `<p>${data.text}</p><p><em>${data.reference}</em></p>`;
  } catch (error) {
    verseContainer.textContent = "Failed to load verse. Please try again.";
    console.error("Error fetching verse:", error);
  }
}

getVerse();
