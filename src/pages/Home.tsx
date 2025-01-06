import {NavLink} from "react-router";

export default function Home() {


  return (
      <>
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <h1>Welcome to the Home Page !!!</h1>
          <br></br>
          <NavLink to="/user" end>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              user management
            </button>
          </NavLink>
        </div>
      </>
  )
}
