import React, {useState} from "react";

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function login(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(username + " " + password);
  }

  return (
      <>
        <div className="h-screen bg-slate-100">
          <div className="flex justify-center items-center h-full">
            <div className="bg-white p-4 rounded-lg">
              <h1 className="text-2xl font-bold">Login</h1>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username"
                         className="w-full border border-gray-300 rounded-lg p-2" value={username}
                         onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password"
                         className="w-full border border-gray-300 rounded-lg p-2" value={password}
                         onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                  <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(e) => login(e)}>login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
  )
}
