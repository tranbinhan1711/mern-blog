import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";


export default function App() {
  return (
    <BrowserRouter>
      <Router>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects/>} />
          
      </Router>
    </BrowserRouter>
  )
}