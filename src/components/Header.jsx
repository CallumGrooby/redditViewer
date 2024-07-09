import React from "react";

export const Header = () => {
  return (
    <section className="container mx-auto">
      <header className="mt-28 flex flex-col gap-4 justify-center items-center content-center font-mavenPro text-primary">
        <h1 className="text-6xl">
          Scro<span className="text-secondary">ll</span>er
        </h1>
        <p className="text-xl">
          Browse your favourite{" "}
          <span className="text-secondary">subreddits</span>
        </p>
      </header>
    </section>
  );
};
