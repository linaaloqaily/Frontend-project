import React from "react";
import { useState, useEffect, useContext } from "react";

import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import SongContext from "../../context/Song";

function Home() {
  const { songes, getSongs } = useContext(SongContext);
  useEffect(() => {
    getSongs();
  }, []);

  return (
    <>
      <Carousel />
      <br />
      <h3 className="text-center">
        Enjoy with us and listen to your favorite song
      </h3>
      <hr />
      <div className="container">
        <div className="cards">
          {songes && songes.map((song) => <Card song={song} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
