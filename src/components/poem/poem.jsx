import Vote from "./vote";
import ReactMarkdown from "react-markdown";

export default function Poem({ id, title, author, text, votes }) {
  return (
    <div className="poem">
      <div>
        <h3>{title}</h3>
        <small>{author}</small>
      </div>
      <ReactMarkdown children={`${text.slice(0, 100)}...`} />
      <a href={`/poem/${id}`}>read more</a>
      <Vote voteCount={votes} id={id} />
    </div>
  );
}
