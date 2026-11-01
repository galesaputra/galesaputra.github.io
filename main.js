(function () {
  const projectsEl = document.getElementById("projects");
  const moreEl = document.getElementById("more");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  projectsEl.innerHTML = window.PROJECTS.map((p) => {
    const shots = p.shots.map((s) =>
      `<button type="button" class="shot" data-src="assets/work/${s}" aria-label="Enlarge ${esc(p.name)} screenshot">
         <img src="assets/work/${s}" alt="${esc(p.name)} screenshot" loading="lazy">
       </button>`).join("");
    const links = (p.links || []).map((l) =>
      `<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("");
    return `
      <article class="project ${p.type === "web" ? "is-web" : "is-mobile"}" data-type="${p.type}">
        <div class="shots shots-${p.shots.length}">${shots}</div>
        <div class="info">
          <p class="meta"><span class="tag tag-${p.type}">${p.type === "web" ? "Web" : "Mobile"}</span>${esc(p.client)}</p>
          <h3>${esc(p.name)}</h3>
          <p class="summary">${esc(p.summary)}</p>
          <ul class="did">${p.did.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
          <p class="stack">${p.stack.map(esc).join(", ")}</p>
          ${links ? `<p class="links">${links}</p>` : ""}
        </div>
      </article>`;
  }).join("");

  moreEl.innerHTML = window.MORE_PROJECTS.map((p) => `
    <li data-type="${p.type}">
      <h4>${esc(p.name)}</h4>
      <p>${esc(p.text)}</p>
      <p class="stack"><span class="tag tag-${p.type}">${p.type === "web" ? "Web" : "Mobile"}</span>${esc(p.client)}, ${esc(p.stack)}</p>
    </li>`).join("");

  // Filters
  document.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      document.querySelectorAll(".chip").forEach((b) => {
        const on = b === btn;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on);
      });
      document.querySelectorAll("[data-type]").forEach((el) => {
        el.hidden = f !== "all" && el.dataset.type !== f;
      });
    });
  });

  // Screenshot viewer
  const dlg = document.getElementById("viewer");
  const dlgImg = dlg.querySelector("img");
  projectsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".shot");
    if (!b) return;
    dlgImg.src = b.dataset.src;
    dlgImg.alt = b.querySelector("img").alt;
    dlg.showModal();
  });
  dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.classList.contains("close")) dlg.close(); });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
