const SiteFooter = () => (
  <footer className="border-t border-border bg-secondary/40 py-10 mt-24">
    <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground md:flex-row">
      <p className="font-display text-base">Corbin Giles</p>
      <p>© {new Date().getFullYear()} — Built with care.</p>
    </div>
  </footer>
);

export default SiteFooter;
