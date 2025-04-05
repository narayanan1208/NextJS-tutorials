import { revalidatePath } from "next/cache";
import { auth, currentUser } from "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
};

const MockUsers = async () => {
  const authObj = await auth();
  const userObj = await currentUser();

  if (!authObj || !userObj) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">You are not logged in</h1>
      </div>
    );
  }

  const res = await fetch("https://67f10e70c733555e24ac0a17.mockapi.io/users");
  const users = await res.json();

  const addUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const response = await fetch(
      "https://67f10e70c733555e24ac0a17.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await response.json();
    revalidatePath("/mock-users");
  };

  return (
    <div className="py-10">
      <form action={addUser} className="mb-4">
        <input
          type="text"
          name="name"
          required
          className="border p-2 mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4 py-10">
        {users.map((user: MockUser) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            {user.name}
          </li>
        ))}
      </div>
    </div>
  );
};
export default MockUsers;
