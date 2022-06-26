import React from "react";
import "./footer.css";

const SocialIcon = (props) => {
  const { instagramUrl, facebookUrl, youtubeUrl, twitterUrl } = props;
  return (
    <div className="d-flex p-4 justify-content-center">
      <div className="icons">
        <a
          href={instagramUrl ? instagramUrl : "/"}
          className="icon icon--instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href={facebookUrl ? facebookUrl : "/"}
          className="icon icon--facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href={youtubeUrl ? youtubeUrl : "/"} className="icon icon--youtube">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href={twitterUrl ? twitterUrl : "/"} className="icon icon--twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
