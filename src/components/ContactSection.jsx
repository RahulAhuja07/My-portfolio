// ContactSection.jsx
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have any questions, want to collaborate on a project, 
                    or just want to say hello, feel free to reach out!
                </p>
                {/* Change this div to a flex container and center it */}
                <div className="flex flex-col items-center gap-12">
                    <div className="space-y-8 text-center">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            {/* email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a
                                        href="mailto:ahujarahul906@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        ahujarahul906@gmail.com
                                    </a>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        href="tel:+917014020942"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 7014020942
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4>Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/rahul-ahuja-47397928a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    <Linkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/rahul07.xd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/80 hover:text-primary transition-colors"
                                >
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};