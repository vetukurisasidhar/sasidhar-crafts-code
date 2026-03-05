import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-code text-primary text-sm">&lt;Sasidhar /&gt;</p>
        <p className="text-xs text-muted-foreground mt-1">
          Building modern applications with logic and creativity.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://github.com/vetukurisasidhar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/sasidharvetukuri/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 V. Sasidhar. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
