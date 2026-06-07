import type { PracticeItem } from "@/content/site";

export function PracticeRow({ number, title, body, scope }: PracticeItem) {
  return (
    <article className="practice">
      <div className="num" aria-hidden="true">
        {number}
      </div>
      <div className="practice-body">
        <h3>{title}</h3>
        <p>{body}</p>
        <p className="scope">{scope}</p>
      </div>
    </article>
  );
}
