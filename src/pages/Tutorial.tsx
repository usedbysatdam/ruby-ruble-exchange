import { PlayCircle, ExternalLink } from "lucide-react";

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

const Tutorial = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-black text-foreground md:text-5xl">
            Tutorial <span className="text-gradient">Gamepass</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Ikuti langkah-langkah berikut untuk membuat Gamepass di Roblox
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mb-12 max-w-2xl space-y-4">
          {[
            "Buka Roblox Studio dan pilih game yang ingin ditambahkan Gamepass.",
            "Buka halaman Create di roblox.com, pilih game, lalu klik \"Passes\".",
            "Klik \"Create a Pass\", upload gambar, beri nama, dan tentukan harga sesuai kalkulator.",
            "Kirimkan link Gamepass kepada kami untuk proses pembelian.",
          ].map((step, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-border bg-card-gradient p-4 card-shadow">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20 font-display text-sm font-bold text-primary">
                {i + 1}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed pt-1">{step}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center gap-2">
            <PlayCircle className="h-5 w-5 text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">Video Tutorial</h2>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border card-shadow">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Tutorial Membuat Gamepass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Buka di YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
