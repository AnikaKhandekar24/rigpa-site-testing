import { FlowStep } from "@/components/FlowStep";
import { HeroLogo } from "@/components/HeroLogo";
import { Item } from "@/components/Item";
import { PracticeRow } from "@/components/PracticeRow";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";

export default function Home() {
  const { hero, practice, how, ways, special, process, limits, contact, identity } =
    siteContent;

  return (
    <>
      <header className="hero wrap" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="lede">
              {hero.ledeBefore}
              <em>{hero.ledeEmphasis}</em>
              {hero.ledeAfter}
            </p>
            <div className="cta-row">
              {hero.ctas.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className={cta.variant === "primary" ? "quiet-cta" : "quiet-link"}
                >
                  {cta.label} <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
          <HeroLogo />
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

      <section className="section" id="how" aria-labelledby="how-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={how.marker}
              markerLabel={how.markerLabel}
              eyebrow={how.eyebrow}
              title={how.title}
              titleId="how-title"
            >
              {how.dekBefore}
              <em>{how.dekEmphasis}</em>
              {how.dekAfter}
            </SectionHeading>

            <div className="grid-spacer" aria-hidden="true" />
            <div className="items">
              {how.items.map((item) => (
                <Item key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ways" aria-labelledby="ways-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={ways.marker}
              markerLabel={ways.markerLabel}
              eyebrow={ways.eyebrow}
              title={ways.title}
              titleId="ways-title"
            >
              {ways.dek}
            </SectionHeading>

            <div className="grid-spacer" aria-hidden="true" />
            <div className="items">
              {ways.items.map((item) => (
                <Item key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="special" aria-labelledby="special-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={special.marker}
              markerLabel={special.markerLabel}
              eyebrow={special.eyebrow}
              title={special.title}
              titleId="special-title"
            />

            <div className="grid-spacer" aria-hidden="true" />
            <div className="items">
              {special.items.map((item) => (
                <Item key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process" aria-labelledby="process-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={process.marker}
              markerLabel={process.markerLabel}
              eyebrow={process.eyebrow}
              title={process.title}
              titleId="process-title"
            />

            <div className="grid-spacer" aria-hidden="true" />
            <div className="flow-list">
              {process.steps.map((step) => (
                <FlowStep key={step.number} {...step} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="not" aria-labelledby="not-title">
        <div className="wrap">
          <div className="grid">
            <SectionHeading
              marker={limits.marker}
              markerLabel={limits.markerLabel}
              eyebrow={limits.eyebrow}
              title={limits.title}
              titleId="not-title"
            />

            <div className="grid-spacer" aria-hidden="true" />
            <div className="items">
              {limits.items.map((item, index) => (
                <Item key={index} {...item} />
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
              <p className="eyebrow">{contact.eyebrow}</p>
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
