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
            Entrepreneur · Singer · Pickleballer
          </p>
        </header>

        <Section icon={GraduationCap} title="Education">
          <Item
            role="Undergraduate Student"
            org="Brigham Young University"
            date="Current"
            bullets={[
              "GPA: 3.6",
              "Member of the BYU pickleball team",
            ]}
          />
          <Item
            role="High School Diploma"
            org="FAC High School (senior year)"
            date="Graduated"
            bullets={[
              "Graduated in the top 20% of class",
              "Captain of the tennis team — undefeated season",
              "Captain of the football team",
              "Qualified for All-State (tennis) two years",
            ]}
          />
        </Section>

        <Section icon={Briefcase} title="Experience">
          <Item
            role="Direct Support Professional"
            org="RISE Services"
            date="9 months – Present"
            bullets={[
              "Provide daily care, companionship, and support for individuals with special needs",
              "Assist with daily living skills, community outings, and personal goals",
              "Build trust and lasting relationships with the people I serve",
            ]}
          />
          <Item
            role="Farm Hand"
            org="Hillside Meadows Ranch"
            date="Previous"
            bullets={[
              "Tended cattle and helped with day-to-day herd care",
              "Repaired broken fences and built enclosures for animals",
              "Cared for emus and managed gardening responsibilities",
              "Operated tractors and skid steers around the property",
            ]}
          />
        </Section>

        <Section icon={Wrench} title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Hands-On</h4>
              <p className="mt-2">Tractors · Skid steers · Fence & enclosure building · Animal care</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">People</h4>
              <p className="mt-2">Direct support care · Patience · Team leadership · Communication</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Athletics</h4>
              <p className="mt-2">Pickleball · Tennis · Football · Coaching teammates</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Other</h4>
              <p className="mt-2">Singing · Entrepreneurial mindset</p>
            </div>
          </div>
        </Section>

        <Section icon={Award} title="Honors & Activities">
          <ul className="space-y-2 text-foreground/80">
            <li>• BYU Pickleball Team — current member</li>
            <li>• High school tennis captain — undefeated season</li>
            <li>• High school football captain</li>
            <li>• All-State qualifier in tennis (2 years)</li>
            <li>• Graduated top 20% of high school class</li>
          </ul>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Resume;
