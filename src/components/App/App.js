import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MovieList from "../MovieList/MovieList";
{
  /* import Details here? */
}
import Details from "../Details/Details";
{
  /* import AddMovie here? */
}

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details" exact>
          <Details />
        </Route>
        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          {/* AddMovie route here? */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
