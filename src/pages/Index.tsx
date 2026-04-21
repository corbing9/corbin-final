import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import portrait from "@/assets/portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="bg-warm">
          <div className="container grid gap-12 py-24 md:grid-cols-[1.2fr_1fr] md:py-32 lg:py-40">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">
                Entrepreneur · Singer · Pickleballer
              </p>
              <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
                Hi, I'm Corbin —<br />
                <span className="italic text-accent">a little bit of</span>{" "}
                everything.
              </h1>
              <p className="mt-8 max-w-lg text-lg text-muted-foreground">
                Entrepreneur at heart, singer when the moment calls for it, and
                pickleballer most weekends. I like building things, helping
                people, and playing hard.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/resume"
                  className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-all hover:bg-accent"
                >
                  View résumé
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-primary/30 px-6 py-3 text-sm tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-sm bg-accent/10 blur-2xl" />
              <img
                src={portrait}
                alt="Portrait"
                width={800}
                height={1024}
                className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-elegant"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="container py-24">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
              <h2 className="mt-4 font-display text-4xl">A few notes.</h2>
            </div>
            <div className="space-y-6 md:col-span-2">
              <p className="text-lg leading-relaxed text-foreground/80">
                I spend my days as a Direct Support Professional at RISE
                Services, working alongside people with special needs. They are
                some of the kindest, most genuine people I've ever met, and the
                job has shaped how I think about patience, presence, and
                showing up for others.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Before that I worked the land at Hillside Meadows Ranch —
                tending cattle, mending fences, wrangling the occasional emu,
                and learning my way around tractors and skid steers. Today I
                play for BYU's pickleball team and chase the same competitive
                fire I found on the tennis and football fields in high school.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-secondary/40 py-24">
          <div className="container">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">What I do</p>
            <h2 className="mt-4 font-display text-4xl">A little of everything</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "People First",
                  d: "Years of leadership on the field and patient, hands-on care at RISE Services.",
                },
                {
                  t: "Hands-On Work",
                  d: "Ranch-tested with cattle, tractors, skid steers, and anything that needs fixing.",
                },
                {
                  t: "Competitive Drive",
                  d: "Two-time team captain, undefeated tennis season, and a current BYU pickleballer.",
                },
              ].map((s) => (
                <div key={s.t} className="rounded-sm border border-border bg-background p-8 shadow-soft">
                  <h3 className="font-display text-xl">{s.t}</h3>
                  <p className="mt-3 text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
