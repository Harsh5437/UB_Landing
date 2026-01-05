const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      {/* Engineering grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="hsl(210 20% 55%)"
              strokeWidth="0.5"
            />
          </pattern>

          <pattern
            id="grid-large"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 300 0 L 0 0 0 300"
              fill="none"
              stroke="hsl(210 25% 45%)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-large)" />
      </svg>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-32 h-32 border border-primary/10 rotate-45 animate-float" />
      <div
        className="absolute top-40 right-[15%] w-24 h-24 border border-accent/10 rotate-12 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 left-[20%] w-40 h-40 border border-primary/8 -rotate-12 animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-[25%] w-20 h-20 border border-accent/10 rotate-45 animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl animate-pulse-soft" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl animate-pulse-soft"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/4 to-transparent rounded-full blur-3xl" />

      {/* Blueprint-style crossing lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="hsl(210 25% 40%)"
          strokeWidth="1"
          strokeDasharray="8 8"
        />
        <line
          x1="100%"
          y1="20%"
          x2="0"
          y2="80%"
          stroke="hsl(200 30% 45%)"
          strokeWidth="1"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/10" />
    </div>
  );
};

export default AnimatedBackground;
