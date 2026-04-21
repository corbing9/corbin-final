import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const RECIPIENT_EMAIL = "hello@example.com";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long"),
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse({ name, email, message });
    if (!result.success) {
      toast({
        title: "Please check your input",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    const subject = encodeURIComponent(`Message from ${result.data.name}`);
    const body = encodeURIComponent(
      `${result.data.message}\n\n— ${result.data.name} (${result.data.email})`
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app…" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="container py-24">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</p>
            <h1 className="mt-3 font-display text-5xl md:text-6xl">Let's talk.</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Whether it's an internship, a research idea, or a doubles match — reach out.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                required
                aria-label="Your name"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                required
                aria-label="Your email"
              />
            </div>
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={1000}
              rows={6}
              required
              aria-label="Your message"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-accent"
            >
              <Send size={18} /> Send message
            </button>
          </form>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={`mailto:${RECIPIENT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail size={16} /> {RECIPIENT_EMAIL}
            </a>
            <div className="flex gap-6 text-muted-foreground">
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
};

export default Contact;
