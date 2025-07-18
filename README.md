# ProgClub@GSU
<h2 align="center">Official Website for Georgia State University's Programming Club</h2>

<p align="center">
    <img alt="hero" width="450" src="public/image.png" />
</p>

> [!NOTE]
>
> This site is the public-facing home of **ProgClub@GSU**, a student-run programming club focused on coding, internships, open source, and community. Built with modern tools like Astro and Tailwind CSS, it also includes features like SMS announcements via Twilio and public event listings.

---

## 🌟 Features

- **Clean, Minimalist Design** – Styled with Tailwind CSS and inspired by terminal UI.
- **Astro-Powered** – Fast static site rendering with file-based routing.
- **Event Pages** – Easily list upcoming workshops, meetings, and hackathons.
- **SMS Join Flow** – Planned integration with Twilio for text message updates.
- **Markdown + MDX Support** – Future-proofed for member blogs or project write-ups.
- **Fully Open Source** – Built by students, for students.

---

## 💻 Installation

> [!TIP]
> Make sure to update [`src/consts.ts`](src/consts.ts) with club-specific info.

```bash
# Clone the repo
git clone https://github.com/joeyzhang-dev/ProgClubSite.git
cd ProgClubSite

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then visit: http://localhost:4321

---

## 🔧 Pages You’ll Find Here

| Page       | Purpose |
|------------|---------|
| `/`        | Homepage with intro and links |
| `/join`    | SMS opt-in page with Google Form + Twilio disclaimer |
| `/events`  | Upcoming workshops, meetings, and events |
| `/contact` | Club email or contact form |

---

## 📷 Screenshots

| Landing Page |
|--------------|
| ![Screenshot](/public/screenshot.png) |

---

## 🙌 Contributing

We’d love your help building this site — especially if you're part of GSU's CS/CIS community!

1. **Fork this repo**
2. `git clone` your fork
3. Create a branch:
   ```bash
   git checkout -b your-feature
   ```
4. Make your changes
5. Commit & push:
   ```bash
   git commit -m "feat: add new join section"
   git push origin your-feature
   ```
6. Open a PR on GitHub and let us know!

---

## 📬 Issues & Feedback

Spotted a bug or want to request a feature?  
Open an [issue](https://github.com/joeyzhang-dev/ProgClubSite/issues) and we'll take a look.

---

<h2 align="center">📄 License</h2>

<p align="center">
This project is open source under the <code>MIT</code> license. See <a href="LICENSE">LICENSE</a> for details.
</p>

---

<p align="center">
<strong>⭐ If you find this project helpful, drop us a star on GitHub!</strong>
</p>
