import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

const VideoPodcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const handleLike = (e) => {
    if (e.target.className === "fa-regular fa-heart") {
      e.target.className = "fa-solid fa-heart";
    } else {
      e.target.className = "fa-regular fa-heart";
    }
  };
  const handlePlay = (e, podcast) => {
    if (e.target.className === "fa-solid fa-play") {
      e.target.className = "fa-solid fa-pause";
      const pod = document.querySelector(`#${podcast.PodcastName}`);
      pod.play();
    } else {
      const pod = document.querySelector(`#${podcast.PodcastName}`);
      e.target.className = "fa-solid fa-play";
      pod.pause();
    }

    // Api calls
    console.log(podcast);
    fetch(`http://127.0.0.1:8000/media/${podcast.PodcastFile}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    });
  };

  useEffect(() => {
    const fetchPods = async () => {
      const res = fetch("http://127.0.0.1:8000/api/videopodcasts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + localStorage.getItem("token"),
        },
      });

      console.log("res", await res);

      const data = await (await res).json();
      console.log("data", data);
      const pods = JSON.parse(data);
      setPodcasts(pods);
    };

    fetchPods();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <Row xs={1} md={2} className="g-4  container">
          {podcasts.map((podcast, index) => (
            <Col key={index} id={index}>
              <Card>
                <Card.Body>
                  {/* {console.log(podcast)} */}
                  <video
                    src={`http://127.0.0.1:8000/media/${podcast.PodcastFile}`}
                    style={{ backgroundColor: "black" }}
                    controls
                    loop
                    id={`${podcast.PodcastName}`}
                  ></video>
                  <Card.Title>{podcast.PodcastName}</Card.Title>
                  <Card.Text>{podcast.PodcastDescription}</Card.Text>
                </Card.Body>
                <div className="icon">
                  <i
                    className="fa-solid fa-play"
                    style={{ margin: "4px", cursor: "pointer" }}
                    onClick={(e) => handlePlay(e, podcast)}
                    id="play"
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
};

export default VideoPodcasts;
