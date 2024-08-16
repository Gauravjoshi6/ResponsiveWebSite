import React from "react";
import videos from "/assets/videos.mp4";

function Video() {
  return (
    <div className="Video" data-aos="zoom-in" data-aos-duration="1000">
      <iframe src={videos}></iframe>
    </div>
  );
}

export default Video;
