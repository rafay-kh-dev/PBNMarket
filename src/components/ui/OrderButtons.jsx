import { Send } from "lucide-react";
import { CONTACT_LINKS } from "../../constants/contact";

// Telegram SVG icon
const TelegramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 14.13l-2.95-.924c-.64-.203-.654-.64.136-.953l11.57-4.461c.537-.194 1.006.131.718.456z" />
  </svg>
);

// WhatsApp SVG icon
const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Microsoft Teams SVG icon
const TeamsIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.625 7.5h-9.75A1.125 1.125 0 009.75 8.625v8.25A1.125 1.125 0 0010.875 18h9.75A1.125 1.125 0 0021.75 16.875v-8.25A1.125 1.125 0 0020.625 7.5zM16.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7.875.375H7.5V9.75h1.125v2.625zm0 3H7.5V13.5h1.125v1.875zM3.375 9H6v6.375H3.375A1.125 1.125 0 012.25 14.25v-4.125A1.125 1.125 0 013.375 9z" />
  </svg>
);

export const OrderButtons = ({ size = "default", className = "" }) => {
  const base =
    size === "sm"
      ? "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
      : "flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Telegram — red */}
      <a
        href={CONTACT_LINKS.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#DC2626] text-white hover:bg-[#b91c1c] hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5`}
      >
        <TelegramIcon size={size === "sm" ? 15 : 18} />
        Order via Telegram
      </a>

      {/* WhatsApp — glass */}
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} glass-card text-[#0F172A] hover:shadow-md hover:-translate-y-0.5`}
      >
        <WhatsAppIcon size={size === "sm" ? 15 : 18} />
        WhatsApp
      </a>

      {/* Teams — glass */}
      <a
        href={CONTACT_LINKS.teams}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} glass-card text-[#0F172A] hover:shadow-md hover:-translate-y-0.5`}
      >
        <TeamsIcon size={size === "sm" ? 15 : 18} />
        Teams
      </a>
    </div>
  );
};

export default OrderButtons;
