import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import UserManagement from "./pages/UserManagement.tsx";
import Header from "./pages/Header.tsx";
import Footer from "./pages/Footer.tsx";
import Login from "./pages/Login.tsx";

function App() {

  return (
      <>
        <BrowserRouter basename="/">
          <div className="flex flex-col h-screen justify-between">
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/user" element={<UserManagement/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </>
  )
}

export default App
