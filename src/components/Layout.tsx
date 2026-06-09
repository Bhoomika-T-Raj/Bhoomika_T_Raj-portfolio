import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#summary", label: "Summary" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#internship", label: "Internship" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background selection:bg-primary/20">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl font-bold tracking-tight text-foreground font-display hover:text-primary transition-colors" 
            data-testid="link-logo"
          >
            Bhoomika T Raj
          </a>

          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`link-desktop-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col pt-24 px-8 gap-6 md:hidden border-r border-border h-[100dvh]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-lg font-medium py-2 border-b border-border transition-colors ${
                activeSection === link.href.substring(1) ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-border bg-card mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold font-display text-lg text-foreground">Bhoomika T Raj</p>
            <p className="text-sm text-muted-foreground mt-1">MCA Student · AI/ML Developer</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground items-center">
            <a href="mailto:bhoomikatraj564@gmail.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">
              bhoomikatraj564@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="tel:+919632711005" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
              +91 9632711005
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}