import { useState, useEffect } from "react";
import Tune from "./Tune";

const API = import.meta.env.VITE_BASE_URL;

function Tunes() {
  const [tunes, setTunes] = useState([]);
  useEffect(() => {
    fetch(`${API}/tunes`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setTunes(data)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="Tunes">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>🎼 Tunes 📻</th>
              <th>click👇🏾 below</th>
            </tr>
          </thead>
          <tbody>
            {tunes.map((tune) => {
              return <Tune key={tune.id} tune={tune} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Tunes;
