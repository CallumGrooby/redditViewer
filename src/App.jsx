import { useEffect, useState } from "react";
import { ApiFetch } from "./ultilies/ApiFetch";
import { SubredditSearch } from "./components/SubredditSearch";
import { Header } from "./components/Header";

function App() {
  const [subredditInfo, setSubredditInfo] = useState({
    subredditName: "",
    sortingOption: "Hot",
  });

  const handleSubRedditInfoChange = (key, value) => {
    setSubredditInfo((prevInfo) => ({
      ...prevInfo,
      [key]: value,
    }));
  };

  return (
    <>
      <Header />
      <SubredditSearch
        subreddit={subredditInfo}
        subredditInfoChange={handleSubRedditInfoChange}
      />
      <ApiFetch subredditInfo={subredditInfo} />
    </>
  );
}

export default App;
