# **Typescript Serverless Challenge**

This repository contains a monorepo setup using npm workspaces to create and test a serverless application. The application includes a Lambda function that responds to HTTP requests and returns a greeting message.

---

## **Features**
- **Lambda Function**: Accepts a `name` query parameter and responds with `Hello, <name>`. Defaults to `Hello, World` if no name is provided.
- **Monorepo**: Organized using npm workspaces.
- **Testing**: Unit tests written in Jest.
- **Linting**: Ensures code quality using ESLint.
- **Swagger Documentation**: Provides OpenAPI documentation for the API.


## **Prerequisites**
- Node.js (v14 or later)
- npm (v7 or later)

---

## **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-name>
2. Install all dependencies and run lint:
   ```bash
   npm install
   npm run lint
3. running locally:
   ```bash
   cd src/function
   npm run start
4. Run unit test file:
   ```bash
   npm test

