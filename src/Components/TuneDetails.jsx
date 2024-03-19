import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

function TuneDetails() {
  const [tune, setTune] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch(`${API}/tunes/${id}`)
    .then((response) => response.json())
    .then((data) => setTune(data))
    .catch((error) => console.error(error));
    }, [id]);

   function deleteTune() {
      fetch(`${API}/tunes/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate(`/tunes`))
        .catch((error) => console.error(error));
    }


return (
  <article>
    <h3>
      {tune.is_favorite ? <span>⭐️</span> : null} {tune.name}
    </h3>
    <h5>
      <span>
        <a href={tune.artist}>{tune.name}</a>
      </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {tune.artist}
    </h5>
    <h6>{tune.album}</h6>
    <p>{tune.time}</p>
    <div className="showNavigation">
      <div>
        <Link to={`/tunes`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/tunes/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
      <button onClick={deleteTune}>Delete</button>
      </div>
    </div>
    {/* <Spinners/> */}
  </article>
)
}

export default TuneDetails;
