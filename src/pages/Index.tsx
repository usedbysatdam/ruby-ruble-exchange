import { Link } from "react-router-dom";
import { ShoppingCart, BookOpen, Sparkles } from "lucide-react";
import RobuxCalculator from "@/components/RobuxCalculator";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80 mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Terpercaya & Aman</span>
          </div>
          <h1 className="font-display text-4xl font-black leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Beli Robux <br />
            <span className="text-gradient">Harga Terbaik</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-primary-foreground/70 md:text-lg">
            Top up Robux cepat dan aman via Gamepass. Gunakan kalkulator untuk menghitung harga yang tepat.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-display font-semibold text-primary-foreground transition-all hover:bg-maroon-light glow-effect"
            >
              <ShoppingCart className="h-4 w-4" />
              Lihat Catalog
            </Link>
            <Link
              to="/tutorial"
              className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-display font-semibold text-primary-foreground transition-all hover:bg-primary/20"
            >
              <BookOpen className="h-4 w-4" />
              Tutorial
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="container mx-auto px-4 -mt-10 relative z-10 mb-20">
        <div className="mx-auto max-w-lg">
          <RobuxCalculator />
        </div>
      </section>
    </div>
  );
};

export default Index;
