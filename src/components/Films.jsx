import React, { useState, useEffect } from "react";

function Films({ film }) {
  const [movie, setMovie] = useState('');

  const fetchMovies = async () => {
    const data = await fetch(film);
    const json = await data.json();
    setMovie(json.title);
  }

  useEffect(() => {
    fetchMovies();
  })

  return (
    <div>
      { movie }
    </div>
  )
}

export default Films;
