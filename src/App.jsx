// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// JAMS
import Edit from "./Jams/Edit";
import FourOFour from "./Jams/FourOFour";
import Home from "./Jams/Home";
import Index from "./Jams/Index";
import New from "./Jams/New";
import Show from "./Jams/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tunes" element={<Index />} />
            <Route path="/tunes/new" element={<New />} />
            <Route exact path="/tunes/:id" element={<Show />} />
            <Route path="/tunes/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
