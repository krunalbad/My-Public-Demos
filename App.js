import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";

import Album from "./src/Album";

const album = {
  name: "Remote Control",
  artist: "The Batman",
  release: 2016,
  cover: 'https://cdn.wccftech.com/wp-content/uploads/2020/03/Batman-Arkham-Knight-740x416.jpg',
  tracks: [
    { name: "Stories Over" },
    { name: "More", artist: "Jan Blomqvist, Elena Pitoulis" },
    { name: "Empty Floor" },
    { name: "Her Great Escape" },
    { name: "Dark Noise" },
    { name: "Drift", artist: "Jan Blomqvist, Aparde" },
    { name: "Same Mistake" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Back in the Taxi" },
    { name: "Ghosttrack" },
    { name: "Just OK" },
    { name: "The End" },
  ],
};

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Album {...{ album }} />
    </>
  );
};
