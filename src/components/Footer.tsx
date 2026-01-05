import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-secondary/50 border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/10 backdrop-blur-md shadow-glow ring-1 ring-white/20 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="UrbanBuild logo"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
            </div>
              <span className="font-display font-semibold text-foreground text-base">
                Urbanbuild<sup className="text-[8px]">™</sup> PVT LTD
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              Engineering Progress with Precision
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8291722917</span>
            </a>
            <a 
              href="mailto:info@urbanbuild.com" 
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>urbanbuildinfra@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 my-5" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Urbanbuild™ PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
