import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ancientChina from "../assets/ancient-china-bg.png";

type Project = {
    title: string;
    description: string;
    github: string;
    image: string;
    link?: string;
};

export default function Projects() {
    const projects: Project[] = [
        {
            title: "Pocket",
            description:
                "A simple free to use budget app. Available on the web and mobile using PWA.",
            github: "https://github.com/billwang7599/Pocket",
            image: "/projects/pocket.png",
            link: "https://pocket.billwang.dev",
        },
        {
            title: "ClubsConnect",
            description:
                "A social media platform to centralize club information and events.",
            github: "https://github.com/xusandrew/Club-Connect",
            image: "/projects/clubsconnect.png",
            link: "https://club-connect-tan.vercel.app/",
        },
        {
            title: "CC3K+",
            description: "CC3K+ is a ASCII based RPG game ran in the terminal.",
            github: "https://github.com/billwang7599/CC3kPlus",
            image: "/projects/cc3kp.png",
        },
    ];

    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 90%",
                    },
                },
            );
        }
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.2 + i * 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    },
                },
            );
        });
    }, []);

    return (
        <div
            className="flex flex-col items-center justify-center mt-16 min-h-screen grayscale"
            style={{
                backgroundImage: `url(${ancientChina})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1
                ref={titleRef}
                className="text-7xl font-bold text-gray-800 drop-shadow-lg bg-opacity-40 bg-gray-100 p-2"
            >
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4 mt-16">
                {projects.map((project, idx) => (
                    <div
                        key={project.title}
                        ref={(el) => {
                            cardsRef.current[idx] = el;
                        }}
                        className="bg-white backdrop-blur-md bg-opacity-60 rounded-xl shadow-lg overflow-hidden border border-gray-300 hover:scale-110 transition-transform duration-300 flex flex-col"
                    >
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                            <a
                                href={project.link || project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-full block"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover object-left-top h-full w-full grayscale"
                                />
                            </a>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-4 flex-1">
                                {project.description}
                            </p>
                            <div className="flex gap-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-800 underline"
                                >
                                    GitHub
                                </a>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-gray-800 underline"
                                    >
                                        Live
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
