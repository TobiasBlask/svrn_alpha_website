'use client';
import { useState } from 'react';

export function NavMobile({
  loginHref,
  loginLabel,
  productHref,
}: {
  loginHref: string;
  loginLabel: string;
  productHref: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`nav-burger${open ? ' nav-burger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <>
          <div className="nav-backdrop" onClick={close} aria-hidden="true" />
          <nav className="nav-panel" aria-label="Navigation">
            <a href="#rhythm" onClick={close}>Der Rhythmus</a>
            <a href="#floor" onClick={close}>Analysten</a>
            <a href="#compare" onClick={close}>Vergleich</a>
            <a href="#chronicle" onClick={close}>Historie</a>
            <a href="#pricing" onClick={close}>Pakete</a>
            <a href={productHref} onClick={close}>Produkt</a>
            <div className="nav-panel__ctas">
              <a href={loginHref} onClick={close} className="nav-panel__login">
                {loginLabel}
              </a>
              <a className="btn-l btn-l--oxblood" href="#pricing" onClick={close}>
                Jetzt starten →
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
