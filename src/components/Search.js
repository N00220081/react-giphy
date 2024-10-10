import axios from "axios";
import { useState } from "react";

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const GIPHY_URL = "https://api.giphy.com/v1/gifs/search";
    const GIPHY_API_KEY = "WwUZ78DNN1ZVDr2rBpHvzycWmE6HMysk";

    const {setGifs} = props;
  
  const handleSearch = () => {

    console.log('handling search')

    axios.get(`${GIPHY_URL}?api_key=${GIPHY_API_KEY}&q=${searchTerm}`)
    .then((res) => {
        console.log(res.data.data)
        setGifs(res.data.data)
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
    handleSearch()
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <input value={searchTerm} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default Search;
