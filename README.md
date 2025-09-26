🚀 Scape-Sync a mobile saas platform

This project is a single-page application (SPA) built with Next.js (App Router), styled with TailwindCSS + DaisyUI, and connected to an external backend via provided Postman API endpoints.

It includes a Home page with multiple sections and a full authentication system with:

✅ User Registration (with validation & terms checkbox)

✅ User Login (JWT token saved in context/localStorage)

✅ Forgot Password (request OTP)

✅ Verify OTP (form-data submission)

✅ Reset Password (with token from OTP flow)

✅ Logout & User Detail fetching

✅ Loading states + error handling

📂 Project Structure
app/
 ├── layout.tsx          # Root layout
 ├── page.tsx            # Home page (sections from Figma)
 ├── auth/
 │   ├── login/page.tsx  # Login page
 │   ├── register/page.tsx # Register page
 │   ├── forgot-password/page.tsx # Request OTP
 │   ├── verify-otp/page.tsx      # OTP verification
 │   └── reset-password/page.tsx  # Reset password
components/
 ├── Navbar.tsx
 ├── Footer.tsx
 └── forms/              # Reusable form + error components
context/
 └── AuthContext.tsx     # Manages user + token
lib/
 └── api.ts              # Axios instance with baseURL + interceptors

🔑 Authentication Flow

Register → User enters details → form-data POST → redirect to Login

Login → POST with form-data → backend returns token → saved in AuthContext + localStorage

Forgot Password → enter email → backend sends OTP

Verify OTP → enter email + OTP (form-data) → backend verifies → token provided

Reset Password → new password + token submitted → password updated

Logout → token cleared, user context reset

🛠️ Tech Stack

Framework: Next.js 15 (App Router)

Styling: TailwindCSS
 + DaisyUI

State: React Context API (AuthContext)

HTTP Client: Axios (configured in lib/api.ts)

Forms: Custom validation with field-level errors

📦 Installation
# Clone the repository
git clone https://github.com/samir-45/scape-sync.git

# Navigate into the folder
cd scape-sync

# Install dependencies
npm install

# Run the dev server
npm run dev

📌 Notes

All API requests use multipart/form-data as required by backend.

JWT token is stored in localStorage and injected into Authorization headers via Axios interceptors.

DaisyUI theme is locked to light mode (customizable in tailwind.config.js).

Future improvements: we can add Dashboard, Profile page, or other routes easily.

👨‍💻 Author

Developed by Mahin Khan

- Portfolio : https://mahin-portfolio-site.netlify.app/

- LinkedIn : https://www.linkedin.com/in/devmahin 

- GitHub : https://github.com/samir-45