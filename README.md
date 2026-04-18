
# 🌿 Green Spot (Server Side)

🔗 **Live API Link:** [https://green-spot-server.vercel.app](https://green-spot-server.vercel.app)

## 📖 Project Overview

This is the backend server for the **Green Spot — Community Cleanliness Portal**. It serves as the bridge between the frontend and the MongoDB database, handling secure issue reporting, data persistence, and community contribution tracking. Built with **Node.js**, **Express.js**, and **MongoDB**.

The server is designed to be lightweight, efficient, and secure, ensuring that citizens' reports are stored and retrieved reliably.

---

## ✨ Key Features

- 📂 **Issue Management:** API endpoints for creating, reading, and updating community reports.
- 🔐 **Data Security:** Environment variables protection using `dotenv`.
- 🌐 **CORS Enabled:** Configured for secure cross-origin requests from the frontend.
- 📊 **Query Filtering:** Ability to fetch reports based on categories or user history.
- ⚡ **Optimized Performance:** Fast data retrieval using MongoDB indexing.

---

## 🛠️ Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Security:** Cors & Dotenv

---

## ⚙️ Server Side Setup (Backend)

Follow these steps to run the server locally:

1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/roky18/green-spot-server.git](https://github.com/roky18/green-spot-server.git)
   cd green-spot-server
```
```
2. Install dependencies:

Bash
```
npm install
```
3. Environment Variables:
Create a .env file in the root directory and add the following keys:

Code snippet
```
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
```
  4. Run the server:

Bash
```
node index.js
```
👤 Author
MD RAKIBUL ISLAM ROKY
- ** Email: roky18bd@gmail.com
- ** LinkedIn: https://linkedin.com/in/roky18
- ** 📞 Mobile: +8801727020930
