import React from "react";
import StoriesHeader from "../components/StoriesHeader/StoriesHeader";
import HappyStories from "../components/HappyStories/HappyStories";


const StoriesContainer = () => {

  return (
    <React.Fragment>
      <StoriesHeader />
      <HappyStories />
    </React.Fragment>
  );
};

export default StoriesContainer;
