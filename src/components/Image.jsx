import React, { useState } from "react";
import { Button } from "./Button";
import { cn } from "../ultilies/ButtonUltis";

export const GalleryImage = ({ postData }) => {
  const [OpenMoreInfo, setMoreInfo] = useState(false);

  const handleChangeOpenStatus = () => {
    setMoreInfo(!OpenMoreInfo);
  };
  return (
    <>
      <Image
        onClick={handleChangeOpenStatus}
        post={postData}
        handleClick={handleChangeOpenStatus}
      />

      <MoreInfo
        post={postData}
        openStatus={OpenMoreInfo}
        handleOpenStatus={handleChangeOpenStatus}
      />
    </>
  );
};

const Image = ({ post, handleClick = null, className }) => {
  return (
    // <div
    //   className={cn("w-full p-2 rounded-lg", className)}
    //   onClick={handleClick}
    // >
    //   <img className="rounded-lg" src={post.url} />
    // </div>

    <div
      className={cn("w-full h-full m-2 rounded-lg shadow-lg", className)}
      onClick={handleClick}
    >
      <img
        src={post.url}
        alt="Placeholder"
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
    </div>
  );
};

const MoreInfo = ({ post: postData, openStatus, handleOpenStatus }) => {
  console.log(postData);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
      bg-[rgba(0,0,0,0.3)]  w-full h-full p-8
      ${openStatus ? "visible" : "invisible"}
      `}
    >
      <div className="relative bg-white max-h-full h-full flex flex-row gap-4 p-4">
        <Button
          className={"absolute left-0 top-0 m-4"}
          size="lg"
          variant={"default"}
          onClick={handleOpenStatus}
        >
          <svg
            className="fill-current w-8 h-8"
            height="800px"
            width="800px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 460.775 460.775"
          >
            <path
              d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
            />
          </svg>
        </Button>

        <div className={"h-full flex-grow inline-flex justify-center"}>
          <img src={postData.url} alt="Placeholder" className="h-full w-auto" />
        </div>

        <div className="basis-1/3 font-mavenPro flex flex-row justify-between">
          <h1 className="text-2xl">
            <span className="text-secondary">u/</span>
            {postData.author}
          </h1>
          <Button
            href={`https://reddit.com${postData.permaLink}`}
            size="default"
            variant={"default"}
          >
            <svg
              className="stroke-current w-8 h-8"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Interface / External_Link">
                <path
                  id="Vector"
                  d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
