import React, { useState } from "react";

const HoverEffect = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 relative">
            {/* Hover Area */}
            <div
                className="w-[200px] h-[200px] bg-blue-400 border border-blue-600"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></div>

            {/* Attached Square */}
            {isHovering && (
                <div
                    className="absolute w-[700px] h-[600px] bg-red-500  pointer-events-none"
                    style={{
                        top: cursorPosition.y - 300, // Adjusting position to center the square
                        left: cursorPosition.x - 350,
                    }}
                ></div>
            )}
        </div>
    );
};

export default HoverEffect;
