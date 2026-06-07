import { siteContent } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { identity, footer } = siteContent;

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <a href="#top" className="brand-link" aria-label="Rigpa, back to top">
            <Logo compact />
          </a>

          <div className="footer-content">
            <span className="tag">{footer.tag}</span>
            <div className="legal">
              <strong>{identity.name}.co</strong>
              {footer.disclosureBefore}
              <strong>{identity.companyName}</strong>
              {footer.disclosureMiddle}
              <a href={`mailto:${identity.email}`}>{identity.email}</a>.
            </div>
            <div className="copy">
              © {identity.copyrightYear} {identity.companyName}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
