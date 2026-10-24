import { Send, MessageCircle, Users } from "lucide-react";
import { CONTACT_LINKS } from "../../constants/contact";

export const OrderButtons = ({ isDark = false }) => {
  return (
    <div className="flex flex-col space-y-3 w-full mt-auto pt-6">
      <a
        href={CONTACT_LINKS.telegram}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-pbnred text-white font-semibold py-3.5 rounded-xl hover:bg-pbnred-dark transition-all shadow-sm"
      >
        <Send className="w-4 h-4" /> Order on Telegram
      </a>
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-2 w-full border font-semibold py-3.5 rounded-xl transition-all ${
          isDark
            ? "border-slate-700 text-white hover:bg-slate-800"
            : "border-slate-200 text-pbndark hover:bg-slate-50"
        }`}
      >
        <MessageCircle className="w-4 h-4" /> Order on WhatsApp
      </a>
      <a
        href={CONTACT_LINKS.teams}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center justify-center gap-2 w-full border font-semibold py-3.5 rounded-xl transition-all ${
          isDark
            ? "border-[#0078D4]/50 text-[#59B4F8] hover:bg-[#0078D4]/20"
            : "border-[#0078D4]/30 text-[#0078D4] hover:bg-[#0078D4]/5"
        }`}
      >
        <Users className="w-4 h-4" /> Order on Teams
      </a>
    </div>
  );
};
