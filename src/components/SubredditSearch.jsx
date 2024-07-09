import { callbackPromise } from "nodemailer/lib/shared";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { SortingOptions } from "./SortingOptions";

export const SubredditSearch = ({ subreddit, subredditInfoChange }) => {
  const [subredditInfo, setSubredditInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const FetchSubRedditInfo = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit.subredditName}/about.json`
      );

      const data = await response.json();

      const subRedditData = {
        title: data.data.title,
        description: data.data.public_description,
        icon: data.data.community_icon.split("?")[0],
      };

      setSubredditInfo(subRedditData);
    } catch (error) {
      setErrorMessage("Failed find sub reddit");
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!subreddit.subredditName) return;
    //Resets the error message
    setErrorMessage(null);
    setSubredditInfo(null);
    FetchSubRedditInfo();
  }, [subreddit]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    subredditInfoChange("subredditName", values.search);
  };

  const handleChangeSortingOption = (sortOption) => {
    subredditInfoChange("sortingOption", sortOption);
  };

  return (
    <section className="container mt-4 mx-auto flex flex-col flex-wrap content-center gap-4 items-center">
      <form
        onSubmit={handleNewSearch}
        className="h-full relative w-full max-w-[600px] rounded-2xl"
      >
        <input
          placeholder="Enter A Subreddit"
          type="text"
          name="search"
          required
          className="bg-primary pl-4 h-10 max-w-[600px] w-full text-background rounded-2xl"
        />

        <Button
          className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
          size="default"
          variant={"white"}
        >
          <svg
            className="w-8 h-8 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </Button>
      </form>
      <SortingOptions buttonClick={handleChangeSortingOption}></SortingOptions>
      {errorMessage ? (
        <h1>
          {errorMessage} : {subreddit.subredditName}
        </h1>
      ) : (
        <SubRedditInfo subredditInfo={subredditInfo} />
      )}
    </section>
  );
};

const SubRedditInfo = ({ subredditInfo }) => {
  return (
    <>
      {subredditInfo && (
        <section className="flex flex-col gap-4 items-center">
          <div className="inline-flex justify-center max-w-[400px] max-h-[400px] rounded-full w-full h-full">
            <img
              className="rounded-full aspect-square object-cover"
              src={subredditInfo.icon}
              alt=""
            />
          </div>
          <header className="text-primary text-4xl">
            <span className="text-secondary">r/</span>
            {subredditInfo.title}
          </header>
          <p className="text-primary text-lg">{subredditInfo.description}</p>
        </section>
      )}
    </>
  );
};
