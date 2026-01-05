import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel h-16 px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 backdrop-blur-md shadow-glow ring-1 ring-white/20 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="UrbanBuild logo"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
            </div>

            <span className="font-display font-semibold text-foreground tracking-wide text-sm md:text-base leading-none">
              Urbanbuild<sup className="text-[10px]">™</sup>
            </span>
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+918291722917"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 82917 22917</span>
            </a>

            <a
              href="mailto:urbanbuildinfra@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium">urbanbuildinfra@gmail.com</span>
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <a
              href="tel:+918291722917"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:urbanbuildinfra@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
