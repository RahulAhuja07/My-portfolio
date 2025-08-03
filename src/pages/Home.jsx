// filepath: c:\Users\Asus\OneDrive\Desktop\My_portfolio\src\pages\Home.jsx
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Theme Toggle*/}
            {/* <ThemeToggle /> */}
            {/* Add this div below
            <div className="bg-red-500 p-10 text-white md:p-20">
                Test Div
            </div> */}
            {/*BG Effects*/}
            <StarBackground />

            {/*Navbar*/}
            <Navbar />

            {/*Main Content*/}
            <main>
                <HeroSection />
                <AboutMe />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/*Footer*/}
            <Footer />
        </div>
    );
};

export default Home;