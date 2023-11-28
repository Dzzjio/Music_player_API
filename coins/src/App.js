import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import './css/index.css'
import Track from "./components/track/track";

const App = () => {
  const [name, setName] = useState('');
  const [songs, setSongs] = useState([]);
  const [loader, setLoader] = useState(false);

  const search = () => {
   setLoader(true)
    if (name.length >= 3) {
      axios
        .get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`, {
          headers: {
            "X-RapidAPI-Key":
              "c29a98b71dmsh68c51d8185ac133p1110d7jsndabcdf5e874c",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        })
        .then((res) => {
          setSongs(res.data.data);
          setLoader(false)
        });
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-5 flex">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for an artist"
            type="text"
            className="form-control input"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="col-1">
          <button onClick={() => search()} className="btn btn-dark">
            Search
          </button>
        </div>

        {loader ? (
          <div className="text-center">
            <img
              src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"
              alt="loader"
            />
          </div>
        ) : (
         <div className="row mt-5">
            {songs.map((item) => (
               <Track key={item.id} item={item} />
            ))}
         </div>
      )}
      </div>
    </div>
  );
};

export default App;
