"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!open) {
      setShown(false);
      document.body.classList.remove("lock");
      return;
    }

    document.body.classList.add("lock");
    const frame = requestAnimationFrame(() => setShown(true));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("lock");
    };
  }, [open]);

  return (
    <>
      <header className="nav-wrap">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#inicio">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mark.png" alt="" width={138} height={160} />
            <span>Altaira Group</span>
          </a>
          <div className="nav-links">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <WhatsAppButton compact />
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <div className={shown ? "menu is-open" : "menu"} id="menu" hidden={!open}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <WhatsAppButton />
      </div>
    </>
  );
}
