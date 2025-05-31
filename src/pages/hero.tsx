import { Button } from "../components/ui/button";
import { cn } from "../lib/cn";
import bgImage from "../assets/bg.png";

export function Hero() {
    return (
        <section id="hero" className="page flex flex-row gap-4 w-full">
            <div className="flex-auto flex-col w-full relative pt-4 md:pt-8 lg:pt-16 pr-[1rem]">
                {/* Background with blur effect */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(0px)",
                    }}
                ></div>
                {/* Content */}
                <div className="flex flex-col relative z-10 mt-8 justify-right items-end">
                    <h1 className="mb-4 tracking-loose text-8xl lg:text-24xl font-extrabold text-secondary [text-shadow:2px_2px_1px_black]">
                        Bill Wang
                    </h1>
                    <div className="flex flex-wrap gap-4">
                        <Button>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open Bill's résumé in a new tab"
                            >
                                Résumé
                            </a>
                        </Button>

                        <Button>
                            <a
                                href="#contact"
                                aria-label="Scroll to contact section"
                            >
                                Contact Me
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full w-full mt-[-10%]">
                {Array.from({ length: 10 }).map((_, i) => (
                    <h1
                        key={i}
                        className={cn(
                            `w-full font-extrabold text-bg text-4xl lg:text-8xl`,
                            i == 4
                                ? "text-white/60 [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)]"
                                : "text-bg [text-shadow:1px_1px_0px_rgba(0,0,0,0.5)]",
                        )}
                    >
                        <div className="lg:hidden">
                            <span>Soft</span>
                            <br></br>
                            <span>ware</span>
                            <br></br>
                            <span>Eng</span>
                            <br></br>
                            <span>ineer</span>
                        </div>
                        <div className="hidden lg:block">
                            <span>Software</span>
                            <br></br>
                            <span>Engineer</span>
                        </div>
                    </h1>
                ))}
            </div>
        </section>
    );
}
