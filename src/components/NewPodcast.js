import React, { useState } from "react";

const NewPodcast = () => {
  const [podcastName, setPodcastName] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [podcastDescription, setPodcastDescription] = useState("");
  const [category, setCategory] = useState("");
  const [podcastFile, setPodcastFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "podcastName") {
      setPodcastName(value);
    } else if (name === "podcastDescription") {
      setPodcastDescription(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "speakerName") {
      setSpeakerName(value);
    }
  };

  const handleFileChange = (event) => {
    setPodcastFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Podcast Name: ", podcastName);
    console.log("Speaker Name: ", speakerName);
    console.log("Podcast Description: ", podcastDescription);
    console.log("Category: ", category);
    console.log("Podcast file: ", podcastFile);
    setPodcastName("");
    setSpeakerName("");
    setPodcastDescription("");
    setCategory("");
    setPodcastFile("");
  };

  let fileType = "";
  if (category === "audio") {
    fileType = ".mp3";
  } else if (category === "video") {
    fileType = ".mp4";
  }

  return (
    <div className="form container">
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
            name="podcastName"
            aria-describedby="nameHelp"
            value={podcastName}
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
            name="speakerName"
            aria-describedby="nameHelp"
            value={speakerName}
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
            name="podcastDescription"
            aria-describedby="descriptionHelp"
            value={podcastDescription}
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
          <label htmlFor="podcastFile" className="form-check-label">
            Podcast File
          </label>
          <input
            className="form-control input"
            type="file"
            accept={fileType}
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn m-3 btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default NewPodcast;
