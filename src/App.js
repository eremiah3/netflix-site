import "./App.css";
import Rows from "./components/Rows/Rows";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Rows
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

//8a53d8b40ec6b4dc3694756f6212840f
