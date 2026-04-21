import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Let's talk.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Whether it's an internship, a research idea, or a doubles match —
          reach out.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-3 rounded-sm bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-accent"
          >
            <Mail size={18} /> hello@example.com
          </a>
          <div className="mt-6 flex gap-6 text-muted-foreground">
            <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-accent transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Contact;
