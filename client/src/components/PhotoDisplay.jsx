import React from 'react';

const PhotoDisplay = ({photo, index, showGallery, toggleGallery}) => {

  return (
    <div className="photoDiv">
      <img className="photos" id={`image${index}`} src={photo} onClick={toggleGallery} />
    </div>
  )
}

export default PhotoDisplay;