import { Eyebrow } from "@/components/Eyebrow";
import { PracticeRow } from "@/components/PracticeRow";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";

export default function Home() {
  const { hero, practice, contact, identity } = siteContent;

  return (
    <>
      <header className="hero wrap">
        <div className="hero-layout">
          <div className="hero-copy">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1>{hero.title}</h1>
            <p className="lede">
              {hero.ledeBefore}
              <em>{hero.ledeEmphasis}</em>
              {hero.ledeAfter}
            </p>
            <a href="#contact" className="quiet-cta">
              {hero.cta} <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-graphic" aria-hidden="true">
            <svg viewBox="0 0 420 540" role="presentation">
              <path className="graphic-axis" d="M44 32V508M20 478H400" />
              <circle className="graphic-orbit" cx="210" cy="255" r="156" />
              <ellipse
                className="graphic-orbit graphic-orbit-muted"
                cx="210"
                cy="255"
                rx="67"
                ry="156"
              />
              <path
                className="graphic-orbit graphic-orbit-muted"
                d="M69 188C151 229 269 229 351 188M69 322C151 281 269 281 351 322M54 255H366"
              />
              <path
                className="graphic-route"
                d="M85 352C124 285 155 335 196 247C235 165 282 204 344 135"
              />
              <path
                className="graphic-route graphic-route-secondary"
                d="M70 166C131 123 174 184 216 257C255 324 301 355 366 313"
              />
              <circle className="graphic-node" cx="85" cy="352" r="7" />
              <circle className="graphic-node" cx="196" cy="247" r="5" />
              <circle className="graphic-node" cx="344" cy="135" r="7" />
              <circle className="graphic-node graphic-node-ink" cx="70" cy="166" r="5" />
              <circle className="graphic-node graphic-node-ink" cx="216" cy="257" r="5" />
              <circle className="graphic-node graphic-node-ink" cx="366" cy="313" r="5" />
              <path className="graphic-tick" d="M37 99H51M37 255H51M37 411H51" />
              <circle className="graphic-anchor" cx="44" cy="478" r="4" />
            </svg>
          </div>
        </div>
      </header>

      <section className="section" id="practice" aria-labelledby="practice-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={practice.marker}
              markerLabel={practice.markerLabel}
              eyebrow={practice.eyebrow}
              title={practice.title}
              titleId="practice-title"
            >
              {practice.dekBefore}
              <em>{practice.dekEmphasis}</em>
            </SectionHeading>

            <div className="grid-spacer" aria-hidden="true" />
            <div className="practices">
              {practice.items.map((item) => (
                <PracticeRow key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="grid">
            <div className="marker" aria-hidden="true">
              <span className="roman">{contact.marker}</span>
              {contact.markerLabel}
            </div>
            <div>
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2 id="contact-title">{contact.title}</h2>
              <p>{contact.body}</p>
              <a className="mail" href={`mailto:${identity.email}`}>
                {identity.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
