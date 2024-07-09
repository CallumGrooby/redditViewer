import React, { useState } from "react";
import { GalleryImage } from "./Image";
import OneColIcon from "../assets/1GridLayout.svg";
import { Button } from "./Button";

const ImageGallery = ({ posts }) => {
  const [galleryColumnsOptions, setGalleryColumnsOptions] = useState(3);
  const [selectedButton, setSelectedButton] = useState(null);
  const options = [
    {
      columns: 1,
      icon: (
        <svg
          className="stroke-current"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="120" rx="11" fill="white" />
        </svg>
      ),
    },
    {
      columns: 2,
      icon: (
        <svg
          className="stroke-current"
          width="256"
          height="256"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="120" rx="11" fill="white" />
          <rect x="136" width="120" height="120" rx="11" fill="white" />
          <rect y="136" width="120" height="120" rx="11" fill="white" />
          <rect x="136" y="136" width="120" height="120" rx="11" fill="white" />
        </svg>
      ),
    },
    {
      columns: 3,
      icon: (
        <svg
          className="stroke-current"
          width="392"
          height="256"
          viewBox="0 0 392 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="120" height="120" rx="11" fill="white" />
          <rect x="136" width="120" height="120" rx="11" fill="white" />
          <rect x="272" width="120" height="120" rx="11" fill="white" />
          <rect y="136" width="120" height="120" rx="11" fill="white" />
          <rect x="136" y="136" width="120" height="120" rx="11" fill="white" />
          <rect x="272" y="136" width="120" height="120" rx="11" fill="white" />
        </svg>
      ),
    },
  ];

  const handleGridChange = (optionNumber, index) => {
    setSelectedButton(index);
    setGalleryColumnsOptions(optionNumber);
  };

  return (
    <>
      <section className="container mx-auto flex flex-row gap-4 my-8 flex-wrap justify-center">
        {options.map((optionNumber, index) => {
          return (
            <Button
              size="lg"
              variant={"default"}
              key={index}
              onClick={() => handleGridChange(optionNumber.columns, index)}
              isSelected={selectedButton === index}
              className={`${selectedButton === index ? "bg-secondary" : ""}`}
            >
              {optionNumber.icon}
            </Button>
          );
        })}
      </section>

      <section
        className="container mx-auto p-4"
        style={{ columnCount: galleryColumnsOptions }}
      >
        {posts.map((post, index) => {
          return <GalleryImage key={index} postData={post} />;
        })}
      </section>
    </>
  );
};

export default ImageGallery;
