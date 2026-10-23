"use client";

import { useEffect, useRef } from "react";

export function Motion() {
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = bar.current;

    const onScroll = () => {
      if (!node) return;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? window.scrollY / height : 0;
      node.style.transform = `scaleX(${value})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll("main section[id]");
    const links = document.querySelectorAll(".nav-links a");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => {
            const current = link.getAttribute("href") === `#${entry.target.id}`;
            if (current) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => spy.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      spy.disconnect();
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <span ref={bar} />
    </div>
  );
}
