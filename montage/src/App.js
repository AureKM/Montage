import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Login/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieInfo />
      <Login />
    </div>
  );
}

export default App;
