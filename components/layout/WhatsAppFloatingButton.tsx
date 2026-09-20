"use client";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="#agendar"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 animate-pulseSoft"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.83 14.25c-.25.7-1.24 1.28-2.03 1.45-.55.12-1.26.21-3.66-.78-2.98-1.23-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.05s.75-2.16 1.02-2.46c.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.32.38-.45.51-.15.15-.31.31-.13.6.17.3.78 1.29 1.68 2.09 1.16 1.03 2.13 1.35 2.43 1.5.3.15.48.13.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.78.84 2.08 1 .3.15.5.22.58.35.07.13.07.75-.18 1.45Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
