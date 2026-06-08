type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className={compact ? "logo logo-compact" : "logo"}>
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle className="logo-ring" cx="32" cy="32" r="24" />
        <path className="logo-line logo-line-soft" d="M8 32H56" />
        <path
          className="logo-line logo-line-soft"
          d="M32 8C22 18 22 46 32 56M32 8C42 18 42 46 32 56"
        />
        <path
          className="logo-route"
          d="M15 43C22 31 28 38 34 27C40 16 47 22 53 13"
        />
        <circle className="logo-node" cx="15" cy="43" r="3.6" />
        <circle className="logo-node" cx="34" cy="27" r="2.8" />
        <circle className="logo-node" cx="53" cy="13" r="3.6" />
      </svg>
      <span className="logo-wordmark">
        <span className="logo-word">Rigpa</span>
        <span className="logo-dot" aria-hidden="true" />
      </span>
    </span>
  );
}
