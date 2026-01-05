import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-28 pb-4 px-6">
      
      {/* Logo Mark */}
      <div className="fade-in-up mb-8">
        <div className="w-24 h-24 md:w-36 md:h-36 rounded-3xl bg-white/10 backdrop-blur-md shadow-glow flex items-center justify-center animate-float">
          <img
            src={logo}
            alt="UrbanBuild logo"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
        </div>
      </div>

      {/* Company Name */}
      <h1 className="fade-in-up fade-in-up-delay-1 font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-1">
        URBANBUILD
        <sup className="text-sm md:text-xl align-super">™</sup>
      </h1>

      {/* PVT LTD */}
      <p className="fade-in-up fade-in-up-delay-2 font-body text-xs md:text-sm text-muted-foreground tracking-[0.4em] uppercase mb-6">
        PVT LTD
      </p>

      {/* Quote */}
      <blockquote className="fade-in-up fade-in-up-delay-3 max-w-xl text-center">
        <div className="mx-auto mb-3 h-px w-24 bg-foreground/30" />
        <p className="font-display text-lg md:text-xl lg:text-2xl text-foreground italic leading-relaxed">
          "Engineering Progress with Precision."
        </p>
        <div className="mx-auto mt-3 h-px w-24 bg-foreground/30" />
      </blockquote>

    </section>
  );
};

export default HeroSection;
