import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "About" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
  { to: "scratch/index.html", label: "Pickleball", external: true },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="font-display text-xl tracking-tight">
          Corbin Giles<span className="text-accent">.</span>
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.to}
                href={`${import.meta.env.BASE_URL}${l.to}`}
                className="text-sm tracking-wide transition-colors text-foreground/70 hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${
                    isActive ? "text-accent" : "text-foreground/70 hover:text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container flex flex-col gap-4 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm ${isActive ? "text-accent" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteNav;
