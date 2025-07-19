# ProgClub@GSU
<h2 align="center">Official Website for Georgia State University's Programming Club</h2>

<p align="center">
    <img alt="hero" width="450" src="public/image.png" />
</p>

> [!NOTE]
>
> This site is the public-facing home of **ProgClub@GSU**, a student-run programming club at Georgia State University dedicated to coding, learning, and building a supportive tech community. We host workshops, hackathons, and social events for all skill levels!

---

## 🌟 About ProgClub@GSU

**ProgClub@GSU** is a student-run organization at Georgia State University dedicated to coding, learning, and building a supportive tech community. We host workshops, hackathons, and social events for all skill levels!

### What We Do
- **Workshops & Learning Sessions** – Regular coding workshops and skill-building sessions
- **Hackathons & Competitions** – Participate in coding challenges and hackathons
- **Networking & Community** – Connect with fellow programmers and industry professionals
- **Project Collaboration** – Work on open-source projects and build your portfolio
- **Career Development** – Internship opportunities and career guidance

---

## 🚀 Features

- **Modern Web Design** – Clean, responsive design built with Astro and Tailwind CSS
- **Fast Performance** – Static site generation for optimal loading speeds
- **Mobile-Friendly** – Responsive design that works on all devices
- **Easy Content Management** – Simple configuration through `src/consts.ts`
- **Open Source** – Built by students, for students - contributions welcome!

---

## 💻 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joeyzhang-dev/ProgClubSite.git
cd ProgClubSite

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then visit: http://localhost:4321

### Configuration

Update the club information in [`src/consts.ts`](src/consts.ts):

```typescript
export const SITE_TITLE = "PROGgsu";
export const SITE_DESCRIPTION = "Official website for Georgia State University's Programming Club...";
export const ABOUT_ME = "ProgClub@GSU is a student-run organization...";
```

---

## 📁 Project Structure

```
ProgClubSite/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Astro pages and routes
│   ├── consts.ts      # Site configuration
│   └── styles/        # Global styles
├── public/            # Static assets (images, etc.)
├── astro.config.mjs   # Astro configuration
└── tailwind.config.mjs # Tailwind CSS configuration
```

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run format       # Format code with Prettier
```

---

## 🤝 Contributing

We welcome contributions from GSU students and the broader community! Here's how you can help:

### For Club Members
1. **Fork this repository**
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Test your changes locally
5. Commit and push:
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request

### Contribution Ideas
- 🎨 Improve the design and user experience
- 📝 Add new content or pages
- 🐛 Fix bugs or issues
- ⚡ Optimize performance
- 📱 Improve mobile responsiveness
- 🌐 Add new features (events calendar, member profiles, etc.)

### Code Style
- Use TypeScript for type safety
- Follow the existing code style
- Write meaningful commit messages
- Test your changes before submitting

---

## 📞 Contact & Join Us

- **Email**: [Add club email here]
- **Discord**: [Add Discord link here]
- **Instagram**: [Add Instagram link here]
- **Meetings**: [Add meeting time/location here]

Want to join? Everyone is welcome, regardless of experience level!

---

## 📄 License

This project is open source under the [MIT License](LICENSE). See the LICENSE file for details.

---

<p align="center">
<strong>⭐ If you find this project helpful, drop us a star on GitHub!</strong>
</p>

<p align="center">
<em>Built with ❤️ by GSU Programming Club members</em>
</p>
