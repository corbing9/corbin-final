import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const projects = [
  {
    title: "Small-Cap Initiation: Acme Corp",
    tag: "Equity Research",
    desc: "Initiated coverage with a Buy rating; built a three-statement model with sensitivity analysis on EBITDA margin and WACC.",
  },
  {
    title: "Sector Dashboard — Consumer Discretionary",
    tag: "Tableau",
    desc: "Live dashboard tracking 40+ tickers across valuation, momentum, and earnings revision metrics.",
  },
  {
    title: "Momentum Factor Decay",
    tag: "Research Paper",
    desc: "Co-authored white paper studying half-life of cross-sectional momentum signals from 1990–2023.",
  },
  {
    title: "Personal Portfolio Tracker",
    tag: "Python",
    desc: "Pulls daily prices via API, computes risk-adjusted returns, and emails a weekly summary.",
  },
];

const Work = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="container py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Things I've built.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        A small sample of projects across equity research, data analysis, and
        software.
      </p>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-sm border border-border bg-card p-8 shadow-soft transition-all hover:shadow-elegant hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-wider text-accent">{p.tag}</p>
            <h2 className="mt-3 font-display text-2xl">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default Work;
