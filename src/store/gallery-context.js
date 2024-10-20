import React from "react";

const GalleryContext = React.createContext({
  samples: [],
  visiblity: false,
  id: "",
  sortQueryType: "",
  setId: () => {},
  showPreview: () => {},
  hidePreview: () => {},
  setSortQuery: () => {},
});

export default GalleryContext;
