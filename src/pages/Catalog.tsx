import { ShoppingCart, Info } from "lucide-react";

const catalogItems = Array.from({ length: 10 }, (_, i) => {
  const robux = (i + 1) * 100;
  const gamepassPrice = Math.ceil(robux / 0.7);
  return { robux, gamepassPrice };
});

const pricePerRobux = 140; // Rp per robux, adjust as needed

const Catalog = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-black text-foreground md:text-5xl">
            Catalog <span className="text-gradient">Robux</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Pilih jumlah Robux yang ingin kamu beli
          </p>
        </div>

        <div className="mx-auto mb-8 flex max-w-md items-start gap-3 rounded-xl border border-border bg-muted/50 p-4 text-sm">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-muted-foreground">
            Harga belum termasuk biaya admin. Hubungi kami untuk konfirmasi harga terbaru dan proses pembelian.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalogItems.map((item) => (
            <div
              key={item.robux}
              className="group bg-card-gradient rounded-2xl border border-border p-5 transition-all hover:border-primary/40 hover:glow-effect card-shadow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-lg bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  {item.robux} R$
                </span>
                <ShoppingCart className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="mb-1 font-display text-2xl font-bold text-foreground">
                Rp {(item.robux * pricePerRobux).toLocaleString("id-ID")}
              </div>
              <p className="text-xs text-muted-foreground">
                Gamepass: {item.gamepassPrice.toLocaleString()} R$ (setelah tax 30%)
              </p>
              <div className="mt-4">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-maroon-light"
                >
                  Beli Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
