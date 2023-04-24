import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Podcast = (props) => {
  let podcasts = props.podcast;

  const handleLike = (e) => {
    if (e.target.className === "fa-regular fa-heart") {
      e.target.className = "fa-solid fa-heart";
    } else {
      e.target.className = "fa-regular fa-heart";
    }
  };
  const handlePlay = (e) => {
    if (e.target.className === "fa-solid fa-play") {
      e.target.className = "fa-solid fa-pause";
    } else {
      e.target.className = "fa-solid fa-play";
    }
  };

  const res = fetch("http://127.0.0.1:8000/api/audiopodcasts/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + localStorage.getItem("token"),
    },
  }).then(async (data) => {
    podcasts = await data.json();
    console.log(podcasts);
    return (
      <div className="container">
        <div className="box">
          <Row xs={1} md={2} className="g-4  container">
            {podcasts.map((podcast, index) => (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{podcast.title}</Card.Title>
                    <Card.Text>{podcast.desc}</Card.Text>
                  </Card.Body>
                  <div className="icon">
                    <i
                      onClick={handlePlay}
                      style={{ margin: "4px", cursor: "pointer" }}
                      className="fa-solid fa-play"
                    ></i>
                    <i
                      onClick={handleLike}
                      style={{ margin: "4px", cursor: "pointer" }}
                      className="fa-regular fa-heart"
                    ></i>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  });
  console.log(podcasts);
};

export default Podcast;
