import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-8 px-6 flex flex-col items-center">
      <button className="group cta-button flex items-center gap-3">
        <span>Explore More</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </section>
  );
};

export default CTASection;
