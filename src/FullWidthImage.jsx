import React from "react";
import PropTypes from "prop-types";
import "./FullWidthImage.css"; // Ensure this file exists and has necessary styles
import seikei from "./img/title2024.svg"; // Adjust the path if necessary

export default function FullWidthImage(props) {
  const {
    height = 500, // Default height
    img,
    title,
    subheading,
    imgPosition = "top center",
  } = props;

  return (
    <React.Fragment>
      <div
        className="full-width-image-container"
        style={{
          display: "grid",
          justifySelf: "center",
          position: "relative",
          margin: "0", // Remove any external margins
          padding: "0", // Remove any external padding
          boxSizing: "border-box", // Ensure padding does not add extra space
          height: height, // Set the container height
          width: "100%", // Full width
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundImage: "linear-gradient(to top right, #12d8fa 30%, #1fa2ff 100%), url(./home-jumbotron.jpg)", // Use provided image or fallback
        }}
      >
        {/* Title and Subheading */}
        {(title || subheading) && (
          <div
            style={{
              position: "absolute",
              display: "grid",
              justifySelf: "center",
              textAlign: "center",
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              margin: "0", // Ensure no margin is added
              padding: "0", // Ensure no padding is added
            }}
          >
            {/* Seikei Image */}
            <img
              src={seikei}
              alt="群馬政経懇話会"
              style={{
                width: "600px",
                marginBottom: "1rem",
              }}
            />
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-6-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  letterSpacing:"-0.07em",
                  fontWeight:"lighter",
                }}
              >
                {subheading}
              </h3>
            )}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-1-tablet is-size-1-widescreen"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  color: "white",
                  lineHeight: "1",
                  padding: "0.25em",
                  letterSpacing: "20px",
                }}
              >
                {title}
              </h1>
            )}
            
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
