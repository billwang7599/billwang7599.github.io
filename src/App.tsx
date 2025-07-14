import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Hero } from "./pages/hero";
import { Experience } from "./pages/experience";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Navbar, NavItems } from "./components/navbar";
import { Scrollbar } from "./components/scrollbar";

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const navItems: NavItems[] = [
        { title: "Home", ref: homeRef },
        { title: "Experience", ref: experienceRef },
        { title: "Projects", ref: projectsRef },
        { title: "Contact", ref: contactRef },
    ];

    return (
        <>
            <div
                className="flex flex-col bg-bg text-secondary overflow-hidden"
                ref={containerRef}
            >
                <Navbar navItems={navItems} />
                <div ref={homeRef}>
                    <Hero />
                </div>
                <div ref={experienceRef}>
                    <Experience />
                </div>
                <div ref={projectsRef}>
                    <Projects />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
                <Scrollbar containerRef={containerRef} />
            </div>
            <footer className="w-full py-6 flex flex-col items-center border-t border-gray-200 bg-white bg-opacity-80 text-gray-500 text-sm">
                <span>
                    &copy; {new Date().getFullYear()} Bill Wang. All rights
                    reserved.
                </span>
                <span>Built with React, GSAP, and Tailwind CSS.</span>
            </footer>
        </>
    );
}

export default App;
