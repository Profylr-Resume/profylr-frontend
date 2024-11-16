import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Persona from "./Persona";
import TemplateSelection from "./TemplateSelection";
import GenerateResume from "./GenerateResume";

// Import custom section components
const SectionOne = () => <Persona />;
const SectionTwo = () => <TemplateSelection />;
const SectionThree = () => <GenerateResume />;

const sections = [
    { id: 1, color: "bg-blue-500", component: SectionOne },
    { id: 2, color: "bg-green-500", component: SectionTwo },
    { id: 3, color: "bg-red-500", component: SectionThree },
];
  
const ParallaxScroll = () => {

    const containerRef = useRef(null); // Create a ref for the scroll container

    const { scrollY, scrollYProgress } = useScroll({
        container: containerRef, // Attach the ref to the scrollable container
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.01, // Adjust for smoother spring
    });

    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const y2 = useTransform(scrollY, [0, 500], [0, 50]);

    useEffect(() => {
        console.log("ScrollYProgress:", scrollYProgress.get());
        console.log("ScaleX:", scaleY.get());
    }, [scrollYProgress, scaleY]);
  
    return (
        <>
        
            <div
                ref={containerRef}
                className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
                {sections.map(({ id, color, component: Component }, index) => (
                    <div
                        key={id}
                        className={`h-screen ${color} relative flex items-center justify-center snap-start`}
                    >
                    
                        {/* Foreground Content */}
                        <motion.div
                            className="relative z-10"
                            style={{ y: y2 }}
                        >
                            <Component /> {/* Render the custom component */}
                        </motion.div>
                    </div>
                ))}
            
            </div>
            {/* Vertical Progress Bar */}
            <motion.div
                className="fixed top-0 bottom-0 w-[5px] left-[100px] bg-red-500 z-50"
                style={{ scaleY, transformOrigin: "top" }} // Transform from the top
            />
        </>

    );
};
  
export default ParallaxScroll;