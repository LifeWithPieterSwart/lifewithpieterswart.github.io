# Pita's World — free personal website

A responsive static website with a black/neon-green theme, photo gallery, travel/adventure cards and diary entries.

## 1. Preview on Kali Linux

Open a terminal in this folder and run:

```bash
python3 serve.py
```

Then open `http://127.0.0.1:8000` in Firefox. Stop the server with `Ctrl+C`.

Do not open `index.html` by double-clicking it: the site loads its JSON content using `fetch()`, so preview it through the local server.

## 2. Add your photographs

Copy your own JPG, PNG or WebP photographs into the `images` folder. Rename them, for example:

- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`

Then edit `gallery.json` and change each `image` path and `caption`. The example image files are not included; missing images show as dark placeholders until you add your own.

## 3. Add stories and diary entries

Edit `posts.json` with a text editor. Each item has:
- `category`: use `adventure` or `diary`
- `date`: YYYY-MM-DD
- `title`: the heading
- `excerpt`: a short description

Keep valid JSON: use double quotes around keys and text, commas between items, and no comma after the final item.

## 4. Personalise the site

Edit `index.html` to change the name, introduction, About text and contact email. Search for `hello@example.com` and replace it with your real public contact email, or remove the email link.

The hero background uses an online Unsplash image. You can replace its URL in `style.css` with one of your own images (for example `url('images/hero.jpg')`). Google Fonts are optional; the site has fallback fonts if unavailable.

## 5. Publish free with GitHub Pages

1. Create a GitHub account at https://github.com/ if you do not already have one.
2. Create a **public** repository named exactly `yourusername.github.io` (replace `yourusername` with your GitHub username).
3. In the repository, choose **Add file → Upload files**.
4. Upload the contents of this project folder — `index.html`, `style.css`, `script.js`, `gallery.json`, `posts.json`, `serve.py`, `README.md`, and the `images` folder. Upload the files themselves to the repository root, not an extra enclosing project folder.
5. Commit the upload to the `main` branch.
6. Open **Settings → Pages**. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save if that option is shown.
7. Wait a few minutes, then visit `https://yourusername.github.io`.

GitHub's menus may change slightly. See https://docs.github.com/en/pages/quickstart for current instructions.

## Important privacy and hosting notes

- GitHub Pages publishes the repository website publicly. Do not upload private diary entries, home addresses, phone numbers, children's information or photographs of people who have not agreed to be shown.
- GitHub Pages serves static files only. The Python script is only for local preview; it does not run on GitHub Pages.
- Never upload passwords, API keys or private files to a public repository.
