# Portfolio — Aditya Ferdie Gale Saputra

Static site (HTML/CSS/JS, no build step). Ready for GitHub Pages.

## Deploy ke GitHub Pages

1. Bikin repo baru di GitHub dengan nama **`galesaputra.github.io`** (biar URL-nya `https://galesaputra.github.io`).
   Kalau pakai nama lain (misal `portfolio`), URL-nya jadi `https://galesaputra.github.io/portfolio`.
2. Upload semua isi folder ini ke root repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/galesaputra/galesaputra.github.io.git
   git push -u origin main
   ```
3. Di repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pilih `main` / `(root)`, Save.
4. Tunggu ±1 menit, buka URL-nya.

## Edit konten

- `projects.js` — daftar project (nama, deskripsi, stack, screenshot, link store). Screenshot ada di `assets/work/`.
- `index.html` — hero, experience, skills, contact.
- `style.css` — warna ada di `:root` paling atas.
- `assets/cv-aditya-ferdie-gale-saputra.pdf` — file CV untuk tombol Download CV.

Preview lokal: `npx serve .` atau buka `index.html` langsung di browser.
