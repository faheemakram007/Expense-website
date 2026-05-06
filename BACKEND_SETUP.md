# Backend API Setup - JSON Server

This project uses JSON Server to provide a simple REST API for expense management.

## Setup Instructions

### 1. Start the Backend Server

Open a terminal and run:

```bash
npm run server
```

This will start the JSON Server on `http://localhost:3001`

### 2. Start the Frontend Development Server

Open a **new terminal** (keep the backend server running) and run:

```bash
npm run dev
```

This will start the Vite development server (usually on `http://localhost:5173`)

## Available API Endpoints

The JSON Server automatically creates RESTful endpoints based on your `db.json` file:

### Expenses

- **GET** `/expenses` - Get all expenses
- **GET** `/expenses/:id` - Get a specific expense by ID
- **POST** `/expenses` - Create a new expense
- **PUT** `/expenses/:id` - Update an expense
- **DELETE** `/expenses/:id` - Delete an expense

### Example Requests

#### Get all expenses
```bash
curl http://localhost:3001/expenses
```

#### Create a new expense
```bash
curl -X POST http://localhost:3001/expenses \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Food",
    "date": "26-03-2026",
    "amount": "Rs 500",
    "paid": "Yes",
    "method": "Cash",
    "desc": "Lunch"
  }'
```

#### Delete an expense
```bash
curl -X DELETE http://localhost:3001/expenses/1
```

## Data Storage

All data is stored in the `db.json` file in the project root. The file is automatically updated when you create, update, or delete expenses.

## API Documentation

JSON Server provides a built-in API documentation. Visit:
- `http://localhost:3001` - Home page with links to resources
- `http://localhost:3001/expenses` - Direct access to expenses endpoint

## Features

- ✅ Automatic REST API generation
- ✅ Real-time data updates
- ✅ CORS enabled (works with React frontend)
- ✅ File-based storage (no database needed)
- ✅ Easy to test and debug

## Troubleshooting

### Port already in use
If port 3001 is already in use, you can change it in `package.json`:
```json
"server": "json-server --watch db.json --port 3002"
```

### CORS errors
JSON Server has CORS enabled by default. If you encounter CORS issues, make sure the backend server is running.

### Data not persisting
Make sure you're using the `--watch` flag in the server command (already included in the npm script).

## Next Steps

Once the backend is running, your React application will automatically:
- Fetch expenses on page load
- Create new expenses via the form
- Delete expenses via the delete button
- Show loading states and success/error messages