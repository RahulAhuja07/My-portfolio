import { ArrowRight, Github } from "lucide-react";
import JarsafariImg from "../assets/Jarsafari.png";
import ComicLabImg from "../assets/Comic_studies.png";
import MLImg from "../assets/ML.png";

const projects = [
    {
        id: 1,
        title: "JARSafari Campus Navigation App",
        description: "Designed and developed a navigation app tailored for IIT Jodhpur with live GPS tracking, multi-stop routing, favorites,and smartautocomplete",
        image: JarsafariImg,
        tags: ["React Native", "JavaScript", "Expo"],
        githubUrl: "https://github.com/RahulAhuja07/JARSafari",
    },
    {
        id: 2,
        title: "Comic Studies Lab Website Development",
        description: "Contributed to building the Comic Studies Lab website from scratch, focusing on frontend development and user experience.",
        image: ComicLabImg,
        tags: ["React Native", "JavaScript", "Tailwind CSS"],
        githubUrl: "https://github.com/Jatin-Purbia/comic_lab",
    },
    {
        id: 3,
        title: "Student Performance Prediction ML Project",
        description: "Built and trained ML models to predict student performance using academic records, study patterns, and extracurricular involvement.",
        image: MLImg,
        tags: ["Machine Learning", "Python", "Pandas & Numpy", "Scikit-learn"],
        githubUrl: "https://github.com/RahulAhuja07/Student-Performance-Prediction",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary">{" "}Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I have worked on, showcasing my skills in web development, 
                    mobile app development, and machine learning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-center">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/RahulAhuja07"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};