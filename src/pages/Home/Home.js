import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: '<REQUIRED>',
    type: 'multi',
    offset: '0',
    limit: '10',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '18d6927f91mshbbd8c86fb0df2f3p1a35bdjsn3cd27d9718b0',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

function Home() {
  const [songes, setSonges] = useState([]);


  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
  }, []);

  return (
    <>
      <Carousel />
      <div className="container">
        <div className="grid">
          {songes&&songes.map((song) => (
            <Card key={song.id} song={song} />
          ))}
        </div>
              </div>
    </>
  );
}

export default Home;
