import './App.css'

import { Navbar, Home, Footer } from "./components";

const App = () => {
  return (
    <div className="min-h-screen"> 
    <div className="gradient-bg-welcome"> 
    <Navbar /> 
    <Home /> 
    </div> 
    <Footer /> 
    </div>
    )
}

export default App