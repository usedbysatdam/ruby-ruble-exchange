import { Gamepad2 } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/30 py-8">
    <div className="container mx-auto flex flex-col items-center gap-3 px-4 text-center">
      <div className="flex items-center gap-2">
        <Gamepad2 className="h-5 w-5 text-primary" />
        <span className="font-display text-sm font-semibold text-foreground">RobuxStore</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} RobuxStore. Tidak berafiliasi dengan Roblox Corporation.
      </p>
    </div>
  </footer>
);

export default Footer;
