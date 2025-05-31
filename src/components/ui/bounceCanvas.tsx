import { useState, useEffect } from "react";
import { Circle, CircleProps } from "../shapes/circle";

export const BounceCanvas = () => {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 800,
        height: typeof window !== "undefined" ? window.innerHeight : 600,
    });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Create circles with different sizes, positions, and animation properties
    const circles: CircleProps[] = [
        // Large primary circle
        {
            x: dimensions.width * 0.3,
            y: dimensions.height * 0.3,
            radius: 60 + Math.random() * 40,
            color: `primary`,
            blur: 15 + Math.random() * 10,
            animate: true,
        },
        // Medium secondary circle
        {
            x: dimensions.width * 0.7,
            y: dimensions.height * 0.4,
            radius: 40 + Math.random() * 30,
            color: `secondary`,
            blur: 10 + Math.random() * 8,
            animate: true,
        },
        // Small accent circle
        {
            x: dimensions.width * 0.5,
            y: dimensions.height * 0.7,
            radius: 25 + Math.random() * 20,
            color: `accent`,
            blur: 8 + Math.random() * 5,
            animate: true,
        },
        // Extra small circle
        {
            x: dimensions.width * 0.2,
            y: dimensions.height * 0.6,
            radius: 15 + Math.random() * 15,
            color: `primary`,
            blur: 5 + Math.random() * 5,
            animate: true,
        },
        // Another medium circle
        {
            x: dimensions.width * 0.8,
            y: dimensions.height * 0.2,
            radius: 35 + Math.random() * 25,
            color: `secondary`,
            blur: 12 + Math.random() * 8,
            animate: true,
        },
    ];

    return (
        <div className="relative w-full h-full overflow-hidden">
            {circles.map((circle, index) => (
                <Circle key={index} {...circle} />
            ))}
        </div>
    );
};
