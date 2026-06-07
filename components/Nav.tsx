import { siteContent } from "@/content/site";

export function Nav() {
  return (
    <nav className="top" aria-label="Primary navigation">
      <div className="wrap nav-row">
        <a href="#top" className="wordmark" aria-label="Rigpa, back to top">
          {siteContent.identity.name}
          <span className="dot" aria-hidden="true" />
        </a>
        <ul>
          {siteContent.navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
