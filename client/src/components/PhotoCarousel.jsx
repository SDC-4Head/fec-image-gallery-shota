import React from 'react';

const PhotoCarousel = ({ photo, index, projectUpTop, clickIndex }) => {
  let { url } = photo;

  return (
    <div className="photoFrame">
      <img className={index === clickIndex ? "photoEntryFocus" : "photoEntry"} id={index} src={url} onClick={projectUpTop}/>
    </div>
  );
};

export default PhotoCarousel;