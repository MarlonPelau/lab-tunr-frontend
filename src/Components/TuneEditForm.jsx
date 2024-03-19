import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function TuneEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [tune, setTune] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setTune({ ...tune, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTune({ ...tune, is_favorite: !tune.is_favorite });
  };

  // Update a tune. Redirect to show view
  const updateTune = () => {
    // console.log(`${API}/tunes/${id}`);

    fetch(`${API}/tunes/${id}`, {
      method: "PUT",
      body: JSON.stringify(tune),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/tunes/${id}`))
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the tune data.
  useEffect(() => {
    fetch(`${API}/bookmarks/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTune(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTune();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={tune.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Tune"
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          value={tune.artist}
          placeholder="Name of Performer"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={tune.album}
          placeholder="LP, Playlist, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={tune.is_favorite}
        />
        <label htmlFor="time">Time:</label>
        <textarea
          id="time"
          name="time"
          value={tune.time}
          onChange={handleTextChange}
          placeholder="Duration of the tune"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/tunes/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TuneEditForm;
