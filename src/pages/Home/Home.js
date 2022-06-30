import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";


const options = {
  method: 'GET',
  url: 'https://genius-song-lyrics1.p.rapidapi.com/search',
  params: {q: 'Alan Walker', per_page: '10', page: '1'},
  headers: {
    'X-RapidAPI-Key': '165a0080dcmsh28df8b81cf489bcp12792cjsn8de54e9fe3e3',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  }
};

function Home() {
  const [songes, setSonges] = useState([]);


  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.response.hits);
      setSonges(response.data.response.hits)
    }).catch(function (error) {
      console.error(error);
    });
    
  }, []);

  return (
    <>
      <Carousel />
      <br/>
      <h3 className="text-center">Enjoy with us and listen to your favorite song</h3>
      <hr/>
      <div className="container">
        <div className="cards">
          {songes&&songes.map((song) => (
            <Card song={song} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
