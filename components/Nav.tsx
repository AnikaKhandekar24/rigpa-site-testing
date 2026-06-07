import { siteContent } from "@/content/site";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <nav className="top" aria-label="Primary navigation">
      <div className="wrap nav-row">
        <a href="#top" className="brand-link" aria-label="Rigpa, back to top">
          <Logo />
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
