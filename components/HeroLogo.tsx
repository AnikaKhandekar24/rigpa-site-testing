export function HeroLogo() {
  return (
    <div className="hero-logo" aria-hidden="true">
      <svg className="hero-logo-mark" viewBox="20 20 220 220" role="presentation">
        <circle className="hero-logo-ring" cx="130" cy="130" r="83" />
        <path className="hero-logo-line" d="M47 130H213" />
        <path
          className="hero-logo-line hero-logo-line-soft"
          d="M130 47C94 80 94 180 130 213M130 47C166 80 166 180 130 213"
        />
        <path
          className="hero-logo-line hero-logo-line-soft"
          d="M60 92C104 112 156 112 200 92M60 168C104 148 156 148 200 168"
        />
        <path
          className="hero-logo-route hero-logo-route-shadow"
          d="M62 174C86 128 107 154 130 118C153 82 181 102 207 63"
        />
        <path
          className="hero-logo-route"
          d="M62 174C86 128 107 154 130 118C153 82 181 102 207 63"
        />
        <circle className="hero-logo-node" cx="62" cy="174" r="5" />
        <circle className="hero-logo-node hero-logo-node-mid" cx="130" cy="118" r="4" />
        <circle className="hero-logo-node" cx="207" cy="63" r="5" />
        <circle className="hero-logo-dot-large" cx="226" cy="42" r="4" />
      </svg>
    </div>
  );
}
