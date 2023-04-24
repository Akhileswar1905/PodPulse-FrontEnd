import React, { useState } from "react";

const NewPodcast = () => {
  const [form, setForm] = useState({});
  const [category, setCategory] = useState("");
  const formData = new FormData();
  const handleInputChange = (e) => {
    if (e.target.name === "PodcastFile") {
      formData.append("PodcastFile", e.target.files[0]);
      console.log(e.target.files);
    }
    if (e.target.name === "category") {
      setCategory(e.target.value);
    } else {
      formData.append(e.target.name, e.target.value);
    }
  };

  // Post

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.files);

    // Api calls

    const res = fetch("http://127.0.0.1:8000/api/addAudio/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
    });

    console.log(await (await res).json());
  };

  let fileType = "";
  if (category === "audio") {
    fileType = ".mp3";
  } else if (category === "video") {
    fileType = ".mp4";
  }

  return (
    <div className="form container">
      <h1 className="mt-3 mb-3">Upload Podcast</h1>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <label htmlFor="podcastname" className="form-label">
            Podcast Name
          </label>
          <input
            required
            type="text"
            placeholder="Please Enter Podcast Name"
            className="form-control input"
            name="PodcastName"
            aria-describedby="nameHelp"
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3">
          <label htmlFor="speaker" className="form-label">
            Speaker Name
          </label>
          <input
            required
            type="text"
            placeholder="Please Enter Speaker Name"
            className="form-control input"
            name="SpeakerName"
            aria-describedby="nameHelp"
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3">
          <label htmlFor="description" className="form-label">
            Podcast Description
          </label>
          <input
            required
            type="text"
            placeholder="Please Enter Podcast Description"
            className="form-control input"
            name="PodcastDescription"
            aria-describedby="descriptionHelp"
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="audio"
              value="audio"
              checked={category === "audio"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="audio">
              Audio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="category"
              id="video"
              value="video"
              checked={category === "video"}
              onChange={handleInputChange}
            />
            <label className="form-check-label" htmlFor="video">
              Video
            </label>
          </div>
        </div>
        <div className="form-check">
          <label htmlFor="PodcastFile" className="form-check-label">
            Podcast File
          </label>
          <input
            className="form-control input"
            type="file"
            name="PodcastFile"
            accept={fileType}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn m-3 btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewPodcast;
