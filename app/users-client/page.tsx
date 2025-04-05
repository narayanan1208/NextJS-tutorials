"use client";
import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Failed to fetch users: ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};
export default UsersClient;
