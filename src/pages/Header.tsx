import {NavLink} from "react-router";


export default function Header() {
  return (
      <>
        <nav className="flex items-center justify-between p-4 bg-slate-100">
          <NavLink to="/" end>
            home
          </NavLink>

          <NavLink to="/login" end>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              login
            </button>
          </NavLink>
        </nav>
      </>
  )
}
