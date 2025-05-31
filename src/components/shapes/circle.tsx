import React from "react";
import { motion } from "motion/react";

export interface CircleProps {
    x: number;
    y: number;
    radius: number;
    blur: number;
    color?: string;
    animate?: boolean;
}

export const Circle: React.FC<CircleProps> = ({
    x,
    y,
    radius,
    blur,
    color = "rgba(255, 255, 255, 0.1)",
    animate = false,
}) => {
    const maxDistance = Math.random() * 100;
    const speed = Math.random() * 0.5 + 0.1;
    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                backgroundColor: color,
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                transform: "translate(-50%, -50%)",
                boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
                border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            animate={
                animate
                    ? {
                          x: [x - maxDistance, x + maxDistance],
                          y: [y - maxDistance, y + maxDistance],
                      }
                    : undefined
            }
            transition={{ repeat: Infinity, duration: 2 }}
        />
    );
};

interface FloatShapesProps {
    children?: React.ReactNode;
}

export const FloatShapes: React.FC<FloatShapesProps> = ({ children }) => {
    return (
        <div className="relative w-full h-full overflow-hidden">{children}</div>
    );
};

// Usage example:
// <FloatShapes>
//   <Circle x={100} y={100} radius={50} blur={5} />
//   <Circle x={300} y={200} radius={70} blur={10} color="rgba(100, 200, 255, 0.1)" />
// </FloatShapes>
