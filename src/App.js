import "./style.css"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"

import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Work from "./pages/Work"
import Contact from "./pages/Contact";
import {motion,useScroll} from "framer-motion"
import Certs from "./pages/Certs";
export const ThemeContext = createContext();

function App() {
    const [theme, changeTheme] = useState("light");
    const { scrollYProgress } = useScroll();
    return (
        <>
            <NavBar newTheme={changeTheme} />
            <ThemeContext.Provider value={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-work" element={<Work/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/certs" element={<Certs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </ThemeContext.Provider>
            <motion.div style={{ scaleX: scrollYProgress,zIndex:5} }className="progress-bar">
            </motion.div>
          
        </>
    )
}

export default App;
