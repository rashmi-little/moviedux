import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import MovieGrid from "./components/MovieGrid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WatchList from "./components/WatchList";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([  ]);
  useEffect(() => {
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  function toggleWatchlist(movieId) {
    setWatchlist(prevWatchlist => 
      prevWatchlist.includes(movieId) ? prevWatchlist.filter(id => id !== movieId) : [...prevWatchlist, movieId]
    );
  }
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/watchlist" element={<WatchList watchlist={watchlist} movies={movies} toggleWatchlist={toggleWatchlist}></WatchList>}></Route>
            <Route
              path="/"
              element={<MovieGrid movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist}></MovieGrid>}
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
