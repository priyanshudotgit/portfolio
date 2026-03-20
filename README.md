# Developer Portfolio

A sleek, modern developer portfolio built with React and Vite. Designed to showcase projects, skills, and certifications with a focus on clean aesthetics and smooth user experiences.

## 🌐 Live Preview
- [Live Demo](https://priyanshudotdev.vercel.app/)

## ✨ Features

- **Modern Tech Stack**: Powered by React 19, Vite, and Tailwind CSS v4.
- **Beautiful UI Elements**: Uses `lucide-react` for crisp icons and bespoke Tailwind utility classes for top-tier styling.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Interactive Components**: Features section reveals, a dedicated certificate preview modal, and smooth scrolling.
- **Fast & Lightweight**: Built with Vite for rapid development and optimized production builds.

## 🚀 Quick Start

Follow these steps to get the project running on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (or navigate to the project folder):
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser to view the portfolio.

## 🛠️ Built With

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide React](https://lucide.dev/) - Iconography

## 📝 Customization

- **Content**: Update the components within `src/components/sections/` (like `Hero.jsx`, `Projects.jsx`, `Certificates.jsx`) to add your personal details.
- **Styling**: Tailor the overall theme by adjusting the Tailwind configuration or the global CSS classes.
- **Certificates**: Add preview images for your certifications by supplying an `image` URL property to your `certs` object array within `Certificates.jsx`.
- **Assets**: Swap out placeholder assets in `public/` and reference them directly in your components.

---