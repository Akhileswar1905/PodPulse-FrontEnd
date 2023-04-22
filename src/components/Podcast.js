import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Podcast = (props) => {
  const podcasts = props.podcast;

  return (
    <div className="container box">
      <h2>Podcasts</h2>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {podcasts.map((podcast, index) => (
            <Col key={index}>
              <Card>
                <Card.Img variant="top" src={podcast.image} />

                <Card.Body>
                  <Card.Title>{podcast.title}</Card.Title>
                  <Card.Text>{podcast.desc.substring(0, 30) + "..."}</Card.Text>
                </Card.Body>
                <div className="open">
                  <button className="m-2">Play</button>
                  <button className="m-2">Like</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Podcast;
