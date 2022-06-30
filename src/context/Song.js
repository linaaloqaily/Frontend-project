import axios from "axios";
import { createContext, useState } from "react";
const SongContext = createContext();
export const SongProvider = ({ children }) => {
  const [songes, setSonges] = useState([]);

  function getSongs() {
    const options = {
      method: "GET",
      url: "https://genius-song-lyrics1.p.rapidapi.com/search",
      params: { q: "Alan Walker", per_page: "10", page: "1" },
      headers: {
        "X-RapidAPI-Key": "165a0080dcmsh28df8b81cf489bcp12792cjsn8de54e9fe3e3",
        "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.response.hits);
        setSonges(response.data.response.hits);
      })
      .catch(function (error) {});
  }

  return (
    <SongContext.Provider value={{ songes, getSongs, setSonges }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;
