import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { RiMovie2Line } from 'react-icons/ri';
import {SlPeople} from "react-icons/sl";
import {PiPlanet,PiAlien,PiRocketLaunch,PiCarProfileDuotone} from "react-icons/pi";


function App() {
  const [movies, setMovies] = useState([]);
  const [api, setApi] = useState("");
  const [name, setName] = useState("Films");
  const [films, setFilms] = useState([]);
  const [searchQuery,setSearch]=useState("");

  useEffect(() => {
    fetchMovieTitles();
  }, [api]);

  const setMoviesWithFilms = (movieData) => {
    setFilms(movieData);
    setMovies(movieData);
  };

  const fetchMovieTitles = async () => {
    try {
      const response = await fetch(`https://swapi.dev/api/${api}/`);
      const data = await response.json();

      if (api === "films") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.title,
          Director: movie.director,
          Release_Date: movie.release_date,
          Producers:movie.producer,
          Opening_Crawl:movie.opening_crawl,
          icon: <RiMovie2Line style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      } else if (api === "people") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.name,
          Year: movie.birth_year,
          Gender: movie.gender,
          Height:movie.height,
          Weight:movie.mass,
          icon: <SlPeople style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      } else if (api === "planets") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.name,
          Climate: movie.climate,
          Gravity: movie.gravity,
          Population:movie.population,
          Terrain:movie.terrain,
          icon: <PiPlanet style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      } else if (api === "species") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.name,
          Classification: movie.classification,
          Language: movie.language,
          Life_Span:movie.average_lifespan,
          Designation:movie.designation,
          icon: <PiAlien style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      } else if (api === "starships") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.name,
          Model: movie.model,
          HyperDrive_Rating: movie.hyperdrive_rating,
          Manufacturer:movie.manufacturer,
          Capacity:movie.cargo_capacity,
          icon: <PiRocketLaunch style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      } else if (api === "vehicles") {
        const movieTitles = data.results.map((movie) => ({
          Name: movie.name,
          Model: movie.model,
          Max_Speed: movie.max_atmosphering_speed,
          Manufacturer:movie.manufacturer,
          Cost:movie.cost_in_credits,
          icon: <PiCarProfileDuotone style={{backgroundColor:"rgba(72, 74, 109, 0.010)",}} size={24}/>
        }));
        setMoviesWithFilms(movieTitles);
      }
    } catch (error) {
      console.error("Error fetching movie titles:", error);
      setMoviesWithFilms([]);
    }
  };

  const updateApiState = (newApi) => {
    setApi(newApi);
  };

  const updateNameState = (name) => {
    setName(name);
  };

  const updateSearchQuery=(data)=>{
    setSearch(data);
    console.log(searchQuery);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar update={updateSearchQuery}/>
        <LeftBar
          movies={movies}
          updateApi={updateApiState}
          updateName={updateNameState}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={<RightBar movies={movies} name={name}  search={searchQuery}/>}
            />
          </Routes>
        </LeftBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
