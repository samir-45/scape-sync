```markdown
# 🚀 Scape-Sync: Mobile SaaS Platform

This project is a single-page application (SPA) built with **Next.js 15** (App Router), styled with **TailwindCSS** + **DaisyUI**, and connected to an external backend via provided Postman API endpoints.

It includes a **Home page** with multiple sections and a full **authentication system**.

---

## 🛠️ Tech Stack

| Category | Technology | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) | High performance, full-stack framework. |
| **Styling** | TailwindCSS + DaisyUI | Utility-first CSS with component library. |
| **State Management** | React Context API (`AuthContext`) | Manages user data and JWT token. |
| **HTTP Client** | Axios | Configured with `baseURL` and **interceptors**. |
| **Forms** | Custom | Validation with field-level error handling. |

---

## 🔑 Key Features & Authentication

The platform features a complete, secure authentication flow including:

* ✅ **User Registration** (with validation & terms checkbox)
* ✅ **User Login** (JWT token saved in context/localStorage)
* ✅ **Forgot Password** (request OTP)
* ✅ **Verify OTP** (form-data submission)
* ✅ **Reset Password** (with token from OTP flow)
* ✅ **Logout** & **User Detail** fetching
* ✅ Loading states + error handling

### Authentication Flow Summary

1.  **Register** → User details submitted via `form-data` POST → Redirect to Login.
2.  **Login** → POST `form-data` → Backend returns token → Saved in `AuthContext` + `localStorage`.
3.  **Forgot Password** → Email submitted → Backend sends OTP.
4.  **Verify OTP** → Email + OTP submitted (`form-data`) → Backend verifies → A reset token is provided.
5.  **Reset Password** → New password + reset token submitted → Password updated.
6.  **Logout** → Token cleared, user context reset.

---

## 📂 Project Structure

```

app/
├── layout.tsx         \# Root layout
├── page.tsx           \# Home page (sections from Figma)
└── auth/
├── login/page.tsx       \# Login page
├── register/page.tsx    \# Register page
├── forgot-password/page.tsx \# Request OTP
├── verify-otp/page.tsx  \# OTP verification
└── reset-password/page.tsx \# Reset password

components/
├── Navbar.tsx
├── Footer.tsx
└── forms/             \# Reusable form + error components

context/
└── AuthContext.tsx    \# Manages user + token

lib/
└── api.ts             \# Axios instance with baseURL + interceptors

````

---

## 📦 Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/samir-45/scape-sync.git](https://github.com/samir-45/scape-sync.git)
    ```
2.  **Navigate into the folder:**
    ```bash
    cd scape-sync
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

---

## 📌 Implementation Notes

* All API requests use **`multipart/form-data`** as required by the external backend.
* The **JWT token** is stored in `localStorage` and automatically injected into **`Authorization`** headers via **Axios interceptors**.
* The DaisyUI theme is locked to **light mode** (customizable in `tailwind.config.js`).
* **Future improvements** can easily integrate new routes like `Dashboard` or `Profile` pages.

---

## 👨‍💻 Author

Developed by **Mahin Khan**

* **Portfolio** : [https://mahin-portfolio-site.netlify.app/](https://mahin-portfolio-site.netlify.app/)
* **LinkedIn** : [https://www.linkedin.com/in/devmahin](https://www.linkedin.com/in/devmahin)
* **GitHub** : [https://github.com/samir-45](https://github.com/samir-45)
````