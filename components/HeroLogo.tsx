export function HeroLogo() {
  return (
    <div className="hero-logo" aria-hidden="true">
      <div className="hero-browser">
        <span className="hero-browser-glow hero-browser-glow-one" />
        <span className="hero-browser-glow hero-browser-glow-two" />
        <div className="hero-browser-bar">
          <span className="hero-browser-spark" />
          <span className="hero-browser-dot" />
          <span className="hero-browser-dot hero-browser-dot-soft" />
          <span className="hero-browser-address">rigpa.co</span>
        </div>
        <div className="hero-browser-body">
          <div className="hero-browser-lines">
            <span className="hero-browser-line hero-browser-line-primary" />
            <span className="hero-browser-line hero-browser-line-secondary" />
            <span className="hero-browser-line hero-browser-line-tertiary" />
          </div>
          <div className="hero-browser-card">
            <div className="hero-browser-card-mark">
              <svg className="hero-browser-orbit" viewBox="0 0 120 120" role="presentation">
                <circle className="hero-browser-ring" cx="60" cy="60" r="42" />
                <path className="hero-browser-map-line" d="M18 60H102" />
                <path
                  className="hero-browser-map-line hero-browser-map-line-soft"
                  d="M60 18C42 36 42 84 60 102M60 18C78 36 78 84 60 102"
                />
                <path
                  className="hero-browser-map-line hero-browser-map-line-soft"
                  d="M25 40C47 50 73 50 95 40M25 80C47 70 73 70 95 80"
                />
                <path
                  className="hero-browser-route hero-browser-route-shadow"
                  d="M26 88C39 63 49 76 60 58C71 40 86 50 100 30"
                />
                <path className="hero-browser-route" d="M26 88C39 63 49 76 60 58C71 40 86 50 100 30" />
                <circle className="hero-browser-node" cx="26" cy="88" r="3.5" />
                <circle className="hero-browser-node hero-browser-node-mid" cx="60" cy="58" r="3" />
                <circle className="hero-browser-node" cx="100" cy="30" r="3.5" />
              </svg>
            </div>
            <div className="hero-browser-card-copy">
              <span className="hero-browser-copy-line hero-browser-copy-line-long" />
              <span className="hero-browser-copy-line" />
              <span className="hero-browser-copy-line hero-browser-copy-line-short" />
            </div>
          </div>
          <div className="hero-browser-chips">
            <span>Technology</span>
            <span>Privacy</span>
            <span>AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
