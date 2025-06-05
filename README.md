# Loyal Furniture E-Commerce

A modern, modular, and responsive furniture e-commerce web application built with Next.js, React, and TypeScript.

## ✨ Features
- Modular component architecture (Hero, ProductSection, CategoryCards, etc.)
- Responsive design with mobile-first layouts
- Dynamic category pages with robust error handling
- Reusable UI components and consistent design system
- TypeScript strict mode and type-safe forms
- Modern OKLCH color palette and Tailwind CSS

## 🚀 Tech Stack
- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📦 Project Structure
```
app/
  (root)/
    components/
      Hero.tsx
      furniture-hero.tsx
      ...
    category/[category_name]/page.tsx
    category/page.tsx
    ...
components/
  category-cards.tsx
  hero-image.tsx
  ...
lib/
  mock-data.ts
  utils.ts
public/
  ...
```

## 📋 Changelog
See [CHANGELOG.md](./CHANGELOG.md) for a detailed history of features, improvements, and fixes.

## 🛠️ Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

## 🤝 Contributing
Pull requests and issues are welcome! Please see the [changelog](./CHANGELOG.md) for recent updates and best practices.

## 📄 License
MIT