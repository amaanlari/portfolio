import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import Home from "@/pages/home.tsx";
import {Route, Routes} from "react-router-dom";
import AboutMe from "@/pages/about-me.tsx";
import ResumePage from "@/pages/resume-page.tsx";
import Blog from "@/pages/blog.tsx";
import Navigation from "@/components/navigation.tsx";

function App() {

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className={"container md:pb-2 pb-16"}>
            <Navigation/>
            <div className={"md:overflow-hidden overflow-scroll"}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-me" element={<AboutMe/>}/>
                    <Route path="/resume" element={<ResumePage/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    {/*<Route path={"/contact"} element={<div>Contact</div>}/>*/}
                </Routes>
            </div>
            </div>
        </ThemeProvider>
    )
}

export default App
