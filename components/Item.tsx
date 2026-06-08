type ItemProps = {
  label?: string;
  title?: string;
  body: readonly string[];
};

export function Item({ label, title, body }: ItemProps) {
  return (
    <article className="item">
      {label ? <span className="label">{label}</span> : null}
      {title ? <h3>{title}</h3> : null}
      {body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  );
}
