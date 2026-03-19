import { Gamepad2, MessageCircle, Instagram } from "lucide-react";

// GANTI DENGAN INFO KAMU
const WHATSAPP_NUMBER = "6281234567890"; // Nomor WA (format internasional tanpa +)
const INSTAGRAM_USERNAME = "robuxstore"; // Username IG tanpa @

const Footer = () => (
  <footer className="border-t border-border bg-muted/30 py-10">
    <div className="container mx-auto flex flex-col items-center gap-5 px-4 text-center">
      <div className="flex items-center gap-2">
        <Gamepad2 className="h-5 w-5 text-primary" />
        <span className="font-display text-sm font-semibold text-foreground">RobuxStore</span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} RobuxStore. Tidak berafiliasi dengan Roblox Corporation.
      </p>
    </div>
  </footer>
);

export default Footer;
