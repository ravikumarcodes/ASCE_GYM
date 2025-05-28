# ASCE_GYM - Full Stack Gym Management Website 💪

Welcome to the ASCE_GYM Website — a responsive and feature-rich full-stack platform built for managing gym operations like memberships, class schedules, trainer profiles, blogs, and more.

---

## 🌟 Features

- ✅ Modern, mobile-responsive UI (React + Tailwind)
- ✅ Secure user authentication using JWT
- ✅ Membership plans and registration
- ✅ Class schedule with trainer information
- ✅ Trainer profiles with auto-generated images
- ✅ Blog section for fitness articles
- ✅ Contact form for user inquiries
- ✅ Razorpay payment integration
- ✅ Gym Timings: **10:00 AM to 10:00 PM (Monday to Friday)**

---

## 🛠 Tech Stack

| Layer      | Technology Used           |
|------------|---------------------------|
| Frontend   | React + Vite + TailwindCSS|
| Backend    | Node.js + Express.js      |
| Database   | MongoDB + Mongoose        |
| Auth       | JWT (JSON Web Token)      |
| Payment    | Razorpay                  |
| Deployment | (Add your deployed link)  |

---

## 🧑‍💻 Project Setup Instructions

### 📁 1. Clone the Repository

```bash
git clone https://github.com/ravikumarcodes/ASCE_GYM.git
cd ASCE_GYM
```

---

### ⚙️ 2. Backend Setup

```bash
cd server
npm install
```

🔐 Create a `.env` file inside the `/server` folder with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/asce_gym
JWT_SECRET=mysecretkey123
JWT_EXPIRES_IN=1h
```

Then run the server:

```bash
npm start
```

---

### 💻 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

> Open your browser at: [http://localhost:5173]

---

### 📁 Folder Structure

```
ASCE_GYM/
├── client/     # React frontend
├── server/     # Node.js backend
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
```

---

## ⏰ Gym Timings

**Monday to Friday**  
🕙 10:00 AM – 10:00 PM

---

## 👤 Developed By

**Ravi Kumar**  
📧 Email: [ravikumar546318@gmail.com] 
🔗 LinkedIn: [linkedin.com/in/ravi-kumar-616573282]

---

## 📝 License

This project is part of the **INFO BHARAT INTERN's** Internship program.  
Use is permitted for learning and portfolio purposes only.