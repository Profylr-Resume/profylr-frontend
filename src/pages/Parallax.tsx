import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Persona from "./Persona";
import TemplateSelection from "./TemplateSelection";
import GenerateResume from "./GenerateResume";

// Custom section components
const SectionOne = () => <Persona />;
const SectionTwo = () => <TemplateSelection />;
const SectionThree = () => <GenerateResume />;

const sections = [
    { id: 1, label: "Persona", color: "bg-blue-500", component: SectionOne },
    { id: 2, label: "Template", color: "bg-green-500", component: SectionTwo },
    { id: 3, label: "Generate", color: "bg-red-500", component: SectionThree },
];

const ParallaxScroll = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observerOptions = { threshold: 0.5 };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = sectionRefs.current.indexOf(entry.target);
                    if (index !== -1) setActiveSection(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionRefs.current.forEach((ref) => observer.observe(ref));

        return () => observer.disconnect();
    }, []);

    // Framer Motion Variants for Page Transitions
    const pageVariants = {
        initial: { opacity: 0, y: 50 }, // Page starts slightly below with opacity 0
        animate: { opacity: 1, y: 0 }, // Page moves into place and becomes visible
        exit: { opacity: 0, y: -50 }, // Page moves up and fades out
    };

    return (
        <div className="relative flex">
            {/* Vertical Stepper */}
            <div className="absolute top-1/2 -translate-y-1/2 left-5 z-50 ">
                <div className="flex flex-col items-center">
                    {sections.map((section, index) => (
                        <div key={section.id} className="flex flex-col items-center">
                            {/* Vertical Line (Above) */}
                            {index !== 0 && (
                                <div
                                    className={`h-12 w-[2px] ${
                                        activeSection >= index ? "bg-gray-800" : "bg-gray-300"
                                    }`}
                                />
                            )}

                            {/* Rhombus Block */}
                            <motion.div
                                className={`relative flex items-center justify-center w-16 h-16 transform rotate-45 ${
                                    activeSection === index
                                        ? "bg-gray-800 text-white"
                                        : "bg-gray-300 text-gray-700"
                                }`}
                                initial={{ scale: 1 }}
                                animate={{ scale: activeSection === index ? 1.2 : 1 }}
                                onClick={() =>
                                    sectionRefs.current[index]?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                            >
                                <div className="transform -rotate-45 text-center">
                                    <p className="text-sm font-semibold">{`Step ${section.id}`}</p>
                                    <p className="text-xs">{section.label}</p>
                                </div>
                            </motion.div>

                            {/* Vertical Line (Below) */}
                            {index !== sections.length - 1 && (
                                <div
                                    className={`h-12 w-[2px] ${
                                        activeSection > index ? "bg-gray-800" : "bg-gray-300"
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
                {sections.map(({ id, color, component: Component }, index) => (
                    <motion.div
                        key={id}
                        className={`h-screen ${color} relative flex items-center justify-center snap-start`}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <Component />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ParallaxScroll;
