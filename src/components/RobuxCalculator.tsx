import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";

const RobuxCalculator = () => {
  const [robuxWanted, setRobuxWanted] = useState<string>("");

  const wanted = parseFloat(robuxWanted) || 0;
  const gamepassPrice = Math.ceil(wanted / 0.7);
  const actualReceived = Math.floor(gamepassPrice * 0.7);

  return (
    <div className="bg-card-gradient rounded-2xl border border-border p-6 md:p-8 card-shadow">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
          <Calculator className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">Kalkulator Robux</h3>
          <p className="text-sm text-muted-foreground">Hitung harga Gamepass setelah potongan 30%</p>
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-muted-foreground">
            Robux yang ingin diterima (bersih)
          </label>
          <input
            type="number"
            min="0"
            placeholder="Contoh: 100"
            value={robuxWanted}
            onChange={(e) => setRobuxWanted(e.target.value)}
            className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {wanted > 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-2 space-y-3 rounded-xl border border-border bg-muted/50 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Harga Gamepass</span>
              <span className="font-display text-2xl font-bold text-primary">
                {gamepassPrice.toLocaleString()} R$
              </span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{gamepassPrice.toLocaleString()} R$</span>
              <ArrowRight className="h-3 w-3" />
              <span>- 30% tax</span>
              <ArrowRight className="h-3 w-3" />
              <span className="font-semibold text-foreground">{actualReceived.toLocaleString()} R$ bersih</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RobuxCalculator;
