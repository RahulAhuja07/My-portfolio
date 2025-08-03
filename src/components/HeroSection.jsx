import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
// Import your photo here
import MyPhoto from "../assets/Rahul_ahuja.jpg";

export const HeroSection = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning");
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting("Good Afternoon");
      } else if (currentHour >= 17 && currentHour < 22) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Hello");
      }
    };
    getGreeting();
  }, []);

  return (
    <section id="Hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">

          {/* Your Photo - with fade-in animation */}
          {/* Note: The initial animation for the photo is still just 'animate-fade-in' */}
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
            <img src={MyPhoto} alt="Rahul Ahuja" className="w-full h-full object-cover" />
          </div>

          {/* Dynamic Greeting and Name with staggered animation */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* The first part of the greeting starts with a small delay */}
            <span className="animate-fade-in-1 opacity-0">{greeting}, I am </span>
            {/* The second part has a slightly longer delay */}
            <span className="text-primary opacity-0 animate-fade-in-2">Rahul</span>
            {/* The third part has the longest delay */}
            <span className="text-primary ml-2 opacity-0 animate-fade-in-3">Ahuja</span>
          </h1>

          {/* Intro paragraph with animation */}
          {/* This paragraph animates after the name is displayed */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-4">
            A frontend developer focused on building fast, accessible, and user-friendly web interfaces using
            React and Next.js. I combine clean design with cutting-edge technology to create seamless,
            business-driven digital experiences.
          </p>

          {/* View My Work button with animation */}
          {/* The button animates last */}
          <div className="pt-4 animate-fade-in-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};