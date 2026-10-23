import { WhatsAppIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/site";

type WhatsAppButtonProps = {
  compact?: boolean;
  floating?: boolean;
};

export function WhatsAppButton({
  compact = false,
  floating = false,
}: WhatsAppButtonProps) {
  const className = [
    "btn",
    "btn-wa",
    compact ? "btn-sm" : "",
    floating ? "wa-float" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={className}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <span className="btn-icon wa-mark">
        <WhatsAppIcon />
      </span>
    </a>
  );
}
