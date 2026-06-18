# 🎓 Studo – MJPRU Campus Only Social Media

> A secure, university-exclusive social media platform designed for MJPRU students, where only verified students can connect, collaborate, and engage in campus activities.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Status](https://img.shields.io/badge/Status-Under%20Development-orange)

---

## 📖 About

**Studo** is a private campus ecosystem built exclusively for **MJPRU students**. Unlike traditional social media platforms, Studo only allows verified university students to create accounts through Student ID, University Email, or Fee Slip verification.

The platform is designed to improve campus communication, academic collaboration, student safety, and community engagement.

---

## ✨ Features

### 🔐 Secure Student Verification
- Student ID verification
- University Email verification
- Fee Slip verification
- Admin approval before account activation
- Verified Student Badge

### 👤 Student Profiles
- Personal profile
- Course & Semester
- Bio
- Skills & Interests
- Profile picture
- Privacy settings

### 📰 Campus Feed
- Create posts
- Like & Comment
- Share updates
- Upload images
- Campus discussions

### 📚 Notes Sharing
- Upload PDF notes
- Download notes
- Subject-wise filtering
- Semester-wise filtering
- Previous year papers

### 🛒 Campus Marketplace
Buy & sell second-hand items:
- Books
- Calculators
- Electronics
- Hostel essentials
- Study materials
- Furniture

### 🔍 Lost & Found
Students can:
- Report lost items
- Report found items
- Upload images
- Mention location
- Help rightful owners recover belongings

### 🎉 Campus Events
- Workshops
- Seminars
- Cultural events
- Sports events
- Club activities

### 👥 Communities
- Department groups
- Coding Club
- Hostel groups
- Study circles
- Student organizations

### 💬 Real-Time Chat
- Private messaging
- Group chat
- Typing indicator
- Read receipts

### 💼 Internship & Career
- Internship opportunities
- Placement updates
- Referral posts
- Career discussions

---

## 🛡️ Privacy & Security

Student safety is the highest priority.

- Mobile numbers remain hidden by default
- Email visibility is optional
- Block users
- Report users
- Report inappropriate posts
- Admin moderation
- Verified student-only access
- Secure authentication

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Authentication
- JWT Authentication
- bcrypt Password Hashing

### Other Tools
- Multer
- Cloudinary (optional)
- Express Validator
- dotenv

---

## 📂 Project Structure

```
Studo/
│
├── client/
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── pages/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   └── server.js
│
├── database/
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/FaiizanAly/Studo-MJPRU-Campus-Only-Social-Media.git
```

### Navigate into the project

```bash
cd Studo-MJPRU-Campus-Only-Social-Media
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=studo

JWT_SECRET=your_secret_key
```

### Start the server

```bash
npm start
```

or

```bash
npm run dev
```

---

## 📌 Future Improvements

- Mobile application
- Push notifications
- AI-powered content moderation
- Campus map
- QR code student verification
- Online attendance integration
- Digital ID card
- Polls & surveys
- Video calling
- Club management system

---

## 🎯 Project Goals

- Build a secure student community
- Improve campus communication
- Promote academic collaboration
- Enhance student safety
- Simplify event discovery
- Encourage peer-to-peer learning
- Create a centralized campus platform

---

## 🤝 Contributing

Contributions, suggestions, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Developer

**Faizan Ali**

GitHub: https://github.com/FaiizanAly

LinkedIn: https://linkedin.com/in/faiizanaly

Portfolio: https://faizanaly.vercel.app

---

⭐ If you found this project useful, don't forget to **Star** the repository!
