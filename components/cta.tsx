import { ArrowIcon, DownIcon } from "@/components/icons";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "quiet";
  small?: boolean;
  icon?: "arrow" | "down";
};

export function Cta({
  href,
  children,
  variant = "primary",
  small = false,
  icon = "arrow",
}: CtaProps) {
  const external = href.startsWith("http");
  const className = [
    "btn",
    variant === "primary" ? "btn-primary" : "btn-quiet",
    small ? "btn-sm" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={className}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span>{children}</span>
      <span className="btn-icon" aria-hidden="true">
        {icon === "down" ? <DownIcon /> : <ArrowIcon />}
      </span>
    </a>
  );
}
