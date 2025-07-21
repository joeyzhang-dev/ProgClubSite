# PROGgsu 🚀

<h2 align="center">Official Website for Georgia State University's Programming Club</h2>

<p align="center">
    <img alt="ProgClub GSU Logo" width="450" src="public/image.png" />
</p>

<p align="center">
    <strong>Built with Astro • Tailwind CSS • Sanity CMS</strong>
</p>

---

## 🌟 About PROGgsu

**PROGgsu** is Georgia State University's premier programming club, dedicated to fostering a supportive and inclusive tech community for students of all skill levels. Whether you're writing your first "Hello World" or building the next big startup, **everyone is welcome** here! 

### 🎯 What We Do
- **🛠️ Workshops & Learning Sessions** – Hands-on coding workshops covering everything from web dev to AI
- **🏆 Hackathons & Competitions** – Team up for coding challenges and build amazing projects
- **🤝 Networking & Community** – Connect with fellow programmers, alumni, and industry professionals  
- **💡 Project Collaboration** – Contribute to open-source projects and build your portfolio
- **📈 Career Development** – Get mentorship, internship opportunities, and career guidance

---

## ✨ Website Features

This modern, fast-loading website showcases everything our club has to offer:

### 🎨 **Modern Design & Performance**
- **Lightning Fast** – Built with Astro for optimal static site generation
- **Mobile-First** – Responsive design that works beautifully on all devices
- **Accessible** – Designed with accessibility best practices in mind

### 📝 **Content Management**
- **Sanity CMS Integration** – Easy-to-use headless CMS for managing events and content
- **MDX Support** – Rich content creation with Markdown and React components
- **Real-time Updates** – Content changes reflect immediately on the live site

### 🎉 **Club Features**
- **Event Announcements** – Stay updated on workshops, meetings, and social events
- **Resource Library** – Curated learning materials and helpful links
- **Member Spotlights** – Showcase amazing work from our community
- **Discord Integration** – Direct link to our active Discord community

---

## 🛠️ Technologies Used

- **⚡ [Astro](https://astro.build/)** - Modern static site generator
- **🎨 [Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework  
- **📝 [Sanity CMS](https://www.sanity.io/)** - Headless content management
- **🔧 [TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **📖 [MDX](https://mdxjs.com/)** - Enhanced Markdown with components
- **🚀 [Vercel](https://vercel.com/)** - Fast deployment and hosting

---

## 🚀 Quick Start

### Prerequisites
Make sure you have these installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/joeyzhang-dev/ProgClubSite.git
cd ProgClubSite

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

🎉 **That's it!** Visit [http://localhost:4321](http://localhost:4321) to see the site running locally.

### 🎛️ Configuration

Customize the site by editing [`src/consts.ts`](src/consts.ts):

```typescript
// Update these values to match your club's information
export const SITE_TITLE = "PROGgsu";
export const SITE_DESCRIPTION = "Georgia State University's Programming Club...";
export const ABOUT_ME = "ProgClub@GSU is a student-run organization...";

// Add your social links
export const NAV_LINKS = [
  { title: "Events" },
  { title: "Resources" },
  { title: "Join", href: "//discord.gg/your-discord-link" }
];
```

---

## 🏗️ Project Structure

```
ProgClubSite/
├── 📁 src/
│   ├── 📁 components/          # Reusable UI components
│   │   ├── Hero.astro         # Landing page hero section
│   │   ├── BlogPostCard.astro # Event/post preview cards
│   │   └── ResourceButtons.astro # Quick access buttons
│   ├── 📁 pages/              # Site pages and routes
│   │   ├── index.astro        # Homepage
│   │   ├── events/            # Events listing and detail pages
│   │   └── resources.astro    # Resources page
│   ├── 📁 layouts/            # Page layouts
│   ├── 📁 lib/               # Utility functions
│   │   └── sanity.js         # Sanity CMS client setup
│   ├── 📁 styles/            # Global styles and Tailwind config
│   └── consts.ts             # Site configuration
├── 📁 studio/                 # Sanity CMS studio
│   ├── 📁 schemaTypes/       # Content models (events, tags, etc.)
│   └── sanity.config.ts      # CMS configuration
├── 📁 public/                # Static assets (images, favicon, etc.)
└── astro.config.mjs          # Astro build configuration
```

---

## 🎨 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality  
npm run fmt          # Format code with Prettier

# CMS
cd studio && npm run dev  # Start Sanity Studio (CMS interface)
```

### 🎛️ Content Management with Sanity CMS

#### Initial Sanity Setup
1. **Navigate to the studio directory:**
   ```bash
   cd studio
   npm install
   npm run dev
   ```

2. **Access Sanity Studio** at [http://localhost:3333](http://localhost:3333)

3. **First-time setup:**
   - Sign in with your Google/GitHub account
   - You'll be granted access to the PROGgsuSite project
   - Familiarize yourself with the Studio interface

#### Content Types Available

**📅 Events**
- Create workshop announcements
- Add event details (date, time, location, description)
- Set featured images and tags
- Mark events as upcoming or past

**🏷️ Tags**
- Organize content by topics (e.g., "Web Development", "AI/ML", "Beginner-Friendly")
- Create visual categories for easy browsing
- Associate with events and posts

#### How to Add Content

1. **Adding a New Event:**
   - Click "Events" in the Studio sidebar
   - Click "Create new Event"
   - Fill in required fields (title, description, date)
   - Add optional fields (image, location, registration link)
   - Set appropriate tags
   - Click "Publish" when ready

2. **Managing Tags:**
   - Go to "Tags" section
   - Create descriptive tags with clear names
   - Use consistent naming (e.g., "Web Development" not "webdev")

3. **Content Tips:**
   - Use clear, descriptive titles
   - Add engaging descriptions
   - Include event images when possible
   - Always tag content appropriately

---

## 🚀 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Test the production build locally
npm run preview
```

### Deploy to Vercel (Our Current Setup)

**Option 1: Automatic Deployment (Recommended)**
1. **Push your code to GitHub**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
3. **Vercel auto-detects Astro:**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. **Deploy automatically!** 🚀

**Option 2: CLI Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Alternative Platforms
The site generates static files and can be deployed to any static hosting platform:
- **Netlify** - Great alternative with similar features
- **GitHub Pages** - Free for public repositories
- **Cloudflare Pages** - Fast global CDN

---

## 🤝 Contributing

We'd love your help making this website even better! Here's how to get involved:

### 🌟 For Club Members

1. **🍴 Fork the repository** on GitHub
2. **🌿 Create a feature branch:**
   ```bash
   git checkout -b feature/awesome-new-feature
   ```
3. **💻 Make your changes** and test them locally
4. **📝 Commit with a clear message:**
   ```bash
   git commit -m "feat: add member spotlight section"
   ```
5. **📤 Push and create a Pull Request:**
   ```bash
   git push origin feature/awesome-new-feature
   ```

### 💡 Contribution Ideas

**🎨 Design & UX:**
- Improve mobile responsiveness
- Add dark/light theme toggle
- Create loading animations
- Design new page layouts

**✨ Features:**
- Member directory and profiles
- Interactive events calendar
- Project showcase gallery
- Newsletter signup integration

**🐛 Bug Fixes:**
- Report issues you find
- Fix accessibility problems
- Optimize performance bottlenecks

**📝 Content:**
- Write blog posts about tech topics
- Create coding tutorials
- Add learning resources
- Update club information

### 📋 Code Guidelines

- **TypeScript First** – Use TypeScript for all new code
- **Component-Based** – Create reusable Astro components
- **Accessible** – Follow WCAG accessibility guidelines
- **Mobile-Responsive** – Test on different screen sizes
- **Performance-Minded** – Optimize images and minimize bundle size

### 🔍 Code Review Process

1. All contributions go through pull request review
2. Maintain the existing code style and conventions
3. Add comments for complex logic
4. Test your changes thoroughly before submitting

---

## 📝 Contributing Content (Non-Developers)

**Don't code but want to help with content?** Perfect! We need club members to keep our events and information up-to-date.

### 🎯 **Content We Need Help With:**

**📅 Event Management:**
- Add upcoming workshops and meetings
- Update event descriptions and details
- Upload event photos and promotional images
- Create post-event summaries

**📚 Learning Resources:**
- Curate helpful coding tutorials
- Add book recommendations
- Share useful development tools
- Write beginner-friendly guides

**📰 News & Announcements:**
- Club meeting notes
- Member achievements and spotlights
- Partnership announcements
- Workshop recaps

### 🚀 **How to Get Started:**

1. **Get Sanity Access:**
   - Contact a club officer on Discord
   - Request access to our content management system
   - We'll add you to the PROGgsuSite project

2. **Learn the Basics:**
   - Join our #content-team channel on Discord
   - Attend our monthly content contributor training
   - Use our content style guide (ask for link!)

3. **Start Contributing:**
   - Log into [Sanity Studio](http://localhost:3333) (when running locally)
   - Follow the content management guide above
   - Ask questions in Discord - we're here to help!

### 📋 **Content Guidelines:**

**✅ Do:**
- Use clear, engaging language
- Include relevant details (dates, times, locations)
- Add images when possible
- Tag content appropriately
- Proofread before publishing

**❌ Avoid:**
- Publishing without review for major events
- Using unclear or vague titles
- Forgetting to set event dates
- Leaving required fields empty

### 🤝 **Content Team Benefits:**
- Learn content management skills
- Build your digital portfolio
- Network with other club members
- Get priority access to workshops
- Potential leadership opportunities

**Questions?** Reach out in our Discord #content-team channel or ask any officer!

---

## 📞 Get Involved

### 💬 Join Our Community

- **🎮 Discord**: [Join our server](https://discord.gg/your-discord-link) for daily discussions and help
- **📧 Email**: [progclub@gsu.edu](mailto:progclub@gsu.edu) for official inquiries
- **📱 Instagram**: [@progclub_gsu](https://instagram.com/progclub_gsu) for updates and photos

### 🕐 Weekly Meetings
- **When**: Every [Day] at [Time]
- **Where**: [Building Name], Room [Number]
- **Virtual**: Discord voice channel for remote participation

**New to programming?** Perfect! We have beginner-friendly workshops and mentorship programs to help you get started.

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use this code for your own student organization websites!

---

<p align="center">
    <strong>⭐ Star this repo if it helped your student organization!</strong>
</p>

<p align="center">
    <em>Built with ❤️ by PROGgsu members • Powered by the GSU tech community</em>
</p>

<p align="center">
    <strong>"Everyone is welcome" - Our club motto</strong>
</p>
