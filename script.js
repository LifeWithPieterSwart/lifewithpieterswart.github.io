// Edit gallery.json and posts.json to add your own photographs and stories.
const galleryGrid = document.getElementById("galleryGrid");
const adventureGrid = document.getElementById("adventureGrid");
const diaryList = document.getElementById("diaryList");
const photoDialog = document.getElementById("photoDialog");

function escapeHTML(value="") {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function showPhoto(src, caption) {
  document.getElementById("dialogImage").src = src;
  document.getElementById("dialogImage").alt = caption;
  document.getElementById("dialogCaption").textContent = caption;
  photoDialog.showModal();
}
async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}
async function buildGallery() {
  try {
    const photos = await loadJSON("gallery.json");
    galleryGrid.innerHTML = photos.map(photo => `
      <button class="gallery-card" type="button" data-src="${escapeHTML(photo.image)}" data-caption="${escapeHTML(photo.caption)}">
        <img src="${escapeHTML(photo.image)}" alt="${escapeHTML(photo.caption)}" loading="lazy"
          onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(135deg,#17351b,#080d08)'">
        <span>${escapeHTML(photo.caption)}</span>
      </button>`).join("");
    galleryGrid.querySelectorAll("button").forEach(button =>
      button.addEventListener("click", () => showPhoto(button.dataset.src, button.dataset.caption)));
  } catch (error) {
    galleryGrid.innerHTML = `<p class="section-note">Add your photographs to gallery.json to display them here.</p>`;
  }
}
async function buildStories() {
  try {
    const posts = await loadJSON("posts.json");
    const adventures = posts.filter(post => post.category === "adventure");
    const diary = posts.filter(post => post.category === "diary");
    adventureGrid.innerHTML = adventures.map((post, i) => `
      <article class="story-card"><span class="number">JOURNEY / ${String(i+1).padStart(2,"0")}</span>
      <h3>${escapeHTML(post.title)}</h3><p>${escapeHTML(post.excerpt)}</p></article>`).join("");
    diaryList.innerHTML = diary.map(post => `
      <article class="diary-entry"><div class="diary-date">${escapeHTML(post.date)}</div>
      <div><h3>${escapeHTML(post.title)}</h3><p>${escapeHTML(post.excerpt)}</p></div></article>`).join("");
  } catch (error) {
    adventureGrid.innerHTML = "<p class='section-note'>Add adventure stories to posts.json.</p>";
    diaryList.innerHTML = "<p class='section-note'>Add diary entries to posts.json.</p>";
  }
}
document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("#mainNav a").forEach(link => link.addEventListener("click", () => {
  document.getElementById("mainNav").classList.remove("open");
  document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}));
document.getElementById("dialogClose").addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", event => { if (event.target === photoDialog) photoDialog.close(); });
document.getElementById("year").textContent = new Date().getFullYear();
buildGallery();
buildStories();
