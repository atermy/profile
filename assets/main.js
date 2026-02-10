function el(tag, cls){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  return e;
}
function safeText(node, text){
  node.textContent = text ?? "";
  return node;
}

function setTheme(theme){
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

function initTheme(){
  const saved = localStorage.getItem("theme");
  if(saved){
    setTheme(saved);
    return;
  }
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(prefersLight ? "light" : "dark");
}

function render(){
  if(typeof PROFILE !== "object") return;

  safeText(document.getElementById("brandName"), PROFILE.brandName);
  safeText(document.getElementById("kicker"), PROFILE.kicker);
  safeText(document.getElementById("headline"), PROFILE.headline);
  safeText(document.getElementById("subheadline"), PROFILE.subheadline);

  safeText(document.getElementById("monoTag"), PROFILE.tags?.mono);
  safeText(document.getElementById("bigTag"), PROFILE.tags?.big);
  safeText(document.getElementById("smallTag"), PROFILE.tags?.small);

  safeText(document.getElementById("aboutHint"), PROFILE.aboutHint);
  safeText(document.getElementById("aboutText"), PROFILE.aboutText);

  // CTA buttons
  const ctaRow = document.getElementById("ctaRow");
  ctaRow.innerHTML = "";
  (PROFILE.ctas || []).forEach((c, i) => {
    const a = el("a", "btn" + (i === 0 ? " primary" : ""));
    a.href = c.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = c.label;
    ctaRow.appendChild(a);
  });

  // Meta chips
  const metaRow = document.getElementById("metaRow");
  metaRow.innerHTML = "";
  (PROFILE.meta || []).forEach(m => {
    const d = el("div", "meta");
    const b = el("b");
    b.textContent = m.k + ": ";
    d.appendChild(b);
    d.appendChild(document.createTextNode(m.v));
    metaRow.appendChild(d);
  });

  // Pills
  const pillGrid = document.getElementById("pillGrid");
  pillGrid.innerHTML = "";
  (PROFILE.pills || []).forEach(p => {
    const s = el("span", "pill");
    s.textContent = p;
    pillGrid.appendChild(s);
  });

  // Lists
  const focusList = document.getElementById("focusList");
  focusList.innerHTML = "";
  (PROFILE.focus || []).forEach(t => {
    const li = el("li");
    li.textContent = t;
    focusList.appendChild(li);
  });

  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";
  (PROFILE.skills || []).forEach(t => {
    const li = el("li");
    li.textContent = t;
    skillList.appendChild(li);
  });

  // Projects
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  (PROFILE.projects || []).forEach(p => {
    const card = el("article", "project");
    const h = el("h3");
    h.textContent = p.title;
    const d = el("p");
    d.textContent = p.desc;

    const tags = el("div", "tagRow");
    (p.tags || []).forEach(t => {
      const s = el("span", "tag");
      s.textContent = t;
      tags.appendChild(s);
    });

    const links = el("div", "linkRow");
    (p.links || []).forEach(l => {
      const a = el("a", "link");
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = l.label;
      links.appendChild(a);
    });

    card.appendChild(h);
    card.appendChild(d);
    card.appendChild(tags);
    card.appendChild(links);
    grid.appendChild(card);
  });

  // Notes
  const noteList = document.getElementById("noteList");
  noteList.innerHTML = "";
  (PROFILE.notes || []).forEach(n => {
    const li = el("li");
    li.textContent = n;
    noteList.appendChild(li);
  });

  // Contact
  const contactRow = document.getElementById("contactRow");
  contactRow.innerHTML = "";
  (PROFILE.contact || []).forEach(c => {
    const a = el("a", "link");
    a.href = c.href;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = c.label;
    contactRow.appendChild(a);
  });
  safeText(document.getElementById("contactFine"), PROFILE.contactFine);

  safeText(document.getElementById("footerLeft"), PROFILE.footerLeft);
  safeText(document.getElementById("footerRight"), PROFILE.footerRight);

  // Title
  document.title = `${PROFILE.headline} · Profile`;
}

function bind(){
  const btn = document.getElementById("themeBtn");
  btn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || "dark";
    setTheme(cur === "dark" ? "light" : "dark");
  });
}

initTheme();
bind();
render();
