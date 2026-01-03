# React Routing & Protected Routes – Real-World Example

This project demonstrates how **routing works in real React applications**
using **Login, Dashboard, and Protected Routes**.

It is designed for **students and beginners** to understand how
authentication-based navigation works in **admin panels, dashboards,
and SaaS apps**.

---

## 🚀 What This Project Covers

- React Router setup
- Public and protected routes
- Login → Dashboard flow
- Redirect if user is not authenticated
- Logout and route protection
- Real-world navigation structure

---

## 🧠 Why Routing is Important in React

Without routing:
- A React app feels incomplete
- No page navigation
- No real application flow

With routing:
- Multiple pages (Login, Dashboard, etc.)
- Access control
- Better user experience
- Industry-ready structure

---

## 🔐 What are Protected Routes?

Protected routes are pages that:
- **Require authentication**
- Cannot be accessed directly by URL
- Redirect unauthenticated users to Login page

Example:
- `/dashboard` → accessible only after login
- `/login` → public page

---

## 🌍 Real-World Use Cases

This exact pattern is used in:
- Admin panels
- E-commerce dashboards
- Banking applications
- SaaS platforms
- Internal company tools

---
 first install:
 npm i react-router-dom
## 📂 Project Structure
src/
│── App.js
│
├── pages/
│ ├── Login.js // Public route
│ ├── Dashboard.js // Protected route
│ └── NotFound.js // 404 page
│
├── routes/
│ └── ProtectedRoute.js
│
└── styles/
└── auth.css


---

## 🧩 Key Concept: ProtectedRoute

```js
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

if (!isLoggedIn) {
  return <Navigate to="/login" replace />;
}


✔ If user is not logged in → redirect to login
✔ If logged in → allow access

🔑 Demo Login Credentials
Email:    admin@gmail.com
Password: 123456


These are demo credentials only.
In real apps, this logic is replaced by API or Firebase authentication.
