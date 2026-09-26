const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

function boldSelf(authors){
  return authors
    .replaceAll("U. M. Borhan", "<strong>U. M. Borhan</strong>")
    .replaceAll("Uddin Md. Borhan", "<strong>Uddin Md. Borhan</strong>");
}

function renderPublications(filter="featured"){
  const root = $("#publications-list");
  const pubs = SITE_DATA.publications
    .filter(p => filter === "all" ? true :
                 filter === "published" ? p.status === "Published" :
                 filter === "review" ? p.status !== "Published" :
                 p.featured)
    .sort((a,b) => b.year - a.year);
  root.innerHTML = pubs.map(p => `
    <article class="pub reveal">
      <div class="pub-year">${p.year}</div>
      <div>
        <h3>${p.title}</h3>
        <p>${boldSelf(p.authors)}</p>
        <p><em>${p.venue}</em></p>
        <span class="pub-status">${p.status}</span>
      </div>
      <div class="pub-links">
        ${p.links.map(l => `<a class="small-link" href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderNews(){
  const root = $("#news-grid");
  root.innerHTML = SITE_DATA.news.map(n => `
    <article class="news-card reveal">
      <img src="${n.image}" alt="" loading="lazy">
      <div class="news-body">
        <div class="news-meta"><span>${n.tag}</span><span>${n.date}</span></div>
        <h3>${n.title}</h3>
        <p>${n.text}</p>
        ${n.url ? `<a class="small-link" href="${n.url}" target="_blank" rel="noopener">Source ↗</a>` : `<span class="small-link">Editable card</span>`}
      </div>
    </article>
  `).join("");
  observeReveals();
}

function observeReveals(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add("visible"); observer.unobserve(e.target); }
    });
  }, {threshold:.08});
  $$(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

$$(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPublications(btn.dataset.filter);
  });
});

const savedTheme = localStorage.getItem("theme");
if(savedTheme) document.documentElement.dataset.theme = savedTheme;
$("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

$("#menu-toggle").addEventListener("click", () => {
  $("#nav-links").classList.toggle("open");
});
$$("#nav-links a").forEach(a => a.addEventListener("click", () => $("#nav-links").classList.remove("open")));

const sections = $$("main section[id]");
const navAnchors = $$("#nav-links a");
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
    }
  });
}, {rootMargin:"-45% 0px -50% 0px"});
sections.forEach(s => spy.observe(s));

$("#year").textContent = new Date().getFullYear();
renderPublications("featured");
renderNews();
observeReveals();
