# Task Management API
This is a simple Task Management API built with Node.js, Express, and TypeScript. It allows you to create, read, update, and delete tasks. The tasks are stored in a JSON file, ensuring persistence across server restarts.

## Features
* Create a new task
* Retrieve all tasks
* Retrieve a single task by ID
* Update an existing task
* Delete a task
* Error handling and validation

## Installation
Clone the repository:
git clone https://github.com/dimple278/task-management-api.git
cd task-management-api

Install dependencies:
npm install

## Usage
Start the server:
npm run dev

The server will be running at http://localhost:3000.

## API Endpoints
* GET /tasks: Retrieve all tasks

* GET /tasks/
: Retrieve a single task by ID

* POST /tasks: Create a new task
  * title is required.
  * completed is optional and defaults to false.

* PUT /tasks/:
  Update an existing task
  Both title and completed are optional.
* DELETE /tasks/:
    Delete a task

## Error Handling
The API includes comprehensive error handling:
* Returns 400 for bad requests (e.g., invalid task ID or missing title in POST requests).
* Returns 404 for not found errors (e.g., task not found).
* Returns 500 for internal server errors.
