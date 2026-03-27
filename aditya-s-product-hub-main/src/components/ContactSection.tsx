import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="px-6 md:px-12 lg:px-16 py-16 section-surface-b section-divider">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl tracking-wide text-foreground mb-4">GET IN TOUCH</h2>
      <p className="text-muted-foreground mb-8 max-w-[70ch] leading-relaxed">
        Open to building meaningful products and solving real-world problems.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <a href="mailto:adityaamundraa@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-netflix-red transition-colors hover:scale-[1.01]">
          <Mail className="w-5 h-5" /> adityaamundraa@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/aditya-mundra-43a747254/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-netflix-red transition-colors hover:scale-[1.01]">
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
        <a href="tel:+917023347880" className="flex items-center gap-3 text-muted-foreground hover:text-netflix-red transition-colors hover:scale-[1.01]">
          <Phone className="w-5 h-5" /> +91 7023347880
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
