const API_BASE_URL = "http://localhost:3001";

// Get all expenses
export const getExpenses = async () => {
  const response = await fetch(`${API_BASE_URL}/expenses`);
  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }
  return response.json();
};

// Create a new expense
export const createExpense = async (expense) => {
  const response = await fetch(`${API_BASE_URL}/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  if (!response.ok) {
    throw new Error("Failed to create expense");
  }
  return response.json();
};

// Update an expense
export const updateExpense = async (id, expense) => {
  const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  if (!response.ok) {
    throw new Error("Failed to update expense");
  }
  return response.json();
};

// Delete an expense
export const deleteExpense = async (id) => {
  const response = await fetch(`${API_BASE_URL}/expenses/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete expense");
  }
  return response.json();
};