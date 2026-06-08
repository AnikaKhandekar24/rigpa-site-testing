type FlowStepProps = {
  number: string;
  title: string;
  body: string;
};

export function FlowStep({ number, title, body }: FlowStepProps) {
  return (
    <article className="flow">
      <div className="step" aria-hidden="true">
        {number}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}
