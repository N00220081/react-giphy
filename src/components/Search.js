import axios from "axios";
import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const GIPHY_URL = "https://api.giphy.com/v1/gifs/trending";
    const GIPHY_API_KEY = "WwUZ78DNN1ZVDr2rBpHvzycWmE6HMysk";
  
  const handleSearch = () => {
    axios.get(`${GIPHY_URL}?api_key=${GIPHY_API_KEY}&q=${searchTerm}`)
    .then((res) => {
        console.log(res.data.data)
    })
    .catch((err) => {
        console.log(err);
    })
  };
  const handleClick = () => {
    if (!searchTerm) {
      alert("Please enter a search term");
      return;
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default Search;
