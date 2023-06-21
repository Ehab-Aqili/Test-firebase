import React, { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from "./config/fierbase";
import { getDocs, collection, addDoc } from "firebase/firestore";

function App() {
  //  display The Data Using UseState
  const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");
  // Add new Movie To DataBase
  const [newMovieTitle, setNewMovieTilte] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  // Get the Data from FireBase
  const getMovieList = async () => {
    const data = await getDocs(moviesCollectionRef);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setMovieList(filterData);
  };

  // useEffect(() => {
  //   getMovieList();
  // }, []);


// onSubmitMovie Function that Add new Movie to fireStore in fireBase 
  const onSubmitMovie = async () => {
    await addDoc(moviesCollectionRef, {
      title: newMovieTitle,
      releaseData: newReleaseDate,
      reseivedAnOscar: isNewMovieOscar,
    });
    getMovieList();
  };

  return (
    <>
      <Auth />
      <div>
        <input
          placeholder="movie title ..."
          onChange={(e) => setNewMovieTilte(e.target.value)}
        />
        <input
          placeholder="movie release date ..."
          type="number"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label>Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.reseivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>{movie.releaseData}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
