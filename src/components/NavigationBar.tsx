import { useState } from "react";

const navItems = [
  "Home",
  "Civil Engineering",
  "UB Lab",
  "Capacity Building",
  "Public Infrastructure",
  "Real Estate",
];

const NavigationBar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="fade-in-up fade-in-up-delay-4 px-4 md:px-6 py-4">
      <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-glass px-3 py-2 md:px-6 md:py-3 inline-flex flex-wrap justify-center gap-1 md:gap-2 mx-auto">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`
              px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-medium rounded-lg transition-all duration-300
              ${activeItem === item
                ? "bg-primary text-primary-foreground shadow-glow"
                : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
