# ☕ Coffee Cafe

![React](https://img.shields.io/badge/React-19.2.1-blue?logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.6-purple?logo=vite\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A responsive **React + Vite** coffee shop website showcasing a menu with categories (hot coffee, cold coffee, tea, specialty drinks, ice creams, food) and smooth animations using **AOS**.

**Live Demo:** [https://coffee-cafe-pi-bice.vercel.app](https://coffee-cafe-pi-bice.vercel.app)

---

## 🚀 Features

* Category-based menu filter (hot, cold, tea, etc.)
* Smooth scroll animations with **AOS**
* Responsive design for mobile & desktop
* Product cards with images, description, and prices
* Clean and modern UI/UX

---

## 🧱 Tech Stack

* **React** — Frontend UI
* **Vite** — Build tooling
* **AOS** — Scroll animations
* **CSS** — Styling
* **Vercel** — Deployment

---

## 📁 Project Structure

```
src/
├─ assets/
├─ components/
│   └─ Navbar.jsx
├─ context/
├─ data/
│   └─ data.js
├─ pages/
│   └─ Menu.jsx
├─ style/
│   └─ menu-page.css
├─ App.jsx
└─ main.jsx
```

---

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/4RN1/sport-store.git
cd sport-store
```

2. Install dependencies:

```bash
npm install
```

---

## 🛠️ Usage

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## 📌 Deployment

Deploy easily on **Vercel**:

1. Create a new Vercel project
2. Connect your GitHub repo
3. Set root directory
4. Deploy

Vercel auto-detects Vite projects and builds them.

---

## ✨ How It Works

* Clicking a **category tab** updates state and shows the selected products.
* Scroll animations are powered by **AOS**.
* Active category is highlighted using conditional CSS classes.

---

## 🧩 Sample Code Snippet

**Category Selection in React:**

```jsx
<li
  className={activeMenu === "hotCoffee" ? "active" : ""}
  onClick={() => {setActiveCategory("hotCoffee"); setActiveMenu("hotCoffee");}}
>
  ცხელი ყავა
</li>
```

**CSS for Active State:**

```css
.category ul li.active {
  background-color: #3a2522;
  color: #ede9dc;
  font-weight: bold;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}
```

---

## 📷 Screenshots

![Homepage](https://user-images.githubusercontent.com/yourusername/screenshots/homepage.png)
*Menu page with categories*

![Mobile View](https://user-images.githubusercontent.com/yourusername/screenshots/mobile.png)
*Responsive mobile design*

> Replace the screenshot URLs with your own images from the project.

---

## 📣 Contributions

Contributions are welcome! Open issues or submit pull requests.

---

## 📄 License

This project is **MIT licensed**.
