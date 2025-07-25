📊 Businify - Syncfusion Admin Dashboard — Full Stack App
A modern full-stack admin dashboard built using React.js (frontend) and Node.js + Express + MongoDB (backend). It provides a responsive UI, theming support, dynamic charts, tables, Kanban board, and a user authentication system.

🔧 Tech Stack
🖥 Frontend
React.js
Tailwind CSS
Syncfusion React Components (Charts, Tables, Calendar, Kanban)
CRACO (for configuration overrides)
ESLint
🔙 Backend
Node.js
Express.js
MongoDB + Mongoose
JWT (Authentication)
dotenv
🗂 Project Structure
project/ ├── frontend/ # React frontend (Syncfusion dashboard) │ ├── src/ │ ├── public/ │ ├── tailwind.config.js │ ├── craco.config.js │ └── package.json

├── backend/ # Node.js backend │ ├── models/ # Mongoose schemas │ │ └── User.js │ ├── routes/ # API routes │ │ └── auth.js │ ├── .env # Environment variables │ ├── server.js # Express app │ └── package.json

⚙️ Getting Started
📁 Clone the Repository
git clone https://github.com/DushyantSharma2006/Businify.git
cd Businify

🖥 Frontend Setup (React + Tailwind CSS)
Navigate to the frontend directory:
cd project_syncfusion_dashboard-main

Install dependencies:
npm install

Start the development server:
npm start
Frontend will run on http://localhost:3000

🔧 Backend Setup (Node.js + MongoDB)
Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Create a .env file in the backend/ folder:
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your_jwt_secret_key

Start the backend server:
node server.js
Backend will run on http://localhost:5000

✅ Features
🔹 Frontend
Responsive Syncfusion dashboard UI

Interactive charts, tables, calendar

Kanban task management board

Dark/light mode toggle

Fully styled with Tailwind CSS

🔹 Backend
User registration and login

JWT-based authentication

MongoDB data storage using Mongoose

🧪 API Endpoints
Method	     Endpoint	              Description
POST	    /api/auth/register	      Register a new user
POST	    /api/auth/login	          Login existing user

🛠 Build for Production
npm run build

🙌 Acknowledgements
Syncfusion React UI
Tailwind CSS
MongoDB + Mongoose
Express.js

👤 Author
Dushyant Sharma
Github= https://github.com/DushyantSharma2006
