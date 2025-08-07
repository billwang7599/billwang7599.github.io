import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import jadePendant from "../assets/jade-pendant.png";

export default function Contact() {
    const pendantRef = useRef<HTMLImageElement>(null);
    const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        // Animate pendant entrance
        if (pendantRef.current) {
            gsap.fromTo(
                pendantRef.current,
                { opacity: 0, scale: 0.7, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
            );
        }
        // Animate buttons with stagger
        gsap.fromTo(
            buttonsRef.current,
            { opacity: 0, x: 40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15,
                delay: 0.5,
            },
        );
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16">
            {/* Left: Spinning Jade Pendant */}
            <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
                <img
                    ref={pendantRef}
                    src={jadePendant}
                    alt="Jade Pendant"
                    className="bg-cover grayscale animate-spin-slow"
                />
            </div>
            {/* Right: Contact Buttons */}
            <div className="flex-1">
                <div className="flex flex-col items-center md:items-start gap-6 w-fit bg-white bg-opacity-80 rounded-xl shadow-lg p-16 border border-gray-200">
                    <h2 className="text-5xl font-extrabold text-gray-800 drop-shadow">
                        Contact Me
                    </h2>
                    <p className="text-gray-500 text-lg font-light">
                        Thanks for stopping by! I'm always open to new
                        opportunities and connections.
                    </p>
                    <div className="flex flex-col md:flex-row w-full gap-4">
                        <a
                            ref={(el) => {
                                buttonsRef.current[0] = el;
                            }}
                            href="mailto:billwang7599@gmail.com"
                            className="flex items-center gap-3 px-6 py-3 rounded-lg text-white hover:shadow-xl transition-all duration-300 relative group overflow-hidden min-w-[48px]"
                        >
                            <FaEnvelope className="text-black min-w-[20px]" />
                            <span className="whitespace-nowrap text-black opacity-0 max-w-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                billwang7599@gmail.com
                            </span>
                        </a>
                        <a
                            ref={(el) => {
                                buttonsRef.current[1] = el;
                            }}
                            href="https://linkedin.com/in/bw7599"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-lg text-black hover:shadow-xl transition-all duration-300 relative group overflow-hidden min-w-[48px]"
                        >
                            <FaLinkedin className="text-white min-w-[20px]" />
                            <span className="whitespace-nowrap text-white opacity-0 max-w-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                LinkedIn
                            </span>
                        </a>
                        <a
                            ref={(el) => {
                                buttonsRef.current[2] = el;
                            }}
                            href="https://github.com/billwang7599"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-700 text-white hover:shadow-xl transition-all duration-300 relative group overflow-hidden min-w-[48px]"
                        >
                            <FaGithub className="text-white min-w-[20px]" />
                            <span className="whitespace-nowrap text-white opacity-0 max-w-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Custom slow spin animation */}
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin 30s linear infinite;
                }


                `}
            </style>
        </div>
    );
}
