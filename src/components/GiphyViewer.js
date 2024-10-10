import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, Row } from "react-bootstrap";
import Search from "./Search";

const GiphCard = (props) => {
  const { image, title, url } = props;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <CardBody>
        <Card.Title>
            <a href={url}>
                {title}
            </a>
        </Card.Title>
      </CardBody>
    </Card>
  );
};

const GiphyViewer = () => {
  const GIPHY_URL = "https://api.giphy.com/v1/gifs/trending";
  const GIPHY_API_KEY = "WwUZ78DNN1ZVDr2rBpHvzycWmE6HMysk";

  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    axios
      .get(`${GIPHY_URL}?apikey=${GIPHY_API_KEY}`)
      .then((res) => {
        console.log(res.data.data);
        setGifs(res.data.data);
      })
      .catch((res) => {
        console.error(res);
      });
  }, []);
  return (
      <Row xs={1} md={2} lg={3}>
        <Search/>
        {
      gifs.map((gif) => {
        return <GiphCard key={gif.id} url={gif.url} image={gif.images.fixed_width.url} title={gif.title}/>
      })
      }
    </Row>
  );
};

export default GiphyViewer;
