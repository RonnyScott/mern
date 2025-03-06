# MERN Task Manager

A full-stack task management application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- Create, read, update, and delete tasks.
- Task fields: title, description, status, and due date.
- Responsive UI built with Tailwind CSS.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mern-task-manager.git
   cd mern-task-manager
2. Set up the backend:
	cd backend
npm install
echo "MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/task-manager?retryWrites=true&w=majority" > .env
npm start
  
Set up the frontend:

bash
Copy
cd ../frontend
npm install
npm start

## API Endpoints
POST /api/tasks: Create a new task.

GET /api/tasks: Get all tasks.

PUT /api/tasks/:id: Update a task by ID.

DELETE /api/tasks/:id: Delete a task by ID.

Technologies Used
Backend: Node.js, Express, MongoDB, Mongoose.

Frontend: React, Tailwind CSS, Axios.
