# 🛡️ PrivacyHub

A modern Consent Management Platform (CMP) built with **Fastify** and **Next.js**, designed to simulate real-world privacy compliance systems like Usercentrics.

---

## 🚀 Overview

PrivacyHub is a full-stack application that allows websites to:

* Collect user consent for cookies
* Persist consent decisions
* Manage consent state on the frontend
* Provide a foundation for privacy-compliant analytics

This project was built as a hands-on learning experience to explore:

* Modern React architecture
* High-performance backend with Fastify
* Real-world consent management flows

---

## 🧠 Key Features

### ✅ Consent Banner

* Accept / Reject cookies
* Persist consent in localStorage
* Send consent to backend API

### ✅ API (Fastify)

* RESTful endpoints
* Validation with Zod
* Clean architecture (Controller → Service → Repository)
* Prisma ORM integration

### ✅ Frontend (Next.js)

* App Router
* React Query for server state
* Axios with interceptors
* Custom hooks for state management

---

## 🏗️ Architecture

```
apps/
  api/   → Fastify + Prisma
  web/   → Next.js + React Query

Flow:
User → Banner → API → Database → UI state
```

---

## 🧰 Tech Stack

### Backend

* Fastify
* Prisma
* PostgreSQL
* Zod

### Frontend

* Next.js (App Router)
* React
* React Query
* Axios
* Tailwind CSS

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/privacyhub.git
cd privacyhub
```

---

### 2. Setup Backend

```bash
cd apps/api

npm install
npx prisma migrate dev
npm run dev
```

---

### 3. Setup Frontend

```bash
cd apps/web

npm install
npm run dev
```

---

## ⚙️ Environment Variables

### Backend (`apps/api/.env`)

```
DATABASE_URL="postgresql://user:password@localhost:5432/privacyhub"
```

---

### Frontend (`apps/web/.env.local`)

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3333
```

---

## 🔌 API Endpoints

### Create Consent

```
POST /consent
```

```json
{
  "analytics": true,
  "marketing": false
}
```

---

## 🧪 Example Flow

1. User visits the website
2. Consent banner is displayed
3. User accepts or rejects cookies
4. Frontend sends data to API
5. API persists consent
6. UI updates and hides banner

---

## 📈 Future Improvements

* [ ] Consent categories customization
* [ ] Analytics dashboard
* [ ] Script blocking based on consent
* [ ] Redis caching
* [ ] Consent versioning
* [ ] Multi-domain support

---

## 🎯 Purpose

This project was built to simulate real-world challenges in:

* Privacy compliance systems
* Scalable backend architecture
* Modern frontend state management

---

## 👨‍💻 Author

William Barbosa
Full Stack Developer (Node.js | React)

---

## 📄 License

MIT
