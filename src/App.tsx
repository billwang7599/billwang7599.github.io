import { Hero } from "./pages/hero";
import { Experience } from "./pages/experience";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "./lib/cn";

type Page = {
    name: string;
    component: JSX.Element;
};

function App() {
    const [page, setPage] = useState(0);
    const pages: Page[] = [
        { name: "Hero", component: <Hero /> },
        { name: "Experience", component: <Experience /> },
    ];

    return (
        <div className="w-screen h-screen overflow-hidden flex bg-bg text-secondary">
            {pages.map((pageElement, index) => (
                <>
                    <motion.button
                        className={cn(
                            `flex items-center justify-center w-[4rem] h-full`,
                            `${index === page ? "border-r border-dashed border-accent-light" : ""}`,
                        )}
                        onClick={() => setPage(index)}
                        initial={false}
                        whileHover={
                            index === page
                                ? {}
                                : {
                                      scale: 1.1,
                                      backgroundColor: "transparent",
                                      color: "rgba(var(--secondary))",
                                  }
                        }
                        animate={{
                            backgroundColor:
                                index === page
                                    ? "rgba(var(--bg))"
                                    : "rgba(var(--accent-light))",
                            color:
                                index === page
                                    ? "rgba(var(--secondary))"
                                    : "rgba(var(--bg))",
                        }}
                        transition={{ duration: 0.5 }}
                        disabled={index === page}
                    >
                        <span className="transform -rotate-90 whitespace-nowrap text-2xl font-bold">
                            {pageElement.name}
                        </span>
                    </motion.button>
                    <AnimatePresence>
                        {index === page ? (
                            <motion.div
                                className="flex-grow h-full text-accent-dark overflow-hidden relative"
                                initial={{ opacity: 0, width: "0%" }}
                                animate={{ opacity: 1, width: "100%" }}
                                exit={{ opacity: 0, width: "0%" }}
                                transition={{
                                    width: {
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    },
                                    opacity: {
                                        duration: 1,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <div
                                    className={`absolute left-0 top-0 h-full`}
                                    style={{
                                        width: `calc(100vw - ${pages.length * 4}rem)`,
                                    }}
                                >
                                    {pageElement.component}
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </>
            ))}
        </div>
    );
}

export default App;
