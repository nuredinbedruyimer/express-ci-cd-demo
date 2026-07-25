import express, { Request, Response } from "express";

const app = express();

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    age: 28,
    role: "admin",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    age: 25,
    role: "user",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 32,
    role: "user",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    age: 22,
    role: "editor",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    age: 35,
    role: "user",
  },
];

app.use(express.json());

app.get("/health", async (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API is healthy",
  });
});

app.get(
  "/users",
  async (_request: Request, response: Response): Promise<Response> => {
    const filteredUsers = users.filter((user) => user.age >= 18);
    return response.json({
      users: filteredUsers,
      success: true,
      messsage: "users fetched successfully !!!",
    });
  },
);

export default app;
