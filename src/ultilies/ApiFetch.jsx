import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageGallery from "../components/ImageGallery";

// const subreddit = "wallpapers";

export const ApiFetch = ({ subredditInfo }) => {
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!subredditInfo) return;
    setPosts([]);
    setAfter(null);
    fetchImages(subredditInfo);
  }, [subredditInfo]);

  const fetchImages = async (subreddit, after = null) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${
          subredditInfo.subredditName
        }/${subreddit.sortingOption.toLowerCase()}.json?limit=25&t=all$${
          after ? `&after=${after}` : ""
        }`
      );
      console.log(response);
      const data = await response.json();
      //Gets the object called children from the data

      const newPosts = data.data.children
        .map((post) => post.data)
        .filter((post) => post.post_hint === "image")
        .map((post) => ({
          title: post.title,
          author: post.author,
          url: post.url,
          permaLink: post.permalink,
        }));

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setAfter(data.data.after);
      setError(null);
    } catch (err) {
      setError("Failed to fetch images");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = () => {
    if (after) {
      fetchImages(subredditInfo, after);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    loadMoreImages();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <section className="container mx-auto">
      <ImageGallery posts={posts} />

      <div className="container mx-auto flex flex-row gap-4 my-8 flex-wrap justify-center">
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <button onClick={() => loadMoreImages()}>Get More Images</button>
        )}
      </div>
    </section>
  );
};
