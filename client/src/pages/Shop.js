import { useState } from "react";
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StickerItem from '../components/sticker/StickerItem';

function Shop() {

  const [ready, setReady] = useState(false);
  const [stickerList, setStickerList] = useState([]);
  Axios.get('http://localhost:3001/stickers').then((response) => {
    if (stickerList.length === 0) {
      setStickerList(response.data);
    }
    setReady(true);
  })
  return (
    <div>
      {ready ? (<Container>
        <Row xs={1} md={2} className="g-4">
          {stickerList.map((val, key) =>
            <Col key={key}>
              <StickerItem sticker={val} />
            </Col>
          )}
        </Row>
      </Container>) : (<p>Loading Data</p>)}
    </div>
  );
}

export default Shop;
