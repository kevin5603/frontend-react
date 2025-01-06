import {ChangeEvent, useState} from "react";
import User from "../model/user.tsx";
import {loginService} from "../service/LoginService.tsx";


export default function UserManagement() {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  async function showUsers() {
    const users = await loginService.getUsers();
    if (users) {
      console.log(users);
      setUsers(users);
    }
  }

  async function findUserByName() {
    const user: User = await loginService.findUserByName(username);
    if (user) {
      console.log(user);
      setUsers([user]);
    }
  }

  async function saveUser() {
    const user: User = {name: username, age: age};
    await loginService.saveUser(user);
    console.log("save user: " + user);
    await showUsers();
  }

  async function removeUser(id: number | undefined) {
    await loginService.deleteUser(id);
    console.log("delete user: " + id);
    await showUsers();
  }

  function handleUsernameInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setUsername(value);
  }

  function handleAgeInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setAge(Number(value));
  }

  return (
      <>
        <div className="min-h-screen bg-gray-200">
          {/* 上方表單區域 */}
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>

            {/* 輸入表單 */}
            <div
                className="bg-white p-4 rounded shadow mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <div className="flex flex-col mb-2 sm:mb-0">
                <label htmlFor="name" className="mb-1 text-gray-700 font-semibold">
                  Name
                </label>
                <input
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                    name="name"
                    id="name"
                    value={username}
                    onChange={handleUsernameInputChange}
                />
              </div>

              <div className="flex flex-col mb-2 sm:mb-0">
                <label htmlFor="age" className="mb-1 text-gray-700 font-semibold">
                  Age
                </label>
                <input
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
                    name="age"
                    id="age"
                    value={age}
                    onChange={handleAgeInputChange}
                />
              </div>

              <div className="flex space-x-2 mt-2 sm:mt-0">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                    onClick={showUsers}
                >
                  Show All
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                    onClick={findUserByName}
                >
                  Find By Name
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
                    onClick={saveUser}
                >
                  Save
                </button>
              </div>
            </div>

            {/* 使用者列表 */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">Users</h2>
              {users.length === 0 ? (
                  <p className="text-gray-500">No users found.</p>
              ) : (
                  <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="border border-gray-300 px-3 py-2">ID</th>
                      <th className="border border-gray-300 px-3 py-2">Name</th>
                      <th className="border border-gray-300 px-3 py-2">Age</th>
                      <th className="border border-gray-300 px-3 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => {
                      return (
                          <tr key={user.id} className="text-center">
                            <td className="border border-gray-300 px-3 py-2">
                              {user.id}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                              {user.name}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                              {user.age}
                            </td>
                            <td className="border border-gray-300 px-3 py-2">
                              <button
                                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                  onClick={() => removeUser(user.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                      );
                    })}
                    </tbody>
                  </table>
              )}
            </div>
          </div>
        </div>
      </>
  )
}
