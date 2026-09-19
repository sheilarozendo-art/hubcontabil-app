"use client"

// Global page footer — same component on every page.

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer-root {
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
          width: 100%;
          box-sizing: border-box;
          padding: 20px 28px;
          flex-shrink: 0;
        }
        .footer-inner {
          max-width: 1360px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .footer-brand-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .footer-brand-name {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #030303;
          line-height: 1.2;
        }
        .footer-brand-sub {
          font-family: 'Michroma', monospace;
          font-size: 8px;
          color: #94A3B8;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .footer-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-link {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 12px;
          color: #64748B;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.15s;
        }
        .footer-link:hover { color: #1D4ED8; }
        .footer-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 999px;
          padding: 3px 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 11px;
          color: #15803D;
          white-space: nowrap;
        }
        .footer-copy {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 400;
          font-size: 11.5px;
          color: #94A3B8;
          white-space: nowrap;
        }
        /* Tablet: hide nav links, keep brand + right */
        @media (max-width: 767px) {
          .footer-root { padding: 18px 20px; }
          .footer-links { display: none; }
          .footer-inner { justify-content: space-between; }
        }
        /* Mobile: full vertical stack, centered */
        @media (max-width: 479px) {
          .footer-root { padding: 20px 16px; }
          .footer-inner {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            text-align: center;
          }
          .footer-right {
            flex-direction: column;
            align-items: center;
            gap: 8px;
          }
          .footer-copy { text-align: center; }
        }
      `}</style>

      <footer className="footer-root" role="contentinfo">
        <div className="footer-inner">
          {/* Brand mark */}
          <div className="footer-brand">
            <svg
              width="28"
              height="22"
              viewBox="0 0 400 313"
              fill="none"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#A155FF"
                d="M238.81,240.28v-101.16c0-37.66-30.82-68.47-68.47-68.47h0c-37.66,0-68.47,30.81-68.47,68.47v169.63s68.47,0,68.47,0c37.66,0,68.47-30.81,68.47-68.47h0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1D4ED8"
                d="M398.76,240.28V68.47C398.76,30.81,367.95,0,330.29,0h0c-37.66,0-68.47,30.81-68.47,68.47v171.81c0,37.66,30.82,68.47,68.47,68.47h0c37.66,0,68.47-30.81,68.47-68.47h0Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#43C1EF"
                d="M136.94,308.75v-68.48c0-37.65-30.82-68.47-68.47-68.47h0C30.82,171.81,0,202.63,0,240.28h0c0,37.66,30.82,68.48,68.47,68.48h68.48Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#1D4ED8"
                d="M136.94,240.28v68.48h-35.07v-128.19c20.89,11.76,35.07,34.16,35.07,59.71h0Z"
              />
            </svg>
            <div className="footer-brand-text">
              <span className="footer-brand-name">
                HUB<span style={{ fontWeight: 400 }}>Contábil</span>
              </span>
              <span className="footer-brand-sub">Financial</span>
            </div>
          </div>

          {/* Navigation links — hidden on mobile */}
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#" className="footer-link">
              Central de Ajuda
            </a>
            <a href="#" className="footer-link">
              Política de Privacidade
            </a>
            <a href="#" className="footer-link">
              Termos de Uso
            </a>
            <a href="#" className="footer-link">
              Contato
            </a>
          </nav>

          {/* Right: status badge + copyright */}
          <div className="footer-right">
            <span className="footer-badge">
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22C55E",
                  display: "inline-block",
                }}
              />
              Sistema operacional
            </span>
            <span className="footer-copy">© {year} HubContábil</span>
          </div>
        </div>
      </footer>
    </>
  )
}
