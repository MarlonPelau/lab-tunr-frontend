import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function TuneNewForm() {
  const navigate = useNavigate();
  const [tune, setTune] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });

  // Add a tune. Redirect to the index view.
  const addTune = () => {
    fetch(`${API}/tunes`, {
      method: "POST",
      body: JSON.stringify(tune),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/tunes`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setTune({ ...tune, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTune({ ...tune, is_favorite: !tune.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTune();
  };

  return (
    <div className="New">
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
          checked={bookmark.is_favorite}
        />
        <label htmlFor="time">Time:</label>
        <textarea
          id="time"
          name="time"
          value={tune.time|| ""}
          onChange={handleTextChange}
          placeholder="Duration of the tune"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default TuneNewForm;
