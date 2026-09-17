# Nick Stevens | Digital & Business Solutions

Your personal brand website. Plain HTML/CSS/JS — no build step, no framework — so it opens straight in a browser and is easy to edit in VS Code.

## Structure

```
website/
├── index.html        All page content and section markup
├── css/style.css      Design system + styles
├── js/main.js         Theme toggle, mobile menu, scroll reveal, contact form
├── images/            Your photos, already resized and compressed for the web
└── README.md
```

## Running it locally

You can just double-click `index.html` to open it in a browser. For the smoothest experience in VS Code, install the **Live Server** extension, right-click `index.html`, and choose "Open with Live Server" — this avoids occasional browser restrictions on local file paths.

## Things to finish connecting

1. **Contact form email** — The form on the Contact section posts to `https://formsubmit.co/khayostevens04@gmail.com`. This is a free service that forwards form submissions straight to your inbox with no backend code required. **The first submission will trigger a one-time confirmation email from FormSubmit to khayostevens04@gmail.com — click the link inside it to activate the form.** After that, every submission is delivered automatically. If you'd rather use a different provider (e.g. your own backend, Netlify Forms, or a mail API), just swap the `action` attribute on the `<form id="contactForm">` element in `index.html`.

2. **CV / Resume** — Section 19 ("My Professional Profile") has a "View / Download CV" button that currently links to the Contact section as a placeholder. Once you have a CV PDF:
   - Add it to the project, e.g. `documents/Khayelisha-Nick-Stevens-CV.pdf`
   - In `index.html`, find the `cv-band` section and change the button's `href="#contact"` to `href="documents/Khayelisha-Nick-Stevens-CV.pdf"` and add `download` and `target="_blank"` attributes.

3. **Social media follower counts** — Listed under "Let's Grow Together" (Facebook 5,000+, Instagram 1,100+, TikTok 1,100+, LinkedIn 580+). Update the numbers in `index.html` (search for `stat-row`) whenever your audience grows.

4. **Project links** — VUT ERS and MICT SETA ERS both link to their live systems already. The four in-development projects (LyfeLedger, ReplyFlow, Find Me a Supplier, RUA) show a disabled "Coming Soon" button — replace it with a real link once each has a live URL or a details page.

5. **Deploying it online** — Once you're happy with it, you can host this folder for free on Netlify, Vercel, or GitHub Pages (drag-and-drop the folder onto Netlify's dashboard is the fastest option). No build step is required — it's ready to deploy as-is.

## Editing content

All the visible text lives in `index.html`, organised by section with HTML comments (`<!-- ============ ABOUT ============ -->`) marking where each one starts. Section order matches the navigation bar. Colours, fonts and spacing are controlled from the top of `css/style.css` under `:root` — changing a value there updates it site-wide.

## Notes

- No information was invented beyond what you provided — project descriptions, stats, and bio content all come directly from your brief.
- Dark mode is a manual toggle (top right) and remembers the visitor's choice in their own browser.
- All social and project links open in a new tab, using the exact URLs you supplied.
