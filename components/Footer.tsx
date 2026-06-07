import { siteContent } from "@/content/site";

export function Footer() {
  const { identity, footer } = siteContent;

  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <a href="#top" className="wordmark" aria-label="Rigpa, back to top">
            {identity.name}
            <span className="dot" aria-hidden="true" />
          </a>
          <span className="tag">{footer.tag}</span>
        </div>

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
    </footer>
  );
}
