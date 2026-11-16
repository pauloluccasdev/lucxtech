"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ButtonLink from "./ui/ButtonLink";

const LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/contato" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const menu = document.getElementById("mobile-menu");
      const focusable = menu?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="/" className="site-header__brand" aria-label="Lucx — início">
          <Image
            src="/brand/lucx-wordmark-on-light.svg"
            alt="lucx."
            fill
            sizes="116px"
            priority
            className="theme-logo theme-logo--light"
          />
          <Image src="/brand/lucx-wordmark-on-dark.svg" alt="" fill sizes="116px" priority className="theme-logo theme-logo--dark" />
        </a>

        <nav className="site-header__nav" aria-label="Navegação principal">
          {LINKS.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>

        <div className="site-header__actions">
          <ButtonLink
            href="/contato"
            className="site-header__cta"
          >
            Vamos conversar
          </ButtonLink>
          <button
            ref={triggerRef}
            type="button"
            className="menu-trigger"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div className={`menu-backdrop ${open ? "is-open" : ""}`} aria-hidden={!open} onMouseDown={closeMenu} />
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="mobile-menu__top">
          <Image src="/brand/lucx-wordmark-on-light.svg" alt="lucx." width={116} height={64} className="theme-logo theme-logo--light" />
          <Image src="/brand/lucx-wordmark-on-dark.svg" alt="" width={116} height={64} className="theme-logo theme-logo--dark" />
          <button ref={closeRef} type="button" className="menu-close" aria-label="Fechar menu" onClick={closeMenu}>×</button>
        </div>
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          {LINKS.map((link, index) => (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, "0")}</span>{link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <ButtonLink href="/contato" onClick={closeMenu}>
            Vamos conversar
          </ButtonLink>
          <a href="mailto:contato.pauloraimundo@gmail.com">contato.pauloraimundo@gmail.com</a>
        </div>
      </div>
    </header>
  );
}
