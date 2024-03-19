import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1 className="navbar-brand">
          <Link to="/tunes">Tunes by TUNr</Link>
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tunes" className="nav-link active" aria-current="page">About</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" aria-label="New Tune">
                <Link to="/tunes/new">New Tune</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
