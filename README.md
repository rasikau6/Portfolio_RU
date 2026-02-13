# Portfolio_RU

I built this portfolio from scratch as a college project to show the things I'm learning and the projects I enjoy making. It's mostly HTML, CSS, and JavaScript and it was a great way to practice layout, animations, and small JS features (like form validation and a dark mode toggle).

---

## What this site does (high level)

- Responsive layout that adapts to mobile, tablet, and desktop
- Animated hero with a typewriter heading and decorative blobs
- Projects, Skills, Academic sections and a Certificates area
- Contact form with client-side validation and Formspree submission
- Resume download button (PDF included)
- Dark mode toggle that remembers your preference
- Added a green accent to the color scheme to tie into the blue/mustard palette

---

## Sections & Key Features

- **Hero** — Typewriter heading, CTA buttons (`View Projects`, `Let's Connect`, `Download Resume`), and overlapping animated blobs.
- **About** — Short personal blurb and styling that shows off the color palette and fonts.
- **Projects** — Card-based layout with images and descriptions.
- **Skills** — Tag-style list of skills I use or am learning.
- **Academic** — Education timeline and cards.
- **Certificates** — Small grid listing recent certificates (NPTEL entries included).
- **Contact** — Form with `name`, `email`, and `message`; validated in JavaScript and posted to Formspree.

---

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, CSS variables, keyframe animations)
- Vanilla JavaScript (form validation, scrollspy, dark-mode toggle)
- AOS (Animate On Scroll) for scroll-triggered fades
- Google Fonts: `IBM Plex Mono`, `Fredoka`
- Formspree for form handling (no backend required)

---

## Color palette (light + dark)

Light mode variables (in `style.css`):

```css
--yellow: #ede684;
--blue:   #a9c7cd;
--mustard:#c9b44c;
--peach:  #fddfce;
--pink:   #f8c8c3;
--ivory:  #f8f4e3;
--green:  #7fb069; /* added green accent */
```

Dark mode overrides are applied when `body.dark-mode` is active; the button in the header toggles the class and the preference is saved to `localStorage`.

---

## Files

```
Portfolio_2/
├── index.html                         # Main site and inline JS
├── style.css                          # All visual styles, color variables, dark-mode overrides
├── script.js                          
├── Rasika_Umate_Resume_Jan26_2.pdf    # Resume available for download
└── README.md                          # This file
```

---

## Running locally

No build step required — open `index.html` in your browser to view.

For a local server (recommended while developing):

```bash
# inside the project folder
python -m http.server 8000
# then open http://localhost:8000
```

Or use VS Code Live Server / `npx http-server` if you prefer.

---

## Contact form details

- The contact form includes `name`, `email`, and `message` fields.
- Client-side validation checks that fields are not empty and that the email looks valid before submission.
- Submissions are sent to Formspree (so you don't need to set up a backend). If you want your own endpoint, change the form `action` in `index.html`.

Note: The current contact email shown on the site is `rasika.scholar@gmail.com`.

---

## Customization notes (quick)

- To change colors: edit the CSS variables at the top of `style.css`.
- To change the resume: replace `Rasika_Umate_Resume_Jan26_2.pdf` (or update the `href` on the download link in `index.html`).
- To add projects: edit the `.projects-grid` markup in `index.html`.

---

## What I learned building this

- CSS Grid + Flexbox are super useful for responsive layouts
- Small JS features (form validation, dark mode, scrollspy) add a lot to UX
- Animations require balance — too many slow ones can feel clunky
- Colors and typography make the site feel intentional

---

## Future improvements (ideas)

- Add a simple backend/email notification (instead of Formspree)
- Filterable projects or project categories
- Dark-mode accessibility polish (contrast checks)
- Small accessibility improvements (labels)
- Replace alert-based validation with inline field errors

---

## Contact

- Email: rasika.scholar@gmail.com
- LinkedIn: https://www.linkedin.com/in/rasikaumate/

---

Built by Rasika (2026) — student, tinkerer, and still learning. If anything here looks broken or you want suggestions, ping me!
