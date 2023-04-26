import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewPodcast = () => {
  const [form, setForm] = useState({});
  const [category, setCategory] = useState("");

  const formData = new FormData();
  const handleInputChange = (e) => {
    if (e.target.name === "PodcastFile") {
      formData.append("PodcastFile", e.target.files[0], e.target.files[0].name);
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else {
      formData.append(e.target.name, e.target.value);

      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Post

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    // Api calls

    const res = await fetch("http://127.0.0.1:8000/api/addAudio/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",

        Authorization: "Token " + localStorage.getItem("token"),
      },
    });
    console.log("form data: ", formData);
    console.log("form: ", form);
    console.log(await res.json());
  };
  let fileType = "";
  if (category === "audio") {
    fileType = ".mp3";
  } else if (category === "video") {
    fileType = ".mp4";
  }

  return (
    <div className="form container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Podcast Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Podcast Name"
            name="PodcastName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSpeakerName">
          <Form.Label>Speaker Name</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Speaker Name"
            name="SpeakerName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Podcast Description</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Podcast Description"
            name="PodcastDescription"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAudio">
          <Form.Label>Category</Form.Label>
          <Form.Group className="mb-3">
            <input type="radio" name="category" /> Audio
          </Form.Group>
          <Form.Group className="mb-3">
            <input type="radio" name="category" /> Video
          </Form.Group>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Podcast File</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            type="file"
            placeholder="Select the Podcast File"
            accept={fileType}
            name="PodcastFile"
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewPodcast;
