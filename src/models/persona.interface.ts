interface Education {
    level: string; // e.g., "Bachelor's", "Master's", etc.
}

interface Background {
    yearsOfExperience: string; // e.g., "5+ years", "3-5 years", etc.
    education: Education;
    hasProjects: boolean;
    hasCertifications: boolean;
    industries: string[]; // List of industries, e.g., ["IT", "Finance"]
}

export interface PersonaType {
    experienceLevel: string; // e.g., "Beginner", "Intermediate", "Expert"
    targetRole: string; // e.g., "Software Engineer", "Data Analyst"
    background: Background;
    strengths: string[]; // List of strengths, e.g., ["Teamwork", "Problem Solving"]
    goals: string[]; // List of goals, e.g., ["Learn React", "Become a team lead"]
}
