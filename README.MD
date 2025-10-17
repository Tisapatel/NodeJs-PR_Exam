# 📝 Blog Project (Node.js + Express + MongoDB)

A simple and elegant *Blog Application* built using *Node.js, Express, MongoDB, and EJS*.
This project was created as part of a *Node.js Practical Exam* to demonstrate backend CRUD operations, authentication, and dynamic rendering with EJS templates.

---

## 🚀 Features

- ✅ User authentication (Login & Signup) using JWT or cookies
- ✅ Create, Read, Update, and Delete blog posts
- ✅ EJS templating for dynamic UI rendering
- ✅ MongoDB integration for data persistence
- ✅ Middleware for route protection and error handling
- ✅ Organized MVC structure for maintainability
- ✅ Responsive design (Public + Admin views)

---

## 📂 Project Structure

blog-project/
│
├── configs/
│   └── database.js         # MongoDB connection setup
│
├── controllers/            # All route logic (user, blog, etc.)
│
├── models/                 # MongoDB Mongoose schemas
│
├── public/                 # Static files (CSS, JS, images)
│
├── routers/                # Route definitions (index, blog, auth)
│
├── views/                  # EJS templates (home, blog, login, etc.)
│
├── .env                    # Environment variables
├── server.js               # Main server entry point
├── package.json
└── README.md

---

## ⚙ Tech Stack

| Category        | Technology Used        |
| --------------- | -------------------- |
| Backend         | Node.js, Express.js   |
| Database        | MongoDB (Mongoose ORM)|
| Template Engine | EJS                   |
| Authentication  | JWT / Cookie Parser   |
| Middleware      | Body Parser, dotenv   |
| Styling         | CSS / Bootstrap       |

---

## 🧩 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Tisapatel/NodeJs-PR_Exam
cd blog-project
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root directory:

```
PORT=8002
MONGODB_URL=mongodb://localhost:27017/blogdb
SECRET_KEY=your_secret_key
```

### 4️⃣ Run the server

```bash
npm start
# or
node server.js
```

The app will be live at 👉 [http://localhost:8002](http://localhost:8002)

---

## 🖼 Example Routes

| Route               | Description           |
| ------------------- | ------------------- |
| /                   | Home page (All blogs)|
| /login              | User login page      |
| /register           | New user registration|
| /blogs/create       | Create new blog      |
| /blogs/:id/edit     | Edit blog            |
| /blogs/:id/delete   | Delete blog          |

---

## 🧠 Learning Outcomes

This project helps you understand:

- How to structure a Node.js + Express app using MVC
- How to use EJS for rendering dynamic data
- How to handle CRUD operations with MongoDB
- How to implement authentication and middleware

---

## 🌐 Live Preview

🔗 *Live Link:* https://nodejs-pr-exam-1.onrender.com/

---

## 👨‍💻 Author

*Tisa Patel*  
💼 Full Stack Developer | MERN Stack | Node.js  
📧 Email: [trpatel.sd21@gmail.com](mailto:trpatel.sd21@gmail.com)

---

## 📜 License

This project is licensed under the *MIT License* — feel free to use and modify it.
