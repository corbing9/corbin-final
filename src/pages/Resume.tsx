import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Award, Briefcase, GraduationCap, Wrench } from "lucide-react";

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Award;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="border-t border-border py-10">
    <div className="grid gap-8 md:grid-cols-[200px_1fr]">
      <div className="flex items-start gap-3">
        <Icon size={20} className="mt-1 text-accent" />
        <h2 className="font-display text-2xl">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  </section>
);

const Item = ({
  role,
  org,
  date,
  bullets,
}: {
  role: string;
  org: string;
  date: string;
  bullets: string[];
}) => (
  <div>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="font-display text-lg">{role}</h3>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{date}</span>
    </div>
    <p className="mt-1 italic text-accent">{org}</p>
    <ul className="mt-3 space-y-1.5 text-foreground/80">
      {bullets.map((b) => (
        <li key={b} className="flex gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="container max-w-4xl py-20">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Résumé</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Corbin Giles</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Finance undergraduate · Aspiring equity analyst
          </p>
        </header>

        <Section icon={GraduationCap} title="Education">
          <Item
            role="B.S. in Finance"
            org="University · Marriott School of Business"
            date="Expected 2026"
            bullets={[
              "Relevant coursework: Corporate Finance, Investments, Financial Modeling, Statistics",
              "GPA: 3.8 / 4.0",
              "Web development minor coursework",
            ]}
          />
        </Section>

        <Section icon={Briefcase} title="Experience">
          <Item
            role="Finance Intern"
            org="Regional Investment Firm"
            date="Summer 2024"
            bullets={[
              "Built three-statement models for small-cap equity coverage initiations",
              "Authored a 12-page initiation report later used by senior analysts",
              "Maintained sector dashboards in Tableau tracking 40+ tickers",
            ]}
          />
          <Item
            role="Research Assistant"
            org="Department of Finance"
            date="2023 – Present"
            bullets={[
              "Cleaned and merged CRSP / Compustat panels in Python (pandas)",
              "Co-authored white paper on momentum factor decay",
            ]}
          />
        </Section>

        <Section icon={Wrench} title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Tools</h4>
              <p className="mt-2">Excel · PowerPoint · Tableau · Bloomberg Terminal · Capital IQ</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Code</h4>
              <p className="mt-2">Python · SQL · HTML / CSS · JavaScript · R</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Finance</h4>
              <p className="mt-2">DCF · LBO · Comps · Three-statement modeling · Equity research</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Languages</h4>
              <p className="mt-2">English (native) · Spanish (conversational)</p>
            </div>
          </div>
        </Section>

        <Section icon={Award} title="Honors & Activities">
          <ul className="space-y-2 text-foreground/80">
            <li>• Dean's List — multiple semesters</li>
            <li>• Finance Society — VP of Programming</li>
            <li>• CFA Institute Research Challenge — team finalist</li>
            <li>• Intramural Pickleball — captain & undefeated 2024 spring season</li>
          </ul>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Resume;
