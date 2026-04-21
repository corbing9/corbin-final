const SiteFooter = () => (
  <footer className="border-t border-border bg-secondary/40 py-10 mt-24">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
      <p className="font-display text-base">Corbin Giles</p>
      <div className="flex gap-6">
        <a href="/scratch/index.html" className="hover:text-accent transition-colors">
          Pickleball page →
        </a>
        <a href="/scratch/app.html" className="hover:text-accent transition-colors">
          Joke generator →
        </a>
      </div>
      <p>© {new Date().getFullYear()}</p>
    </div>
  </footer>
);

export default SiteFooter;
