import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import AppLayout from "./Components/misc/AppLayout"
import Dashboard from "./pages/Dashboard"
import Applications from "./pages/Applications"
import Resumes from "./pages/Resumes"
import Ats from "./pages/Ats"
import Settings from "./pages/Settings"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "signin" element = {<Signin />} /> 
      <Route element = {<AppLayout />}>
        <Route path="/dashboard" element = {<Dashboard />} />
        <Route path="/applications" element = {<Applications />} />
        <Route path="/resumes" element = {<Resumes />} />
        <Route path="/ats" element = {<Ats />} />
        <Route path="/settings" element = {<Settings />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
} 