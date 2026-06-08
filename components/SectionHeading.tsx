import { Eyebrow } from "@/components/Eyebrow";

type SectionHeadingProps = {
  marker: string;
  markerLabel: string;
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  titleId: string;
};

export function SectionHeading({
  marker,
  markerLabel,
  eyebrow,
  title,
  children,
  titleId,
}: SectionHeadingProps) {
  return (
    <>
      <div className="marker" aria-hidden="true">
        <span className="roman">{marker}</span>
        {markerLabel}
      </div>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId}>{title}</h2>
        {children ? <p className="dek">{children}</p> : null}
      </div>
    </>
  );
}
