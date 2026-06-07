import { Eyebrow } from "@/components/Eyebrow";
import { PracticeRow } from "@/components/PracticeRow";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/content/site";

export default function Home() {
  const { hero, practice, contact, identity } = siteContent;

  return (
    <>
      <header className="hero wrap">
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
