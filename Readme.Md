<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>

<p align="center">
    <h1 align="center">TASKMANAGEMENT_SEEQUENZE_TECH_SERVER</h1>
</p>

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## Description

TaskManagement is a comprehensive task management application designed to help users efficiently manage their tasks. The application includes features such as basic CRUD operations for tasks, a UI slider for navigating between task categories, advanced async operations to fetch streaming data, and automatic task timeout handling.

---

### Live Site : [Live Link](https://task-management-seequenze-tech-client.vercel.app/)

### Client Repo: [Client Repo Link](https://github.com/habib-153/TaskManagement_Seequenze_Tech_Client.git)

##  Repository Structure

```sh
└── TaskManagement_Seequenze_Tech_Server/
    ├── Readme.Md
    ├── eslint.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app
    │   │   ├── builder
    │   │   │   └── QueryBuilder.ts
    │   │   ├── config
    │   │   │   └── index.ts
    │   │   ├── errors
    │   │   │   ├── AppError.ts
    │   │   │   ├── handleCastError.ts
    │   │   │   ├── handleDuplicateError.ts
    │   │   │   ├── handleValidationError.ts
    │   │   │   └── handleZodError.ts
    │   │   ├── interface
    │   │   │   ├── error.ts
    │   │   │   └── index.d.ts
    │   │   ├── middlewares
    │   │   │   ├── globalErrorHandler.ts
    │   │   │   ├── notFound.ts
    │   │   │   └── validateRequest.ts
    │   │   ├── modules
    │   │   │   ├── task
    │   │   │   │   ├── task.constant.ts
    │   │   │   │   ├── task.controller.ts
    │   │   │   │   ├── task.interface.ts
    │   │   │   │   ├── task.model.ts
    │   │   │   │   ├── task.route.ts
    │   │   │   │   ├── task.service.ts
    │   │   │   │   └── task.validation.ts
    │   │   │   └── twitch
    │   │   │       ├── twitch.controller.ts
    │   │   │       ├── twitch.route.ts
    │   │   │       └── twitch.service.ts
    │   │   ├── routes
    │   │   │   └── index.ts
    │   │   └── utils
    │   │       ├── catchAsync.ts
    │   │       ├── sendResponse.ts
    │   │       └── updateExpiredTasks.ts
    │   ├── app.ts
    │   └── server.ts
    ├── tsconfig.json
    └── vercel.json
```
---

- **Endpoints**:
  - `GET /tasks`: Fetch all tasks.
  - `GET /tasks/:id`: Fetch a single task by ID.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update a task by ID.
  - `DELETE /tasks/:id`: Delete a task by ID.

##  Getting Started

###  Installation

1. Clone the TaskManagement_Seequenze_Tech_Server repository:

```sh
git clone https://github.com/habib-153/TaskManagement_Seequenze_Tech_Server.git
```

2. Change to the project directory:

```sh
cd TaskManagement_Seequenze_Tech_Server
```

3. Install the dependencies:

```sh
npm install
```

4. Run the server

```sh
npm run start:dev
```
