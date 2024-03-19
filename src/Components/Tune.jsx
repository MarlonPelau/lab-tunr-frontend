import { Link } from "react-router-dom";

function Tune ({ tune }) {
  return (
    <tr>
      <td>
        {tune.is_favorite ? (
          <span>🍣</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
    <td style={{ cursor: "alias" }}>
        <a href={tune.url} target="_blank" rel="noreferrer">
          {tune.name}
        </a>
      </td>
      <td>
        <Link to={`/tunes/${tune.id}`}>🎧</Link>
      </td>
    </tr>
  );
}

export default Tune;
